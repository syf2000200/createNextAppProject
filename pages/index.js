import React, {Component} from 'react'
import {connect} from 'react-redux'

import {loadData, startClock, tickClock} from '../action/actionCreator'
import Page from '../components/page'

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
			<Page title='Index Page' linkTo='/other' NavigateTo='Other Page' />
		)
	}
}

export default connect()(Index)
