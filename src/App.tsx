import styles from './App.module.scss';

function App() {
    return (
        <div className={styles.App}>
            <div className={styles.topbar}>
                <h1 className={styles.logotext}>ANDON</h1>
                <button className={styles.account}></button>
            </div>
            <div className={styles.navbar}></div>
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
                    <div className={styles.callsat}>
                        <div className={styles.callsatleft}>
                            <h1 className={styles.machinenum}>MA00251</h1>
                            <h3 className={styles.department}>Sewing Department</h3>
                            <h2 className={styles.calltotext}>Andon Call to</h2>
                            <h3 className={styles.callto}>CNC Tech</h3>
                        </div>
                        <div className={styles.callsatright} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
