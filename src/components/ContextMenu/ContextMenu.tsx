import styles from './ContextMenu.css'
import ContextMenuButton from '../ContextMenuButton/ContextMenuButton'

type ContextMenuProps = {
  position: {top: number, left: number}
  items: Array<{text: string, handler: () => void}>
}

const ContextMenu = ({position, items}: ContextMenuProps) => {
  return <div className={styles.menu} style={position}>
    {items.map((item, key) => <ContextMenuButton key={key} text={item.text} handler={item.handler} />)}
  </div>
}

export default ContextMenu
