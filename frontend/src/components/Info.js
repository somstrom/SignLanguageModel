import React from 'react'
import { Button } from './Button'

const onClickHandler = () => {
    alert('Try it button');
}

export function Info() {
    return (
        <div style={{display: 'inline-block'}}>
            <h1>Do you know how</h1>
            <h1>the aplhabet</h1>
            <h1>works in sign language?</h1>

            <p>Sign language is a visual means of 
                communicating through hand signals, 
                gestures, facial expressions, and body 
                language.</p>   

            <Button onClick={onClickHandler}/> 
        </div>
    )
}
