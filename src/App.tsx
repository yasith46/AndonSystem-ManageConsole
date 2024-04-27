import React, { useState } from 'react';
import styles from './App.module.scss';
import Classnames from 'classnames';

interface Callrecord {
    status: string;
    mancalldesc: string;
    mancallto: string;
}

interface Deptrecord {
    deptname: string;
    deptid: number;
}

interface Conrecord {
    conname: string;
    conid: number;
}

function App() {
    const [showDashboard, setShowDashboard] = useState(true);
    const [showManCall, setShowManCall] = useState(false);
    const [showManCon, setShowManCon] = useState(false);
    const [showManDept, setShowManDept] = useState(false);

    const toggleDashboardVisibility = () => {
        setShowDashboard(true);
        setShowManCall(false);
        setShowManCon(false);
        setShowManDept(false);
    };

    const toggleManCallVisibility = () => {
        setShowDashboard(false);
        setShowManCall(true);
        setShowManCon(false);
        setShowManDept(false);
    };

    const toggleManConVisibility = () => {
        setShowDashboard(false);
        setShowManCall(false);
        setShowManCon(true);
        setShowManDept(false);
    };

    const toggleManDeptVisibility = () => {
        setShowDashboard(false);
        setShowManCall(false);
        setShowManCon(false);
        setShowManDept(true);
    };

    const [callrecords, setCallrecords] = useState<Callrecord[]>([]);

    const [newCallrecord, setNewCallrecord] = useState<Callrecord>({
        status: '',
        mancalldesc: '',
        mancallto: '',
    });

    const [showAddCallrecord, setShowAddCallrecord] = useState(false);

    const toggleAddCallrecord = () => {
        setNewCallrecord({ status: '', mancalldesc: '', mancallto: '' }); // Reset newCallrecord state
        setShowAddCallrecord(!showAddCallrecord);
    };

    const handleCallInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setNewCallrecord({ ...newCallrecord, [name]: value });
    };

    const handleAddCallrecord = () => {
        setCallrecords([...callrecords, newCallrecord]);
        setNewCallrecord({ status: '', mancalldesc: '', mancallto: '' });
        toggleAddCallrecord();
    };

    const handleCancelAddCallrecord = () => {
        setNewCallrecord({ status: '', mancalldesc: '', mancallto: '' });
        toggleAddCallrecord();
    };

    const handleDeleteCallrecord = (callIndex: number) => {
        const updatedCallrecords = [...callrecords];
        updatedCallrecords.splice(callIndex, 1); // Remove the record at the specified callIndex
        setCallrecords(updatedCallrecords);
    };

    const [showEditCallrecord, setShowEditCallrecord] = useState(false);

    const toggleEditCallrecord = () => {
        setShowEditCallrecord(!showEditCallrecord);
    };

    const [editingCallrecord, setEditingCallrecord] = useState<Callrecord | null>(null);
    const [editingCallrecordIndex, setEditingCallrecordIndex] = useState<number>(-1);

    const handleEditCallrecord = (callIndex: number) => {
        setEditingCallrecord(callrecords[callIndex]);
        setEditingCallrecordIndex(callIndex); // Remember the callIndex of the record being edited
        toggleEditCallrecord();
    };

    const handleEditCancelCallrecord = () => {
        setEditingCallrecord(null);
        setEditingCallrecordIndex(-1);
        toggleEditCallrecord(); // Hide the edit form
    };

    const handleEditAddCallrecord = () => {
        if (editingCallrecord && editingCallrecordIndex !== -1) {
            // Remove the old record
            const updatedCallrecords = callrecords.filter(
                (callrecord, callIndex) => callIndex !== editingCallrecordIndex,
            );

            // Add the new record with updated details
            const newEditedCallrecord: Callrecord = {
                status:
                    newCallrecord.status !== '' ? newCallrecord.status : editingCallrecord.status,
                mancalldesc:
                    newCallrecord.mancalldesc !== ''
                        ? newCallrecord.mancalldesc
                        : editingCallrecord.mancalldesc,
                mancallto:
                    newCallrecord.mancallto !== ''
                        ? newCallrecord.mancallto
                        : editingCallrecord.mancallto,
            };

            setCallrecords([...updatedCallrecords, newEditedCallrecord]);
            setEditingCallrecord(null); // Clear the editing state
            setEditingCallrecordIndex(-1); // Reset the editing callIndex
        }
        toggleEditCallrecord(); // Hide the edit form
    };

    const [conrecords, setConrecords] = useState<Conrecord[]>([]);

    const [newConrecord, setNewConrecord] = useState<Conrecord>({
        conname: '',
        conid: 0,
    });

    const [showAddConrecord, setShowAddConrecord] = useState(false);

    const toggleAddConrecord = () => {
        setNewConrecord({ conname: '', conid: 0 }); // Reset newConrecord state
        setShowAddConrecord(!showAddConrecord);
    };

    const handleConInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setNewConrecord({ ...newConrecord, [name]: value });
    };

    const handleAddConrecord = () => {
        setConrecords([...conrecords, newConrecord]);
        setNewConrecord({ conname: '', conid: 0 });
        toggleAddConrecord();
    };

    const handleCancelAddConrecord = () => {
        setNewConrecord({ conname: '', conid: 0 });
        toggleAddConrecord();
    };

    const handleDeleteConrecord = (conIndex: number) => {
        const updatedConrecords = [...conrecords];
        updatedConrecords.splice(conIndex, 1); // Remove the record at the specified conIndex
        setConrecords(updatedConrecords);
    };

    const [showEditConrecord, setShowEditConrecord] = useState(false);

    const toggleEditConrecord = () => {
        setShowEditConrecord(!showEditConrecord);
    };

    const [editingConrecord, setEditingConrecord] = useState<Conrecord | null>(null);
    const [editingConrecordIndex, setEditingConrecordIndex] = useState<number>(-1);

    const handleEditConrecord = (conIndex: number) => {
        setEditingConrecord(conrecords[conIndex]);
        setEditingConrecordIndex(conIndex); // Remember the conIndex of the record being edited
        toggleEditConrecord();
    };

    const handleEditCancelConrecord = () => {
        setEditingConrecord(null);
        setEditingConrecordIndex(-1);
        toggleEditConrecord(); // Hide the edit form
    };

    const handleEditAddConrecord = () => {
        if (editingConrecord && editingConrecordIndex !== -1) {
            // Remove the old record
            const updatedConrecords = conrecords.filter(
                (conrecord, conIndex) => conIndex !== editingConrecordIndex,
            );

            // Add the new record with updated details
            const newEditedConrecord: Conrecord = {
                conname:
                    newConrecord.conname !== ''
                        ? newConrecord.conname
                        : editingConrecord.conname,
                conid:
                    newConrecord.conid !== 0 ? newConrecord.conid : editingConrecord.conid,
            };

            setConrecords([...updatedConrecords, newEditedConrecord]);
            setEditingConrecord(null); // Clear the editing state
            setEditingConrecordIndex(-1); // Reset the editing deptIndex
        }
        toggleEditConrecord(); // Hide the edit form
    };

    const [deptrecords, setDeptrecords] = useState<Deptrecord[]>([]);

    const [newDeptrecord, setNewDeptrecord] = useState<Deptrecord>({
        deptname: '',
        deptid: 0,
    });

    const [showAddDeptrecord, setShowAddDeptrecord] = useState(false);

    const toggleAddDeptrecord = () => {
        setNewDeptrecord({ deptname: '', deptid: 0 }); // Reset newCallrecord state
        setShowAddDeptrecord(!showAddDeptrecord);
    };

    const handleDeptInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setNewDeptrecord({ ...newDeptrecord, [name]: value });
    };

    const handleAddDeptrecord = () => {
        setDeptrecords([...deptrecords, newDeptrecord]);
        setNewDeptrecord({ deptname: '', deptid: 0 });
        toggleAddDeptrecord();
    };

    const handleCancelAddDeptrecord = () => {
        setNewDeptrecord({ deptname: '', deptid: 0 });
        toggleAddDeptrecord();
    };

    const handleDeleteDeptrecord = (deptIndex: number) => {
        const updatedDeptrecords = [...deptrecords];
        updatedDeptrecords.splice(deptIndex, 1); // Remove the record at the specified deptIndex
        setDeptrecords(updatedDeptrecords);
    };

    const [showEditDeptrecord, setShowEditDeptrecord] = useState(false);

    const toggleEditDeptrecord = () => {
        setShowEditDeptrecord(!showEditDeptrecord);
    };

    const [editingDeptrecord, setEditingDeptrecord] = useState<Deptrecord | null>(null);
    const [editingDeptrecordIndex, setEditingDeptrecordIndex] = useState<number>(-1);

    const handleEditDeptrecord = (deptIndex: number) => {
        setEditingDeptrecord(deptrecords[deptIndex]);
        setEditingDeptrecordIndex(deptIndex); // Remember the deptIndex of the record being edited
        toggleEditDeptrecord();
    };

    const handleEditCancelDeptrecord = () => {
        setEditingDeptrecord(null);
        setEditingDeptrecordIndex(-1);
        toggleEditDeptrecord(); // Hide the edit form
    };

    const handleEditAddDeptrecord = () => {
        if (editingDeptrecord && editingDeptrecordIndex !== -1) {
            // Remove the old record
            const updatedDeptrecords = deptrecords.filter(
                (deptrecord, deptIndex) => deptIndex !== editingDeptrecordIndex,
            );

            // Add the new record with updated details
            const newEditedDeptrecord: Deptrecord = {
                deptname:
                    newDeptrecord.deptname !== ''
                        ? newDeptrecord.deptname
                        : editingDeptrecord.deptname,
                deptid:
                    newDeptrecord.deptid !== 0 ? newDeptrecord.deptid : editingDeptrecord.deptid,
            };

            setDeptrecords([...updatedDeptrecords, newEditedDeptrecord]);
            setEditingDeptrecord(null); // Clear the editing state
            setEditingDeptrecordIndex(-1); // Reset the editing deptIndex
        }
        toggleEditDeptrecord(); // Hide the edit form
    };



    return (
        <div className={styles.App}>
            <div className={styles.topbar}>
                <h1 className={styles.logotext}>ANDON</h1>
                <button className={styles.account}></button>
            </div>

            <div className={styles.navbar}>
                <button
                    className={Classnames(styles.dashbutt, {
                        [styles.navbutclicked]: showDashboard,
                    })}
                    onClick={toggleDashboardVisibility}
                >
                    <img src="/src/assets/dash.svg" alt="" className={styles.dashim} />
                </button>

                <button
                    className={Classnames(styles.conbutt, {
                        [styles.navbutclicked]: showManCon,
                    })}
                    onClick={toggleManConVisibility}
                >
                    <img src="/src/assets/machine.svg" alt="" className={styles.dashim} />
                </button>

                <button
                    className={Classnames(styles.callbutt, {
                        [styles.navbutclicked]: showManCall,
                    })}
                    onClick={toggleManCallVisibility}
                >
                    <img src="/src/assets/call.svg" alt="" className={styles.dashim} />
                </button>

                <button
                    className={Classnames(styles.deptbutt, {
                        [styles.navbutclicked]: showManDept,
                    })}
                    onClick={toggleManDeptVisibility}
                >
                    <img src="/src/assets/dept.svg" alt="" className={styles.dashim} />
                </button>
            </div>

            {showDashboard && (
                <div className={styles.dashboard}>
                    <h1 className={styles.boardname}>Dashboard</h1>
                    <div className={styles.graph}>
                        <h3 className={styles.cardtitle}>Daily Andon Calls </h3>
                    </div>
                    <div className={styles.stats}>
                        <h3 className={styles.cardtitle}>Stats</h3>
                        <div className={styles.statgrid}>
                            <h1 className={styles.statname}>Downtime for the day</h1>
                            <h1 className={styles.statnum}>02:10:00 </h1>
                            <h1 className={styles.statname}>Average Rise time</h1>
                            <h1 className={styles.statbad}>12:25 </h1>
                            <h1 className={styles.statname}>Anomalies</h1>
                            <h1 className={styles.statnum}>None</h1>
                            <h1 className={styles.statname}>Anomalies</h1>
                            <h1 className={styles.statnum}>None</h1>
                            <h1 className={styles.statname}>Anomalies</h1>
                            <h1 className={styles.statnum}>None</h1>
                        </div>
                    </div>
                    <div className={styles.currentcalls}>
                        <h3 className={styles.cardtitle}>Current Andon Calls</h3>
                        <div className={styles.calls}>
                            <div className={styles.callsat}>
                                <div className={styles.callsatleft}>
                                    <h1 className={styles.machinenum}>MA00251</h1>
                                    <h3 className={styles.department}>Sewing Department</h3>
                                    <h2 className={styles.calltotext}>Andon Call to</h2>
                                    <h3 className={styles.callto}>CNC Tech</h3>
                                </div>
                                <div className={styles.callsatright}>
                                    <div className={styles.timeblock}>
                                        <h1 className={styles.time}>08:29</h1>
                                        <div className={styles.status} />
                                    </div>
                                    <h1 className={styles.attended}>Not Attended Yet</h1>
                                </div>
                            </div>
                            <div className={styles.att}>
                                <div className={styles.callsatleft}>
                                    <h1 className={styles.machinenum}>MA00251</h1>
                                    <h3 className={styles.department}>Sewing Department</h3>
                                </div>
                                <div className={styles.callsatright}>
                                    <div className={styles.timeblock}>
                                        <h1 className={styles.time}>08:29</h1>
                                        <div className={styles.status} />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.att}>
                                <div className={styles.callsatleft}>
                                    <h1 className={styles.machinenum}>MA00251</h1>
                                    <h3 className={styles.department}>Sewing Department</h3>
                                </div>
                                <div className={styles.callsatright}>
                                    <div className={styles.timeblock}>
                                        <h1 className={styles.time}>08:29</h1>
                                        <div className={styles.status} />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.att}>
                                <div className={styles.callsatleft}>
                                    <h1 className={styles.machinenum}>MA00251</h1>
                                    <h3 className={styles.department}>Sewing Department</h3>
                                </div>
                                <div className={styles.callsatright}>
                                    <div className={styles.timeblock}>
                                        <h1 className={styles.time}>08:29</h1>
                                        <div className={styles.status} />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.att}>
                                <div className={styles.callsatleft}>
                                    <h1 className={styles.machinenum}>MA00251</h1>
                                    <h3 className={styles.department}>Sewing Department</h3>
                                </div>
                                <div className={styles.callsatright}>
                                    <div className={styles.timeblock}>
                                        <h1 className={styles.time}>08:29</h1>
                                        <div className={styles.status} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {showManCall && (
                <div className={styles.managecalls}>
                    <h1 className={styles.boardname}>Manage Calls</h1>

                    <div className={styles.coltitle}>
                        <h1 className={styles.coltitletext}>Color</h1>
                        <h1 className={styles.coltitletext}>Description </h1>
                        <div></div>
                        <h1 className={styles.coltitletext}>Call To</h1>
                    </div>

                    {callrecords.map((callrecord, callIndex) => (
                        <div key={callIndex}>
                            {callIndex !== editingCallrecordIndex && (
                                <div className={styles.managecallcard}>
                                    <div className={styles.coltitle}>
                                        <h1 className={Classnames(styles.cardtext, styles.stattmp)}>
                                            {callrecord.status}
                                        </h1>
                                        <h1
                                            className={Classnames(
                                                styles.cardtext,
                                                styles.mancalldesc,
                                            )}
                                        >
                                            {callrecord.mancalldesc}
                                        </h1>
                                        <h1
                                            className={Classnames(
                                                styles.cardtext,
                                                styles.mancallto,
                                            )}
                                        >
                                            {callrecord.mancallto}
                                        </h1>
                                        <div className={styles.mancallbut}>
                                            <button
                                                className={styles.mancalldel}
                                                onClick={() => handleEditCallrecord(callIndex)}
                                            >
                                                <img
                                                    src="/src/assets/edit.svg"
                                                    alt=""
                                                    className={styles.editsvg}
                                                />
                                            </button>
                                            <button
                                                className={styles.mancalledit}
                                                onClick={() => handleDeleteCallrecord(callIndex)}
                                            >
                                                <img
                                                    src="/src/assets/del.svg"
                                                    alt=""
                                                    className={styles.editsvg}
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}

                    {showAddCallrecord && (
                        <div className={Classnames(styles.managecallcard, styles.cardedit)}>
                            <h1 className={styles.cardedittitle}>Add Call</h1>
                            <div className={styles.coltitle}>
                                <select
                                    name="status"
                                    className={styles.colorlist}
                                    value={newCallrecord.status}
                                    onChange={handleCallInputChange}
                                >
                                    <option value="" disabled selected>
                                        Color
                                    </option>
                                    <option value="Red">Red </option>
                                    <option value="Yellow">Yellow</option>
                                    <option value="Green">Green</option>
                                    <option value="Blue">Blue</option>
                                    <option value="White">White</option>
                                </select>
                                <input
                                    type="text"
                                    name="mancalldesc"
                                    value={newCallrecord.mancalldesc}
                                    onChange={handleCallInputChange}
                                    placeholder="Description"
                                    className={styles.mancalldescin}
                                />
                                <input
                                    type="text"
                                    name="mancallto"
                                    value={newCallrecord.mancallto}
                                    onChange={handleCallInputChange}
                                    placeholder="Call to"
                                    className={styles.mancalltoin}
                                />

                                <div className={styles.mancallbut}>
                                    <button
                                        className={styles.mancalldel}
                                        onClick={handleAddCallrecord}
                                    >
                                        <img
                                            src="/src/assets/check.svg"
                                            alt=""
                                            className={styles.editsvg}
                                        />
                                    </button>
                                    <button
                                        className={styles.mancalledit}
                                        onClick={handleCancelAddCallrecord}
                                    >
                                        <img
                                            src="/src/assets/close.svg"
                                            alt=""
                                            className={styles.editsvg}
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {editingCallrecord && (
                        <div className={Classnames(styles.managecallcard, styles.cardedit)}>
                            <h1 className={styles.cardedittitle}>Edit Call</h1>
                            <div className={styles.coltitle}>
                                <select
                                    name="status"
                                    className={styles.colorlist}
                                    value={newCallrecord.status}
                                    onChange={handleCallInputChange}
                                >
                                    <option value="" disabled selected>
                                        {editingCallrecord ? editingCallrecord.status : ''}
                                    </option>
                                    <option value="Red">Red </option>
                                    <option value="Yellow">Yellow</option>
                                    <option value="Green">Green</option>
                                    <option value="Blue">Blue</option>
                                    <option value="White">White</option>
                                </select>
                                <input
                                    type="text"
                                    name="mancalldesc"
                                    value={newCallrecord.mancalldesc}
                                    onChange={handleCallInputChange}
                                    placeholder={
                                        editingCallrecord
                                            ? editingCallrecord.mancalldesc
                                            : 'Description'
                                    }
                                    className={styles.mancalldescin}
                                />
                                <input
                                    type="text"
                                    name="mancallto"
                                    value={newCallrecord.mancallto}
                                    onChange={handleCallInputChange}
                                    placeholder={
                                        editingCallrecord ? editingCallrecord.mancallto : 'Call to'
                                    }
                                    className={styles.mancalltoin}
                                />

                                <div className={styles.mancallbut}>
                                    <button
                                        className={styles.mancalldel}
                                        onClick={handleEditAddCallrecord}
                                    >
                                        <img
                                            src="/src/assets/check.svg"
                                            alt=""
                                            className={styles.editsvg}
                                        />
                                    </button>
                                    <button
                                        className={styles.mancalledit}
                                        onClick={handleEditCancelCallrecord}
                                    >
                                        <img
                                            src="/src/assets/close.svg"
                                            alt=""
                                            className={styles.editsvg}
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {!showAddCallrecord && !editingCallrecord && (
                        <button className={styles.addbutton} onClick={toggleAddCallrecord}>
                            Add Calls +
                        </button>
                    )}
                </div>
            )}

            {showManCon && (
                <div className={styles.manageconsoles}>
                    <h1 className={styles.boardname}>Manage Consoles</h1>
                    <div className={styles.coltitle}>
                        <h1 className={styles.coltitletext}>Machine</h1>
                        <div></div>
                        <h1 className={styles.coltitletext}>Console ID</h1>
                    </div>

                    {conrecords.map((conrecord, conIndex) => (
                        <div key={conIndex}>
                            {conIndex !== editingConrecordIndex && (
                                <div className={Classnames(styles.managecallcard, styles.con)}>
                                    <div className={styles.coltitle}>
                                        <h1 className={Classnames(styles.cardtext, styles.machineno)}>
                                            {conrecord.conname}
                                        </h1>
                                        <h1 className={Classnames(styles.cardtext, styles.conid)}>
                                            {conrecord.conid}
                                        </h1>
                                        <div className={styles.concalls}></div>
                                        <div className={styles.mancallbut}>
                                            <button className={styles.mancalldel} onClick={() => handleEditConrecord(conIndex)}>
                                                <img
                                                    src="/src/assets/edit.svg"
                                                    alt=""
                                                    className={styles.editsvg}
                                                />
                                            </button>
                                            <button className={styles.mancalledit} onClick={() => handleDeleteConrecord(conIndex)}>
                                                <img
                                                    src="/src/assets/del.svg"
                                                    alt=""
                                                    className={styles.editsvg}
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}

                    {showAddConrecord && (
                        <div className={Classnames(styles.managecallcard, styles.con, styles.edit2)}>
                            <h1 className={styles.cardedittitle}>Edit </h1>
                            <div className={styles.coltitle}>
                                <input 
                                    type="text"
                                    name="conname"
                                    value={newConrecord.conname}
                                    onChange={handleConInputChange}
                                    placeholder="Console name"
                                    className={styles.machinein} />

                                <input 
                                    type="number"
                                    name="conid"
                                    value={newConrecord.conid}
                                    onChange={handleConInputChange}
                                    placeholder="ID"
                                    className={styles.deptin} />

                                <div className={styles.mancallbut}>
                                    <button className={styles.mancalldel} onClick={handleAddConrecord}>
                                        <img
                                            src="/src/assets/check.svg"
                                            alt=""
                                            className={styles.editsvg}
                                        />
                                    </button>
                                    <button className={styles.mancalledit} onClick={handleCancelAddConrecord}>
                                        <img
                                            src="/src/assets/close.svg"
                                            alt=""
                                            className={styles.editsvg}
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {editingConrecord && (
                        <div className={Classnames(styles.managecallcard, styles.con, styles.edit2)}>
                            <h1 className={styles.cardedittitle}>Edit </h1>
                            <div className={styles.coltitle}>
                                <input 
                                    type="text"
                                    name="conname"
                                    value={newConrecord.conname}
                                    onChange={handleConInputChange}
                                    placeholder={editingConrecord
                                        ? editingConrecord.conname
                                        : 'Console name'}
                                    className={styles.machinein} />

                                <input 
                                    type="number"
                                    name="conid"
                                    value={newConrecord.conid}
                                    onChange={handleConInputChange}
                                    placeholder={editingConrecord
                                        ? editingConrecord.conid.toString()
                                        : '0'}
                                    className={styles.deptin} />

                                <div className={styles.mancallbut}>
                                    <button className={styles.mancalldel} onClick={handleEditAddConrecord}>
                                        <img
                                            src="/src/assets/check.svg"
                                            alt=""
                                            className={styles.editsvg}
                                        />
                                    </button>
                                    <button className={styles.mancalledit} onClick={handleEditCancelConrecord}>
                                        <img
                                            src="/src/assets/close.svg"
                                            alt=""
                                            className={styles.editsvg}
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {!showAddConrecord && !editingConrecord && (
                        <button className={styles.addbutton} onClick={toggleAddConrecord}>
                            Add Consoles +
                        </button>
                    )}
                </div>
            )}

            {showManDept && (
                <div className={styles.managedepts}>
                    <h1 className={styles.boardname}>Manage Users</h1>
                    <div className={styles.coltitle}>
                        <h1 className={styles.coltitletext}>Name</h1>
                        <h1 className={Classnames(styles.coltitletext, styles.deptnumtit)}>
                            Dept. Number{' '}
                        </h1>
                    </div>

                    {deptrecords.map((deptrecord, deptIndex) => (
                        <div key={deptIndex}>
                            {deptIndex !== editingDeptrecordIndex && (
                                <div className={Classnames(styles.managecallcard, styles.dep1)}>
                                    <div className={styles.coltitle}>
                                        <h1
                                            className={Classnames(styles.cardtext, styles.deptname)}
                                        >
                                            {deptrecord.deptname}
                                        </h1>
                                        <h1 className={Classnames(styles.cardtext, styles.deptnum)}>
                                            {deptrecord.deptid}
                                        </h1>
                                        <div className={styles.mancallbut}>
                                            <button className={styles.mancalldel} onClick={() => handleEditDeptrecord(deptIndex)}>
                                                <img
                                                    src="/src/assets/edit.svg"
                                                    alt=""
                                                    className={styles.editsvg}
                                                />
                                            </button>
                                            <button className={styles.mancalledit} onClick={() => handleDeleteDeptrecord(deptIndex)}>
                                                <img
                                                    src="/src/assets/del.svg"
                                                    alt=""
                                                    className={styles.editsvg}
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}

                    {showAddDeptrecord && (
                        <div
                            className={Classnames(
                                styles.managecallcard,
                                styles.cardedit,
                                styles.dep2,
                            )}
                        >
                            <h1 className={styles.cardedittitle}>Edit </h1>
                            <div className={styles.coltitle}>
                                <input
                                    type="text"
                                    name="deptname"
                                    value={newDeptrecord.deptname}
                                    onChange={handleDeptInputChange}
                                    placeholder="Department name"
                                    className={styles.deptnamein}
                                />

                                <input
                                    type="number"
                                    name="deptid"
                                    value={newDeptrecord.deptid}
                                    onChange={handleDeptInputChange}
                                    placeholder="ID"
                                    className={styles.deptnumin}
                                />

                                <div className={styles.mancallbut}>
                                    <button className={styles.mancalldel} onClick={handleAddDeptrecord}>
                                        <img
                                            src="/src/assets/check.svg"
                                            alt=""
                                            className={styles.editsvg}
                                        />
                                    </button>
                                    <button className={styles.mancalledit} onClick={handleCancelAddDeptrecord}>
                                        <img
                                            src="/src/assets/close.svg"
                                            alt=""
                                            className={styles.editsvg}
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {editingDeptrecord && (
                        <div
                            className={Classnames(
                                styles.managecallcard,
                                styles.cardedit,
                                styles.dep2,
                            )}
                        >
                            <h1 className={styles.cardedittitle}>Edit </h1>
                            <div className={styles.coltitle}>
                                <input
                                    type="text"
                                    name="deptname"
                                    value={newDeptrecord.deptname}
                                    onChange={handleDeptInputChange}
                                    placeholder={
                                        editingDeptrecord
                                            ? editingDeptrecord.deptname
                                            : 'Department Name'
                                    }
                                    className={styles.deptnamein}
                                />

                                <input
                                    type="number"
                                    name="deptid"
                                    value={newDeptrecord.deptid}
                                    onChange={handleDeptInputChange}
                                    placeholder={
                                        editingDeptrecord
                                            ? editingDeptrecord.deptid.toString()
                                            : '0'
                                    }
                                    className={styles.deptnumin}
                                />

                                <div className={styles.mancallbut}>
                                    <button
                                        className={styles.mancalldel}
                                        onClick={handleEditAddDeptrecord}
                                    >
                                        <img
                                            src="/src/assets/check.svg"
                                            alt=""
                                            className={styles.editsvg}
                                        />
                                    </button>
                                    <button
                                        className={styles.mancalledit}
                                        onClick={handleEditCancelDeptrecord}
                                    >
                                        <img
                                            src="/src/assets/close.svg"
                                            alt=""
                                            className={styles.editsvg}
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {!showAddDeptrecord && !editingDeptrecord && (
                        <button className={styles.addbutton} onClick={toggleAddDeptrecord}>
                            Add Departments +
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}

export default App;
