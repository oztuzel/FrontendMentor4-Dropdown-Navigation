import React from 'react'

import style from './Button.module.css';

function Button({name, clas}) {

    const clases = `${style.button} ${style[clas]}`

    // if you added any clas as a porps, you must add '.button.{clas}' to Button.module.css

    return (
        <button className={clases}> {name} </button>
    )
}

export default Button