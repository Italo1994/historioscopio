import React from 'react'
import './link-button.css'
import UIfx from 'uifx'
import clickOgg from './click.ogg'
import hoverOgg from './hover.ogg'

const clickSound = new UIfx(clickOgg, { volume: 1.0, throttleMs: 100 })
const hoverSound = new UIfx(hoverOgg, { volume: 1.0, throttleMs: 100 })

const withSound = (sound, callback) => () => {
    sound.play()
    if (callback) return callback()
}

// Example of component to use on project
const LinkButton = ({ onClick, onMouseEnter, name, ...props}) => (
    <button {...props}
        className="link-button"
        onClick={withSound(clickSound, onClick)}
        onMouseEnter={withSound(hoverSound, onMouseEnter)}>
        {name}
    </button>
)

export default LinkButton
