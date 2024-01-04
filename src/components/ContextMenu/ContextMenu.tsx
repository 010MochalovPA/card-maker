import styles from './ContextMenu.css'
import ContextMenuButton from '../ContextMenuButton/ContextMenuButton'
import { createPortal } from 'react-dom'
import { Position } from '../../types'

type ContextMenuItem = {
  text: string,
  handler: () => void
}

type ContextMenuProps = {
  position: Position
  items: ContextMenuItem[]
}

const contextMenu = document.getElementById('context-menu') as Element

const ContextMenu = ({ position, items }: ContextMenuProps) => {

  return createPortal(
    <div className={styles.menu} style={position}>
      {items.map((item, key) => <ContextMenuButton key={key} text={item.text} handler={item.handler} />)}
    </div>, contextMenu
  )
}

export {
  ContextMenu,
  ContextMenuItem
}
