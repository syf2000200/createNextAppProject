/**
 * @author: sunyf-c@glodon.com
 * @description: 页头组件
 * @summary:
 * @todo: 2018/10/24
 */

import React from 'react'
import NextHead from 'next/head'
import { string } from 'prop-types'

const defaultDescription = ''

const Head = props => (
	<NextHead>
		<meta charSet="UTF-8" />
		<title>{props.title || ''}</title>
		<meta
			name="description"
			content={props.description || defaultDescription}
		/>
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<link rel="icon" href="/static/favicon.ico" />
		<meta property="og:title" content={props.title || ''} />
		<meta
			property="og:description"
			content={props.description || defaultDescription}
		/>
	</NextHead>
)

Head.propTypes = {
	title: string,
	description: string,
}

export default Head
