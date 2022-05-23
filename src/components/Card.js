import React from 'react';
import style from './Card.module.css';
import Button from './Button';

import maker from '../images/client-maker.svg';
import meet from '../images/client-meet.svg';
import databiz from '../images/client-databiz.svg';
import audiophile from '../images/client-audiophile.svg';

function Card() {
    return (
        <div className={style.card}>
            <h1 className={style.title}> Make <br /> remote work</h1>
            <p className={style.parag}>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
            <Button name={'Learn more'} clas={'cardButton'}/>
            <div className={style.images} >
                <img src={databiz} alt='databiz' />
                <img src={audiophile} alt='audiophile' />
                <img src={meet} alt='meet' />
                <img src={maker} alt='maker' />
            </div>
        </div>
    )
}

export default Card