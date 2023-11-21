import Header from '../Header/Header'
import Toolbar from '../Toolbar/Toolbar'
import styles from './TopPanel.css'

type TopPanelProps = {
  title: string
  setTitle: (title: string) => void
}

const TopPanel = ({ title, setTitle }: TopPanelProps) => (
  <div className={styles.topPanel}>
    <Header title={title} setTitle={setTitle} />
    <Toolbar/>
  </div>
)

export default TopPanel
