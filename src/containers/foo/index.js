import React from 'react'
import { connect } from 'react-redux'
import { gotoPage } from '../../actions'

let Foo = ({ dispatch }) => (<div onClick={()=>dispatch(gotoPage('home'))}><h1>Foo</h1></div>)

Foo = connect()(Foo)

export default Foo
