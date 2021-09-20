import React from "react"
import { connect } from 'react-redux'
import episodes from '../../../data'
import { gotoPage, setCurrentScene } from '../../actions'
import LinkButton from '../../components/link-button'
import SceneView from '../../components/scene-view'

const mapCurrentScene = state => {
    const { episode: currentEpisode, scenes: sceneState } = state
    const currentSceneID = sceneState[currentEpisode] || 0
    const scenes = episodes[currentEpisode] || []
    const scene = scenes[currentSceneID] || {}

    const mappedState = {scene}

    if (currentSceneID < scenes.length - 1)
        mappedState.nextScene = [currentEpisode, currentSceneID + 1]

    if (currentSceneID > 0)
        mappedState.prevScene = [currentEpisode, currentSceneID - 1]

    return mappedState
}

const mapDispatch = dispatch => (
    {
        goToScene: scene => scene && dispatch(setCurrentScene(...scene)),
        goToEpisodes: () => dispatch(gotoPage('episodes'))
    }
)

const Scene = ({ goToScene, goToEpisodes, prevScene, scene, nextScene }) => (
    <div>
        <LinkButton name='Next scene' onClick={() => goToScene(nextScene)} />
        <LinkButton name='Prev scene' onClick={() => goToScene(prevScene)} />
        <LinkButton name='Back' onClick={goToEpisodes} />
        <SceneView scene={scene} />
    </div>
)

export default connect(mapCurrentScene, mapDispatch)(Scene)
