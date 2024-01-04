import Header from '../Header/Header'
import styles from './TopPanel.css'
import { SlidesToolbar } from '../SlidesToolbar/SlidesToolbar'
import { Toolbar } from '../Toolbar/Toolbar'

const TopPanel = () => (
  <div className={styles.topPanel}>
    <Header />
    <div className={styles.toolbars}>
      <SlidesToolbar />
      <Toolbar />
    </div>
  </div>
)

export default TopPanel
