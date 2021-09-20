import React from "react"

import './menu.css'
import Page from '../../components/page'
import ButtonList from '../../components/button-list'
import assembly from './assembly.png'
import { connect } from 'react-redux'
import { gotoPage } from '../../actions'


const buttons = [
    { name: 'Episodios', dest: 'episodes' },
    { name: 'Jornal',    dest: 'journal' },
    { name: 'Opções',    dest: 'foo' },
    { name: 'Ajuda',     dest: 'foo' },
    { name: 'Sair',      dest: 'home' },
    { name: 'Créditos',  dest: 'foo' }
]

const Menu = ({dispatch}) => {
    const goToDest = ({dest}) => dispatch(gotoPage(dest))
    return (
        <Page className='menu'>
            <ButtonList className='menu-button-list' buttons={buttons} onButtonClick={goToDest} />
            <div className='side-image'>
                <div className='side-image-inner'><img src={assembly} width='600'/></div>
            </div>
        </Page>
    )
}

export default connect()(Menu)
