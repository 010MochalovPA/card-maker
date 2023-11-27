import Header from '../Header/Header'
import Toolbar from '../Toolbar/Toolbar'
import styles from './TopPanel.css'


const TopPanel = () => (
  <div className={styles.topPanel}>
    <Header/>
    <Toolbar/>
  </div>
)

export default TopPanel
