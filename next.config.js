/**
 * @author: sunyf-c@glodon.com
 * @description: next相关配置
 * @summary:
 * @todo: 2018/10/19
 */

const fetch = require('isomorphic-unfetch')
/* 实现静态资源调用 */
const withCss = require('@zeit/next-css')

if (typeof require !== 'undefined') {
  require.extensions['.css'] = (file) => {}
}

module.exports = withCss({
	webpack: config => {
		// Fixes npm packages that depend on `fs` module
		config.node = {
		  fs: 'empty'
		}
	
		return config
	},
	exportPathMap: () => {
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
})
