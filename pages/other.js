/**
 * @author: sunyf-c@glodon.com
 * @description: 
 * @summary:
 * @todo: 2018/10/22
 */

import React from 'react'
import {connect} from 'react-redux'

import {startClock, tickClock} from '../action/actionCreator'
import Page from '../components/page'

class Other extends React.Component {
    static async getInitialProps (props) {
        const { store, isServer } = props.ctx
        store.dispatch(tickClock(isServer))
        return { isServer }
    }

    componentDidMount () {
        this.props.dispatch(startClock())
    }

    render () {
        return (
            <section>
                <Page title='Other Page'/>
            </section>
        )
    }
}

export default connect()(Other)