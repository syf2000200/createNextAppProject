/**
 * @author: sunyf-c@glodon.com
 * @description: 
 * @summary:
 * @todo: 2018/10/22
 */

import App, { Container } from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'

import createStore from '../store'

import Head from '../components/head'

class MyApp extends App {
    static async getInitialProps ({ Component, ctx }) {
        let pageProps = {}
        console.log(ctx)

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps({ ctx })
        }

        return { pageProps }
    }

    render () {
        const { Component, pageProps, store } = this.props
        return (
            <Container>
                <Head/>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        )
    }
}

export default withRedux(createStore)(withReduxSaga({ async: true })(MyApp))