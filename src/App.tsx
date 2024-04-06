import React, { useState } from 'react';
import styles from './App.module.scss';
import Classnames from 'classnames';

function App() {
    const [showDashboard, setShowDashboard] = useState(true);
    const [showManCall, setShowManCall] = useState(false);

    const toggleDashboardVisibility = () => {
        setShowDashboard(true);
        setShowManCall(false);
    };

    const toggleManCallVisibility = () => {
        setShowDashboard(false);
        setShowManCall(true);
    };

    return (
        <div className={styles.App}>
            <div className={styles.topbar}>
                <h1 className={styles.logotext}>ANDON</h1>
                <button className={styles.account}></button>
            </div>
            <div className={styles.navbar}>
                <button className={styles.dashbutt} onClick={toggleDashboardVisibility}>
                    Button
                </button>
                <button className={styles.managebutt} onClick={toggleManCallVisibility}>
                    Button
                </button>
            </div>
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
            <div className={styles.managecalls}>
                <h1 className={styles.boardname}>Manage Calls</h1>
                <div className={styles.coltitle}>
                    <h1 className={styles.coltitletext}>Color</h1>
                    <h1 className={styles.coltitletext}>Description </h1>
                    <div></div>
                    <h1 className={styles.coltitletext}>Call To</h1>
                </div>
                <div className={styles.managecallcard}>
                    <div className={styles.coltitle}>
                        <div className={Classnames(styles.status, styles.manage)} />
                        <h1 className={Classnames(styles.cardtext, styles.mancalldesc)}>
                            Heading 1
                        </h1>
                        <h1 className={Classnames(styles.cardtext, styles.mancallto)}>Heading 1</h1>
                        <div className={styles.mancallbut}>
                            <button className={styles.mancalldel}>
                                <img src="/src/assets/edit.svg" alt="" className={styles.editsvg} />
                            </button>
                            <button className={styles.mancalledit}>
                                <img src="/src/assets/del.svg" alt="" className={styles.editsvg} />
                            </button>
                        </div>
                    </div>
                </div>
                <div className={Classnames(styles.managecallcard, styles.cardedit)}>
                    <h1 className={styles.cardedittitle}>Edit </h1>
                    <div className={styles.coltitle}>
                        <select className={styles.colorlist}>
                            <option>
                                <div className={styles.colorop}>
                                    <h1 className={styles.op1}>O</h1>
                                    <h1 className={styles.op}>Orange</h1>
                                </div>
                            </option>
                            <option>Banana</option>
                            <option>Watermelon</option>
                        </select>
                        <input className={styles.mancalldescin} />
                        <input className={styles.mancalltoin} />
                        <div className={styles.mancallbut}>
                            <button className={styles.mancalldel}>
                                <img
                                    src="/src/assets/check.svg"
                                    alt=""
                                    className={styles.editsvg}
                                />
                            </button>
                            <button className={styles.mancalledit}>
                                <img
                                    src="/src/assets/close.svg"
                                    alt=""
                                    className={styles.editsvg}
                                />
                            </button>
                        </div>
                    </div>
                </div>
                <button className={styles.addbutton}>Add Calls +</button>
            </div>
            <div className={styles.manageconsoles}>
                <h1 className={styles.boardname}>Manage Consoles</h1>
                <div className={styles.coltitle}>
                    <h1 className={styles.coltitletext}>Machine</h1>
                    <h1 className={styles.coltitletext}>Department</h1>
                    <div></div>
                    <h1 className={styles.coltitletext}>Console ID</h1>
                    <h1 className={styles.coltitletext}>Calls</h1>
                </div>
                <div className={Classnames(styles.managecallcard, styles.con)}>
                    <div className={styles.coltitle}>
                        <h1 className={Classnames(styles.cardtext, styles.machineno)}>MA00251</h1>
                        <h1 className={Classnames(styles.cardtext, styles.deptcon)}>
                            Sewing Department
                        </h1>
                        <h1 className={Classnames(styles.cardtext, styles.mancallto)}>
                            1025668314
                        </h1>
                        <div className={styles.concalls}>
                            <div className={styles.callgrid}>
                                <div className={Classnames(styles.st1, styles.call1)} />
                                <div className={Classnames(styles.st1, styles.call2)} />
                                <div className={Classnames(styles.st1, styles.call3)} />
                            </div>
                        </div>
                        <div className={styles.mancallbut}>
                            <button className={styles.mancalldel}>
                                <img src="/src/assets/edit.svg" alt="" className={styles.editsvg} />
                            </button>
                            <button className={styles.mancalledit}>
                                <img src="/src/assets/del.svg" alt="" className={styles.editsvg} />
                            </button>
                        </div>
                    </div>
                </div>
                <div className={Classnames(styles.managecallcard, styles.con, styles.edit2)}>
                    <h1 className={styles.cardedittitle}>Edit </h1>
                    <h1 className={styles.button2txt}>Heading 1</h1>
                    <div className={styles.coltitle}>
                        <input className={styles.machinein} />
                        <input className={styles.deptin} />
                        <input className={styles.conin} />
                        <div className={styles.selcalls}>
                            <select className={styles.col1}>
                                <option>Apple</option>
                                <option>Banana</option>
                                <option>Watermelon</option>
                            </select>
                            <h1 className={styles.button1txt}>Heading 1</h1>
                            <select className={styles.col1}>
                                <option>Apple</option>
                                <option>Banana</option>
                                <option>Watermelon</option>
                            </select>
                            <h1 className={styles.button1txt}>Heading 1</h1>
                            <select className={styles.col1}>
                                <option>Apple</option>
                                <option>Banana</option>
                                <option>Watermelon</option>
                            </select>
                        </div>
                        <div className={styles.mancallbut}>
                            <button className={styles.mancalldel}>
                                <img
                                    src="/src/assets/check.svg"
                                    alt=""
                                    className={styles.editsvg}
                                />
                            </button>
                            <button className={styles.mancalledit}>
                                <img
                                    src="/src/assets/close.svg"
                                    alt=""
                                    className={styles.editsvg}
                                />
                            </button>
                        </div>
                    </div>
                </div>
                <button className={styles.addbutton}>Add Calls +</button>
            </div>
        </div>
    );
}

export default App;
