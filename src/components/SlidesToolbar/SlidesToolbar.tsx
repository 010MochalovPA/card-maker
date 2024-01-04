import { ComponentType } from 'react'
import styles from './SlidesToolbar.css'
import SlideNew from '../../icons/SlideNew'
import SlideDelete from '../../icons/SlideDelete'
import SlideMoveUp from '../../icons/SlideMoveUp'
import SlideMoveDown from '../../icons/SlideMoveDown'
import SlideEditBackground from '../../icons/SlideEditBackground'
import ToolbarItem from '../ToolbarItem/ToolbarItem'
import { useAppActions } from '../../redux/hooks'

export type OptionItemType = {
  icon: ComponentType
  onClick: () => void
  tooltip: string
}

const SlidesToolbar = () => {
  const { createAddSlideAction, createDeleteSlideAction, createMoveDownSlideAction, createMoveUpSlideAction } =
    useAppActions()

  const options: OptionItemType[] = [
    {
      icon: SlideNew,
      onClick: () => {
        createAddSlideAction()
      },
      tooltip: 'Add slide',
    },
    {
      icon: SlideDelete,
      onClick: () => {
        createDeleteSlideAction()
      },
      tooltip: 'Delete slide',
    },
    {
      icon: SlideMoveUp,
      onClick: () => {
        createMoveUpSlideAction()
      },
      tooltip: 'Move up slide',
    },
    {
      icon: SlideMoveDown,
      onClick: () => {
        createMoveDownSlideAction()
      },
      tooltip: 'Move down slide',
    },
    {
      icon: SlideEditBackground,
      onClick: () => {
        console.log('change background')
      },
      tooltip: 'Change background',
    },
  ]

  return (
    <div className={styles.toolbar}>
      {options.map((option, index) => (
        <ToolbarItem key={index} {...option} />
      ))}
    </div>
  )
}

export { SlidesToolbar }
