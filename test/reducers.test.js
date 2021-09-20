import {should } from 'chai'
import reducer from '../src/reducer'
import * as actions from '../src/actions'

should()

describe('Reducer', () => {
    describe('action setReportLayout()', () =>{
        it('should set report layout', () => {
            const initialState = reducer()
            const nextState = reducer(initialState, actions.setReportLayout('some-cool-layout'))
            initialState.should.not.be.equal(nextState)
            nextState.report.layout.should.be.eql('some-cool-layout')
        })
    })
    describe('action setEpsodies()', () => {
        it('should add epsodes to state', () => {
            const episodes = [
                { id: 'episode 1' },
                { id: 'episode 2' },
                { id: 'episode 3' },
            ]

            const initialState = reducer()
            const nextState = reducer(initialState, actions.setEpsodies(episodes))
            initialState.should.not.be.equal(nextState)
            nextState.exploration.episodes.should.be.equal(episodes)
        })
        it('should replace existing episodes', () => {
            const episodes = [
                { id: 'episode 1' },
                { id: 'episode 2' },
                { id: 'episode 3' },
            ]

            const newEpsodes = [
                { id: 'episode 4' }
            ]

            const initialState = reducer()
            const intermediateState = reducer(initialState, actions.setEpsodies(episodes))
            const nextState = reducer(intermediateState, actions.setEpsodies(newEpsodes))
            initialState.should.not.be.equal(intermediateState)
            intermediateState.should.not.be.equal(nextState)
            nextState.exploration.episodes.should.be.equal(newEpsodes)
        })
    })


})