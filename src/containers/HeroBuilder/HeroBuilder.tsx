import React, {Component} from 'react';
import Hero from '../../components/Hero/Hero';

import { heroDetails } from '../../models/models';

import db from '../../db/db.json';

const initialState: heroDetails = {
    powers: ["Superhuman Strength", "Heat Vision", "Superhuman Speed"],
    characteristics: {
        stamina: 0,
        strength: 0,
        speed: 0,
    },
};

type State = Readonly<typeof initialState>;

class HeroBuilder extends Component<{}, State> {
    readonly state = initialState;

    render () {
        return (
            <>
                <div>HeroCard</div>

                <Hero heroPowers={this.state.powers} heroCharacteristics={this.state.characteristics} />

                <div>Build Controls</div>
            </>
        )
    }
}

export default HeroBuilder;