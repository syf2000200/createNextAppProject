/**
 * @author: sunyf-c@glodon.com
 * @description: 头部组件
 * @summary:
 * @todo: 2018/10/24
 */

import Link from 'next/link'

const linkStyle = {
    marginRight: 15
}

const Header = () => {
    return (
        <div className="header">
            <Link href="/">
            <a style={linkStyle}>Home</a>
            </Link>
            <Link href="/other">
            <a style={linkStyle}>Other</a>
            </Link>
        </div>
    )
}

export default Header