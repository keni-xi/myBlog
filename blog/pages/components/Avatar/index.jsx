
import { Avatar, Divider } from 'antd'
import styles from './avatar.module.css'

const Author = () => {

  return (
    <div className={styles.avatar}>
      <div> <Avatar size={100} src="http://blogimages.jspang.com/blogtouxiang1.jpg" /></div>
      <div className={styles.introduce}>
        大四前端练习生，好好coding,好好生活
        <Divider>社交账号</Divider>
        <Avatar size={28} icon="github" className="account" />
        <Avatar size={28} icon="qq" className="account" />
        <Avatar size={28} icon="wechat" className="account" />

      </div>
    </div>
  )

}

export default Author