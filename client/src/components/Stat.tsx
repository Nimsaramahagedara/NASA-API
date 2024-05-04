import { Button, Col, Row, Statistic } from 'antd'
import React from 'react'

const Stat = ({value}:{value:number}) => {
    return (
        <Row gutter={16} style={{background:'#fff'}} className='p-5 mb-10 rounded-xl'>
            <Col span={12}>
                <Statistic title="Users Count" value={value} />
            </Col>
            <Col span={12}>
                <Statistic title="Active Users" value={value} />
            </Col>
        </Row>
    )
}

export default Stat