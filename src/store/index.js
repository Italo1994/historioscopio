import { createStore } from "redux"
import reducer from "../reducer"
import { refreshState } from "../actions"

const stateName = 'historioscopio'
const updatedAt = 'historioscopio_updated_at'

let lastUpdate = 0
const safely = action => () => {
    const lastUpdateBak = lastUpdate
    try { return action() }
    catch { lastUpdate = lastUpdateBak }
}

const loadState = () => {
    const serializedState = localStorage.getItem(stateName)
    lastUpdate = localStorage.getItem(updatedAt) || 0
    if (serializedState !== null) return JSON.parse(serializedState)
}

const store = createStore(reducer, safely(loadState)())

const saveState = () => {
    const serializedState = JSON.stringify(store.getState())
    lastUpdate = Date.now()
    localStorage.setItem(updatedAt, lastUpdate)
    localStorage.setItem(stateName, serializedState)
}

store.subscribe(safely(saveState))

window.addEventListener('storage', e => {
    if (e.key == stateName && localStorage.getItem(updatedAt) > lastUpdate) {
        const newState = safely(loadState)()
        if (newState) store.dispatch(refreshState(newState))
    }
})

export default store
