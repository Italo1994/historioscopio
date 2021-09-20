import React from "react"

import './episodes.css'
import LinkButton from '../../components/link-button'
import ButtonList from '../../components/button-list'
import Page from '../../components/page'
import { connect } from 'react-redux'
import { gotoPage, gotoEpisode } from '../../actions'
import episodes from '../../../data'

const buttons = episodes.map((_, i) => ({ name: `Episódio ${i + 1}`, ep: i }))

const Episodes = ({dispatch}) => {
    return (
        <Page className='episodes'>
            <div className='container-button'>
                <ButtonList className='episodes-button-list' buttons={buttons} onButtonClick={({ ep }) => dispatch(gotoEpisode(ep))} />
                <div className='episodes-button-back'>
                    <LinkButton name={'Voltar'} onClick={() => dispatch(gotoPage('menu'))} />
                </div>
            </div>
        
            <div className='episodes-image'>
                Imagem ilustrativa
            </div>

        </Page>
    )
}

export default connect()(Episodes)
