import React from 'react';
import styles from "./HeroPower.module.css";

// icons
import superStrengthIcon from '../../../assets/icons/1477209-superhero/svg/034-muscle.svg';
import superSpeedIcon from '../../../assets/icons/1477209-superhero/svg/036-shoes.svg';
import heatVisionIcon from '../../../assets/icons/1477209-superhero/svg/046-vision.svg';

type Props = {
    name: string;
}

const heroPower: React.FunctionComponent<Props> = (props) => {

    let imgSrc: string;

    switch (props.name) {
        case 'Superhuman Strength':
            imgSrc = superStrengthIcon;
            break;
        case 'Superhuman Speed':
            imgSrc = superSpeedIcon;
            break;
        case 'Heat Vision':
            imgSrc = heatVisionIcon;
            break;

        default:
            imgSrc = '';
            break;
    }

    return (
        <div>
            <img
                className={styles.PowerIcon}
                src={imgSrc}
                alt={props.name}
                title={props.name}
            />
        </div>
    );
}

export default heroPower;