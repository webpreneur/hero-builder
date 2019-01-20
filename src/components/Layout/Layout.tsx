import React from 'react';
import styles from './Layout.module.css';

const layout: React.FunctionComponent = (props) => {
    return(
        <>
            <div>
                <button className={styles.Button}>My bg is green</button>
            </div>
            <div>
                {props.children}
            </div>
        </>
    );
}

export default layout;