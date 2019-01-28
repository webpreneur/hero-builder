import React from "react";
import styles from './Hero.module.css';
import HeroPower from './HeroPower/HeroPower';

import { characteristics as heroCharacteristics } from '../../models/models';

type Props = {
    heroPowers: string[],
    heroCharacteristics: heroCharacteristics,
}

const hero: React.FunctionComponent<Props> = (props) => {

    let heroPowers;

    if( props.heroPowers.length === 0 ) {
        heroPowers = `<div>Please add powers</div>`
    } else {
        heroPowers = props.heroPowers.map((heroPower, index) => <HeroPower key={encodeURI(heroPower + index)} name={heroPower}/>);
    }

    return (
        <section className={styles.Hero}>
            <h4>Powers:</h4>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                {heroPowers}
            </div>
            <h4>Characteristics:</h4>
            <span>Speed: 
                <span className="value">
                    {props.heroCharacteristics.speed}
                </span>
            </span>
            <span>Stamina: {props.heroCharacteristics.stamina}</span>
            <span>Strength: {props.heroCharacteristics.strength}</span>
        </section>
    );
};

export default hero;