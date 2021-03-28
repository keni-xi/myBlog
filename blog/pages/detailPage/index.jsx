import React, { useState } from 'react'
import Head from 'next/head'
import styles from '../../styles//Home.module.css'
import { Row, Col } from 'antd'
import Header from '../components/Header'

const Detailed = () => {

  return (
    <>
      <Head>
        <title>Detailed</title>
      </Head>
      <Header />
      <Row className={styles.main} justify="center">
        <Col className={styles.left} xs={24} sm={24} md={16} lg={18} xl={14}  >
          <List
            itemLayout="vertical"
            size="large"
            // pagination={{
            //   onChange: page => {
            //     console.log(page);
            //   },
            //   pageSize: 3,
            // }}
            dataSource={listData}
            footer={
              <div>
                <b>ant design</b> footer part
              </div>
            }
            renderItem={item => (
              <List.Item
                key={item.title}
                actions={[
                  <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                  <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                  <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                ]}
                extra={
                  <img
                    width={272}
                    alt="logo"
                    src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                  />
                }
              >
                <List.Item.Meta
                  avatar={<Avatar src={item.avatar} />}
                  title={<a href={item.href}>{item.title}</a>}
                  description={item.description}
                />
                {item.content}
              </List.Item>
            )}
          />
        </Col>
        <Col className={styles.right} xs={0} sm={0} md={7} lg={5} xl={4}>
          右侧
        </Col>
      </Row>
    </>
  )

}

export default Detailed