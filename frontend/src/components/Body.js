import React from 'react'
import { Info } from './Info'
import { Model } from './Model'
import './Body.css'

export function Body() {
    return (
        <div>
            <Info className="left"/>
            <Model className="right"/>
        </div>
    )
}
