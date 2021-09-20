import * as actions from '../actions'
import { combineReducers } from 'redux'

const page = (state = { current: 'home'}, action = {}) => {
    const { page } = action
    if (typeof page !== 'string' || !page.trim()) return state

    switch (action.type) {
        case actions.GOTO_EPISODE:
        case actions.GOTO_PAGE:
        case actions.REFRESH_STATE:
            return page.trim()
    }

    return state
}

const episode = (state = 0, action = {}) => {
    let { episode } = action
    episode = parseInt(episode)
    if (isNaN(episode) || episode < 0) return state

    switch (action.type) {
        case actions.GOTO_EPISODE:
        case actions.SET_CURRENT_EPISODE:
        case actions.REFRESH_STATE:
            return episode
    }

    return state
}

const scenes = (state = {}, action = {}) => {
    const { scenes } = action
    if (typeof scenes !== 'object') return state

    switch (action.type) {
        case actions.SET_CURRENT_SCENE:
        case actions.REFRESH_STATE:
            return {...state, ...scenes}
    }

    return state
}

const items = (state = { highlighted: [], visited: [] }, action = {}) => {
    const { items } = action

    const addItemAt = (o, k) => {
        if (o[k].includes(items)) return state
        return {...o, [k]: o[k].concat([items])}
    }

    switch (action.type) {
        case actions.HIGHLIGHT_ITEM:
            return addItemAt(state, 'highlighted')
        case action.MARK_ITEM_AS_VISITED:
            return addItemAt(state, 'visited')
        case actions.REFRESH_STATE:
            return {...items}
    }

    return state
}

const reducer = combineReducers({
    page,
    episode,
    scenes,
    items
})

export default reducer
