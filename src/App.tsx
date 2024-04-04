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
            //Dashboard
            <div className={styles.dashboard}>
                <h1 className={styles.boardname}>Dashboard</h1>
                <div className={styles.graph}>
                    <h3 className={styles.cardtitle}>Daily Andon Calls </h3>
                </div>
                <div className={styles.stats}>
                    <h3 className={styles.cardtitle}>Stats</h3>
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
            // ManageCalls
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
                            <button className={styles.mancalldel}>Button</button>
                            <button className={styles.mancalledit}>Button</button>
                        </div>
                    </div>
                </div>
                <div className={styles.managecallcard}>
                    <div className={styles.coltitle}>
                        <div className={Classnames(styles.status, styles.manage)} />
                        <h1 className={Classnames(styles.cardtext, styles.mancalldesc)}>
                            Heading 1
                        </h1>
                        <h1 className={Classnames(styles.cardtext, styles.mancallto)}>Heading 1</h1>
                        <div className={styles.mancallbut}>
                            <button className={styles.mancalldel}>Button</button>
                            <button className={styles.mancalledit}>Button</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
