import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'

export default class extends React.Component{
    static async getInitialProps ({ query }) {
        console.log(query)
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${query.id}`)
        const post = await res.json()

        return {
            ...post
        }
    }
    render () {
        return (
            <main>
                <Head>
                    <title>{this.props.title}</title>
                </Head>

                <h1>{this.props.title}</h1>

                <p>{this.props.body}</p>

                <Link href='/'>
                    <a>Go back to home</a>
                </Link>
            </main>
        )
    }
}