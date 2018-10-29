/**
 * @author: sunyf-c@glodon.com
 * @description: 左侧栏组件
 * @summary:
 * @todo: 2018/10/24
 */

import Link from 'next/link'
import {connect} from 'react-redux'

import { List, Layout } from 'antd'

import '../static/leftSide.css'

const { Sider } = Layout

const LeftSide = ({error, placeholderData}) => {
    return (
        <div className="leftSide">
            <Sider>
                {placeholderData &&
                    <List
                        size="small"
                        header={<div>Header</div>}
                        footer={<div>Footer</div>}
                        bordered
                        dataSource={placeholderData}
                        renderItem={item => (
                            <List.Item>
                                <Link href={{ pathname: '/post', query: { id: item.id } }} as={`/post/${item.id}`}>
                                    <a>{item.name}</a>
                                </Link>
                            </List.Item>
                        )}
                    />}
                {error &&
                    <p style={{color: 'red'}}>
                        Error: {error.message}
                    </p>}
            </Sider>
        </div>
    )
}

export default connect(state => state)(LeftSide)