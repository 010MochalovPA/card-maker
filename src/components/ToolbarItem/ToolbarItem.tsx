import { OptionItemType } from '../Toolbar/Toolbar'
import styles from './ToolbarItem.css'

const ToolbarItem = ({ icon: Icon, onClick, tooltip }: OptionItemType) => {
  return (
    <div title={tooltip} onClick={onClick} className={styles.toolbarItem}>
      <Icon />
    </div>
  )
}

export default ToolbarItem
