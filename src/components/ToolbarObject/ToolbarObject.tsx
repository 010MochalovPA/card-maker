import { ComponentType, useState } from 'react'
import styles from './ToolbarObject.css'
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
  isDisabled: boolean
}

const ToolbarObject = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const OVERLAY_CLASS = styles.overlay
  const showOverlay = (isShow:boolean) => {
    const overlay = document.querySelector('#layer')!
    if (isShow) {
      overlay.classList.add(OVERLAY_CLASS)
    } else {
      overlay.classList.remove(OVERLAY_CLASS)
    }
  }

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
      isDisabled: false,
    },
    {
      icon: InsertTriangle,
      onClick: () => {
        createInsertTriangleAction()
      },
      tooltip: 'Triangle',
      isDisabled: false,
    },
    {
      icon: InsertEllipse,
      onClick: () => {
        createInsertEllipseAction()
      },
      tooltip: 'Ellipse',
      isDisabled: false,
    },
    {
      icon: InsertText,
      onClick: () => {
        createInsertTextAction()
      },
      tooltip: 'Text',
      isDisabled: false,
    },
    {
      icon: InsertImage,
      onClick: () => {
        setIsModalOpen(true)
        showOverlay(true)
      },
      tooltip: 'Image',
      isDisabled: false,
    },
  ]

  const onSave = (url: string) => {
    const image = new Image()
    image.src = url
    image.onload = () => {
      createInsertImageAction(url, { width: image.width, height: image.height })
      setIsModalOpen(false)
      showOverlay(false)
    }
  }

  return (
    <div className={styles.toolbar}>
      {options.map((option, index) => (
        <ToolbarItem key={index} {...option} />
      ))}

      {isModalOpen && (
        <Modal onClose={() => {
          setIsModalOpen(false)
          showOverlay(false)
        }}>
          <AddImage onSave={onSave} />
        </Modal>
      )}
    </div>
  )
}

export { ToolbarObject }
