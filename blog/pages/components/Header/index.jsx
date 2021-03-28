import React from 'react'
import styles from './Header.module.css'

import { Row, Col, Menu } from 'antd'
import { BankOutlined } from '@ant-design/icons'

const Header = () => {
  return (
    <div className={styles.header}>
      <Row justify="space-around">
        <Col xs={24} sm={24} md={10} lg={15} xl={12}>
          <span className={styles.headerLogo}>符苑婷</span>
          <span className={styles.headerText}>前端练习生</span>
        </Col>
        <Col xs={0} sm={0} md={14} lg={8} xl={6}>
          <Menu mode="horizontal">
            <Menu.Item>
              <BankOutlined />首页
            </Menu.Item>
            <Menu.Item>
              <BankOutlined />小说
            </Menu.Item>
            <Menu.Item>
              <BankOutlined />生活
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </div>
  )
}

export default Header