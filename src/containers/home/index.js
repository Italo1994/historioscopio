import React from "react"

import './home.css'
import logo from './logo.svg'
import text from './text.svg'
import { ReactComponent as Background } from './masked-bg.svg'
import LinkButton from '../../components/link-button'
import { connect } from 'react-redux'
import { gotoPage } from '../../actions'

let Home = ({ dispatch }) => {
    const gotoMenu = () => dispatch(gotoPage('menu'))
    return <div id='home'>
        <Background id='masked-bg' viewBox='0 0 1754 1198'/>
        <div id='logo-container'>
            <img id='logo' src={logo} />
            <img id='text' src={text} />
        </div>
        <LinkButton key='iniciar' name='Iniciar' onClick={gotoMenu} id='home-button' />
    </div>
}

export default connect()(Home)
