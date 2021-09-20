import './style.css'
import Icon from './icon.png'
import React, { Component } from "react"

// Example of component to use on project
class Hello extends Component {
    render() {
        return (
            <div className="hello">
                Hello World
                <img src={Icon} />
            </div>
        )
    }
}

export default Hello
