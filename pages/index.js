import React from 'react'
import Head from '../components/head'
import fetch from 'isomorphic-unfetch'

import Post from '../components/post'

class Home extends React.Component{
	static async getInitialProps () {
		const res = await fetch('https://jsonplaceholder.typicode.com/posts?_page=1')
		const postList = await res.json()

		return {
			postList
		}
	}
	render () {
		return (
			<main>
				<Head/>
				<h1>List of posts</h1>

				<section>
					{this.props.postList.map(post => <Post {...post} key={post.id} />)}
				</section>
			</main>
		)  
	}
}

export default Home
