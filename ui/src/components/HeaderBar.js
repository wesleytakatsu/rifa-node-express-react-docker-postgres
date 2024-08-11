import React from 'react';
import styles from './HeaderBar.module.css';

function HeaderBar() {
    return <div className={styles.HeaderBar}>
        <div>
            <img className={styles.mainBannerImg} src={require('../assets/bannerNossaSorte.png')} alt="Banner Nossa Sorte" />
        </div>
        <div>
            <h1>Header</h1>
        </div>

    </div>;
}

export default HeaderBar;