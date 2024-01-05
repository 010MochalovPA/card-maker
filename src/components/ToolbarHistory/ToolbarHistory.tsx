import { ComponentType } from 'react'
import styles from './ToolbarHistory.css'
import HistoryUndo from '../../icons/HistoryUndo'
import HistoryRedo from '../../icons/HistoryRedo'
import ToolbarHeaderItem from '../ToolbarHeaderItem/ToolbarHeaderItem'

export type OptionItemType = {
  icon: ComponentType
  onClick: () => void
  tooltip: string
}

const ToolbarHistory = () => {

  const options: OptionItemType[] = [
    {
      icon: HistoryUndo,
      onClick: () => console.log('Undo'),
      tooltip: 'Undo',
    },
    {
      icon: HistoryRedo,
      onClick: () => console.log('Redo'),
      tooltip: 'Redo',
    },
  ]

  return (
    <div className={styles.toolbar}>
      {options.map((option, index) => (
        <ToolbarHeaderItem key={index} {...option} />
      ))}
    </div>
  )
}

export { ToolbarHistory }
