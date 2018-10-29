/**
 * @author: sunyf-c@glodon.com
 * @description: 目标页
 * @summary: （可实现动态路由跳转）
 * @todo: 2018/10/24
 */

import Link from 'next/link'

export default props => {
    console.log(props)
    return (
        <article>
            <h2>{props.title}</h2>
            <p>{props.body}</p>
            <Link href={{ pathname: '/post', query: { id: props.id } }} as={`/post/${props.id}`}>
                <a>Read more...</a>
            </Link>
        </article>
    )
}