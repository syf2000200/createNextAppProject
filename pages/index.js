/**
 * @author: sunyf-c@glodon.com
 * @description: 
 * @summary:
 * @todo: 2018/10/22
 */

import React, {Component} from 'react'
import {connect} from 'react-redux'

import {loadData, startClock, tickClock} from '../action/actionCreator'
import Page from '../components/page'

import '../static/common.css'

class Index extends Component{
	static async getInitialProps (props) {
		const { store, isServer } = props.ctx
		store.dispatch(tickClock(isServer))
		console.log(props)
	
		if (!store.getState().placeholderData) {
		  	store.dispatch(loadData())
		}
	
		return { isServer }
	}
	componentDidMount () {
		this.props.dispatch(startClock())
	}

	render () {
		return (
			<section>
				<Page title='Index Page'/>
			</section>
		)
	}
}

export default connect()(Index)
