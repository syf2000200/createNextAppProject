/**
 * @author: sunyf-c@glodon.com
 * @description: 页面组件
 * @summary: （可以续拆分优化）
 * @todo: 2018/10/24
 */

import Link from 'next/link'
import {connect} from 'react-redux'

import MyHeader from './header'
import LeftSide from './leftSide'
import Counter from './counter'
import Clock from './clock'

import { Layout } from 'antd'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import { Line } from 'react-chartjs-2'

const { Header, Footer, Content } = Layout

const Page = ({lastUpdate, light, placeholderData, title}) => {
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
            <Header>
                <MyHeader/>
            </Header>
            <Layout>
                <LeftSide/>
                <Content>
                    <div className="warp">
                        <h1>
                            {title}
                        </h1>
                        <Clock lastUpdate={lastUpdate} light={light} />
                        <Counter />
                        <Line data={chartData} options={options} />
                    </div>
                </Content>
            </Layout>
            <Footer>Footer</Footer>
        </Layout>
    )
}

export default connect(state => state)(Page)