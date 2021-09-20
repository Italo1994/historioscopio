import React from "react"

import './persona.css'
import LinkButton from '../../components/link-button'
import Page from '../../components/page'

const buttons = [
    { name: 'Resposta 1', key: 'response1', dest: 'foo' }, 
    { name: 'Resposta 2', key: 'response2', dest: 'foo' }, 
    { name: 'Resposta 3', key: 'response3', dest: 'foo' },
    { name: 'Resposta 4', key: 'response4', dest: 'foo' }
]

const ButtonList = props => props.buttons.map(({name, key, dest}) =>
    <LinkButton key={key} name={name} dest={dest} />
)

const Persona = props => (
    <Page className='persona'>
        <div className='persona-button-list'>
            <ButtonList buttons={buttons} />
        </div>
        <div className='persona-button-back'>
            <LinkButton key={'button-back'} name={'Voltar'} dest={'episodes'} />
        </div>
        <div className='persona-image'>
            Imagem ilustrativa
        </div>

    </Page>
)

export default Persona
