import React, {useState, useRef} from 'react';
import Button from './Button';

import style from './Navbar.module.css';

import arrowUp from '../images/icon-arrow-up.svg';
import arrowDown from '../images/icon-arrow-down.svg';
import todo from '../images/icon-todo.svg';
import reminders from '../images/icon-reminders.svg';
import planning from '../images/icon-planning.svg';
import calendar from '../images/icon-calendar.svg';
import phoneIcon from '../images/icon-menu.svg';


function Navbar() {
    const[isClickedFeatures, setIsClickedFeatures] = useState(false);
    const [isClickedCompany, setIsClickedCompany] = useState(false);
    

    const navRef = useRef()

    const clickArrowFeatures = () => {
        if (isClickedFeatures ===false ) {
            return setIsClickedFeatures(true)
        }else {
            return setIsClickedFeatures(false)
        }
    }    

    const clickArrowCompany = () => {
        if (!isClickedCompany) {
            return setIsClickedCompany(true);
        } else {
            return setIsClickedCompany(false);
        }
    }

    

    

    console.log(arrowUp);
    console.log(navRef); 

    return (
        <nav className={style.navbar} ref={navRef}>
            <ul className={style['navbar-left']}>
                <li className={style.text} onClick={clickArrowFeatures}>  
                        Features 
                        <img    src={arrowDown} 
                                alt='arrowDown' 
                                className={style.arrowDown}
                                
                        /> 
                        {isClickedFeatures &&   
                                <ul className={style.features}>
                                    <li> <img src={todo} alt='todo'/> Todo List </li>
                                    <li> <img src={calendar} alt='calendar'/> Calendar </li>
                                    <li> <img src={reminders} alt='reminders'/> Reminders </li>
                                    <li> <img src={planning} alt='planning'/> Planning </li>
                                </ul>
                        }
                </li>
                <li className={style.text} onClick ={clickArrowCompany} > 
                        Company 
                        <img    src={arrowDown} 
                                alt='arrowDown' 
                                className={style.arrowDown} 
                                
                        />
                        
                        {isClickedCompany && 
                                <ul className={style.company} >
                                    <li> History </li>
                                    <li> Our Team </li>
                                    <li> Blog </li>
                                </ul>
                            

                        }
                </li>
                <li className={style.text}> Careers </li>
                <li className={style.text}> About </li>
                
                <ul className={style['navbar-right']}>
                    <li >
                    <Button name={'Login'}/>
                    <span>
                        <Button name={'Register'}/>
                    </span>
                    </li>
                </ul>
            
            </ul>

            <img src={phoneIcon} 
                className={style.phoneIcon}
                alt='phoneIcon' 
            />
            
        </nav>
    )
}

export default Navbar