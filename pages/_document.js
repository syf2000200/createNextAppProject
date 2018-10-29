/**
 * @author: sunyf-c@glodon.com
 * @description: 
 * @summary:
 * @todo: 2018/10/26
 */

 
import Document, { Head, Main, NextScript } from 'next/document'

import MyHead from '../components/head'

export default class MyDocument extends Document {
    static async getInitialProps (ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }
  
    render () {
        return (
            <html>
                <Head>
                    <MyHead />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}