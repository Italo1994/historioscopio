import ReactDOM from "react-dom"
import React from "react"
import { connect, Provider } from 'react-redux'
import store from './store'

// Progressive web app setup
// Allow app to work even offline
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
            console.log('SW registered: ', registration)
        }).catch(registrationError => {
            console.log('SW registration failed: ', registrationError)
        })
    })
}

import 'normalize.css'
import './variables.css'
import { gotoPage } from './actions'

// pages
import Home from './containers/home'
import Menu from './containers/menu'
import Foo from './containers/foo'
import Journal from './containers/journal'
import Episodes from './containers/episodes'
import Scene from './containers/scene'

const mapCurrentPage = state => state

const App = connect(mapCurrentPage)(({page, dispatch}) => {
    switch (page) {
        case 'home': return <Home />
        case 'menu': return <Menu />
        case 'foo': return <Foo />
        case 'journal': return <Journal />
        case 'episodes': return <Episodes />
        case 'scene': return <Scene />
        default:
            dispatch(gotoPage('home'))
            return <p>Invalid state, redirecting to home</p>
    }
})

// Render our app
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('historioscopio'))
