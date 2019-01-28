import React from 'react';
import styles from './BuildControl.module.css';

type Props = {
    label: string;
}

const buildControl: React.FunctionComponent<Props> = (props) => {
    return (
        <div className={styles.BuildControl}>
            <div>{props.label}</div>
            <button>Less</button>
            <button>More</button>
        </div>
    );
}

export default buildControl;