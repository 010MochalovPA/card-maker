import { ComponentType, useState } from 'react'
import styles from './Toolbar.css'
import InsertRectangle from '../../icons/InsertRectangle'
import InsertTriangle from '../../icons/InsertTriangle'
import InsertEllipse from '../../icons/InsertEllipse'
import InsertText from '../../icons/InsertText'
import InsertImage from '../../icons/InsertImage'
import ToolbarItem from '../ToolbarItem/ToolbarItem'
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
      icon: InsertRectangle,
      onClick: () => {
        createInsertRectangleAction()
      },
      tooltip: 'Rectangle',
    },
    {
      icon: InsertTriangle,
      onClick: () => {
        createInsertTriangleAction()
      },
      tooltip: 'Triangle',
    },
    {
      icon: InsertEllipse,
      onClick: () => {
        createInsertEllipseAction()
      },
      tooltip: 'Ellipse',
    },
    {
      icon: InsertText,
      onClick: () => {
        createInsertTextAction()
      },
      tooltip: 'Text',
    },
    {
      icon: InsertImage,
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
