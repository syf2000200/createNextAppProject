/**
 * @author: sunyf-c@glodon.com
 * @description: 
 * @summary:
 * @todo: 2018/10/22
 */

import React from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

export default class extends React.Component{
    static async getInitialProps ({ query }) {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${query.id}`)
        const post = await res.json()

        return {
            ...post
        }
    }
    render () {
        return (
            <main>
                <h1>{this.props.title}</h1>

                <p>{this.props.body}</p>

                <Link href='/'>
                    <a>Go back to home</a>
                </Link>
            </main>
        )
    }
}