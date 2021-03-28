import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from './components/Header/index'
import List from './components/list/index'
import { Row, Col } from 'antd'

const Home = () => {


  return (
    <div className={styles.body}>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <Row className={styles.main} justify="center">
        <Col className={styles.left} xs={24} sm={24} md={16} lg={18} xl={14}  >
          <List />
        </Col>
        <Col className={styles.right} xs={0} sm={0} md={7} lg={5} xl={4}>
          右侧
        </Col>
      </Row>
    </div>
  )
}

export default Home