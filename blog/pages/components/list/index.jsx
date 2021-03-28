import React, { useState } from 'react'
import styles from './list.module.css'
import { CalendarOutlined, FolderOutlined, FireOutlined } from '@ant-design/icons'

const List = () => {

  const [listData, setListData] = useState([])

  return (
    <>
      <List
        header={<div>最新日志</div>}
        itemLayout="vertical"
        dataSource={listData}
        renderItem={item => (
          <List.Item>
            <div className={styles.ListTitle}>{item.title}</div>
            <div className={styles.listIcon}>
              <span><CalendarOutlined /> 2019-06-28</span>
              <span><FolderOutlined /> 生活琐事</span>
              <span><FireOutlined /> 5498人</span>
            </div>
            <div className={styles.listContent}>{item.description}</div>
          </List.Item>
        )}
      />
    </>
  )
}

export default List