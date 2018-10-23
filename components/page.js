import Link from 'next/link'
import {connect} from 'react-redux'

import Counter from './counter'
import Clock from './clock'

import { List } from 'antd'

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
]

function Page ({error, lastUpdate, light, linkTo, NavigateTo, placeholderData, title}) {
    return (
        <div>
            <h1>
                {title}
            </h1>
            <Clock lastUpdate={lastUpdate} light={light} />
            <Counter />
            <nav>
                <Link href={linkTo}>
                    <a>Navigate: {NavigateTo}</a>
                </Link>
            </nav>
            
            {placeholderData &&
                <List
                    size="small"
                    header={<div>Header</div>}
                    footer={<div>Footer</div>}
                    bordered
                    dataSource={placeholderData}
                    renderItem={item => (<List.Item>{item.name}</List.Item>)}
                />}
            {error &&
                <p style={{color: 'red'}}>
                    Error: {error.message}
                </p>}
        </div>
    )
}

export default connect(state => state)(Page)