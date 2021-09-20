import React from "react"

import './journal.css'
import LinkButton from '../../components/link-button'
import Page from '../../components/page'
import ButtonList from '../../components/button-list'
import { connect } from 'react-redux'
import { gotoPage } from '../../actions'

const buttons = [
    { name: 'Jornal 1', dest: 'foo' }, 
    { name: 'Jornal 2', dest: 'foo' }, 
    { name: 'Jornal 3', dest: 'foo' }
]

const Journal = ({ dispatch }) => {
    const goTo = dest => dispatch(gotoPage(dest))
    return (
        <Page className='journal'>     
            <div className='container-button'>
                <ButtonList className='journal-button-list' buttons={buttons} onButtonClick={({ dest }) => goTo(dest)} />
                <div className='journal-button-back'>
                    <LinkButton name={'Voltar'} onClick={() => dispatch(gotoPage('menu'))} />
                </div>
            </div>

            <div className='journal-image'>
                Imagem ilustrativa
            </div>

        </Page>
    )
}

export default connect()(Journal)
