const fetch = require('isomorphic-unfetch')

module.exports = {
  // webpack: config => {
  //   // Fixes npm packages that depend on `fs` module
  //   config.node = {
  //     fs: 'empty'
  //   }

  //   return config
  // }

	async exportPathMap () {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts?_page=1')
		const postList = await response.json()

		const pages = postList.reduce((pages, post) => Object.assign({}, pages, {
				[`/post/${post.id}`]: {
					page: '/post',
					query: { id: post.id }
				}
			}),
			{}
		)

		return Object.assign({}, pages, {
			'/': { page: '/' }
		})
	}
}