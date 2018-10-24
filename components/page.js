import Link from 'next/link'
import {connect} from 'react-redux'

import Counter from './counter'
import Clock from './clock'

import { List, Layout } from 'antd'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import { Line } from 'react-chartjs-2'

const { Header, Footer, Sider, Content } = Layout

function Page ({error, lastUpdate, light, linkTo, NavigateTo, placeholderData, title}) {
    console.log(placeholderData)
    const data = [
        {
            time: 1540347324,
            close: 10
        },
        {
            time: 1540433724,
            close: 20
        }
    ]
    //echarts 设置
    const options = {
        legend: { display: false }
    }
    //echarts 数据
    const chartData = {
        labels: data.map(item => format(parse(item.time * 1000), 'MMM D H:m A')),
        datasets: [
            {
                fill: false,
                lineTension: 0.3,
                backgroundColor: '#209cee',
                borderColor: '#209cee',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: '#209cee',
                pointBackgroundColor: '#209cee',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: '#209cee',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: data.map(item => item.close)
            }
        ]
    }
    return (
        <Layout>
            <Header>Header</Header>
            <Layout>
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
                <Content>
                    <div className="warp">
                        <h1>
                            {title}
                        </h1>
                        <Clock lastUpdate={lastUpdate} light={light} />
                        <Counter />
                        <Link href={linkTo}>
                            <a>{NavigateTo}</a>
                        </Link>
                        <Line data={chartData} options={options} />
                    </div>
                </Content>
            </Layout>
            <Footer>Footer</Footer>
        </Layout>
    )
}

export default connect(state => state)(Page)