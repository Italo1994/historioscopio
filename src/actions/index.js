// We declare the actions of our app

export const REFRESH_STATE = 'REFRESH_STATE'

// Page actions
export const GOTO_PAGE = 'GOTO_PAGE'
export const GOTO_EPISODE = 'GOTO_EPISODE'

// Episode actions
export const SET_CURRENT_EPISODE = 'SET_CURRENT_EPISODE'

// Scene actions
export const SET_CURRENT_SCENE = 'SET_CURRENT_SCENE'
export const MARK_ITEM_AS_VISITED = 'MARK_ITEM_AS_VISITED'
export const HIGHLIGHT_ITEM = 'HIGHLIGHT_ITEM'

// Journal actions
export const SET_REPORT_LAYOUT = 'SET_LAYOUT'
export const SET_REPORT_CONTENT = 'SET_CONTENT'

// Refresh all state
export const refreshState = state => ({ type: REFRESH_STATE, ...state })

// Go to page
export const gotoPage = page => ({ type: GOTO_PAGE, page })
export const gotoEpisode = episodeID => ({ type: GOTO_EPISODE, page: 'scene', episode: episodeID })

// Episode actions
export const setCurrentEpisode = episodeID =>
    ({ type: SET_CURRENT_EPISODE, episode: episodeID })

// Scene actions
export const setCurrentScene = (episodeID, sceneID) =>
    ({ type: SET_CURRENT_SCENE, scenes: { [episodeID]: sceneID } })
export const markItemAsVisited = (episodeID, sceneID, item) =>
    ({ type: MARK_ITEM_AS_VISITED, items: `${episodeID}/${sceneID}/${item}` })
export const highlightItem = (episodeID, sceneID, item) =>
    ({ type: HIGHLIGHT_ITEM, items: `${episodeID}/${sceneID}/${item}` })

// Report actions
export const setReportLayout = layout => ({ type: SET_REPORT_LAYOUT, layout })
export const setReportContent = content =>
    ({ type: SET_REPORT_CONTENT, content })
