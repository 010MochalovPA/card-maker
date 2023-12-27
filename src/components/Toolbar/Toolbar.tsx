import { ComponentType, useState } from 'react'
import styles from './Toolbar.css'
import RectangleIcon20dp from '../../icons/RectangleIcon20dp'
import TriangleIcon20dp from '../../icons/TriangleIcon20dp'
import ElipseIcon20dp from '../../icons/ElipseIcon20dp'
import ToolbarItem from '../ToolbarItem/ToolbarItem'
import TextIcon20dp from '../../icons/TextIcon20dp'
import { Modal } from '../Modal/Modal'
import { AddImage } from '../AddImage/AddImage'
import { useAppActions } from '../../redux/hooks'

export type OptionItemType = {
  icon: ComponentType
  onClick: () => void
  tooltip: string
}

const Toolbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const {
    createInsertImageAction,
    createInsertRectangleAction,
    createInsertTriangleAction,
    createInsertEllipseAction,
    createInsertTextAction,
  } = useAppActions()

  const options: OptionItemType[] = [
    {
      icon: RectangleIcon20dp,
      onClick: () => {
        createInsertRectangleAction()
      },
      tooltip: 'Rectangle',
    },
    {
      icon: TriangleIcon20dp,
      onClick: () => {
        createInsertTriangleAction()
      },
      tooltip: 'Triangle',
    },
    {
      icon: ElipseIcon20dp,
      onClick: () => {
        createInsertEllipseAction()
      },
      tooltip: 'Ellipse',
    },
    {
      icon: TextIcon20dp,
      onClick: () => {
        createInsertTextAction()
      },
      tooltip: 'Text',
    },
    {
      icon: TextIcon20dp,
      onClick: () => {
        setIsModalOpen(true)
      },
      tooltip: 'Image',
    },
  ]

  const onSave = (url: string) => {
    createInsertImageAction(url)
    setIsModalOpen(false)
  }

  return (
    <div className={styles.toolbar}>
      {options.map((option, index) => (
        <ToolbarItem key={index} {...option} />
      ))}

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <AddImage onSave={onSave} />
        </Modal>
      )}
    </div>
  )
}

export { Toolbar }
