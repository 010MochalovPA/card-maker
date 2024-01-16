import { ComponentType, useState } from 'react'
import styles from './ToolbarSlides.css'
import SlideNew from '../../icons/SlideNew'
import SlideDelete from '../../icons/SlideDelete'
import SlideMoveUp from '../../icons/SlideMoveUp'
import SlideMoveDown from '../../icons/SlideMoveDown'
import SlideEditBackground from '../../icons/SlideEditBackground'
import ToolbarItem from '../ToolbarItem/ToolbarItem'
import { useAppActions, useAppSelector } from '../../redux/hooks'
import { Modal } from '../Modal/Modal'
import { ApplyType, ChangeSlideBackground } from '../ChangeSlideBackground/ChangeSlideBackground'
import { Color, SlideBackgroundType } from '../../types'

export type OptionItemType = {
  icon: ComponentType
  onClick: () => void
  tooltip: string
  isDisabled: boolean
}

const ToolbarSlides = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const {
    createAddSlideAction,
    createDeleteSlideAction,
    createMoveDownSlideAction,
    createMoveUpSlideAction,
    createChangeSlideImageDataAction,
    createChangeAllSlidesImageDataAction,
    createChangeAllSlidesColorAction,
    createChangeSlideColorAction,
  } = useAppActions()

  const slideList = useAppSelector((state) => state.editor.document.slideList)
  const currentSlideId = useAppSelector((state) => state.editor.currentSlide)

  const options: OptionItemType[] = [
    {
      icon: SlideNew,
      onClick: () => {
        createAddSlideAction()
      },
      tooltip: 'Add slide',
      isDisabled: false,
    },
    {
      icon: SlideDelete,
      onClick: () => {
        createDeleteSlideAction()
      },
      tooltip: 'Delete slide',
      isDisabled: slideList.length < 2,
    },
    {
      icon: SlideMoveUp,
      onClick: () => {
        createMoveUpSlideAction()
      },
      tooltip: 'Move up slide',
      isDisabled: slideList[0].id === currentSlideId,
    },
    {
      icon: SlideMoveDown,
      onClick: () => {
        createMoveDownSlideAction()
      },
      tooltip: 'Move down slide',
      isDisabled: slideList[slideList.length - 1].id === currentSlideId,
    },
    {
      icon: SlideEditBackground,
      onClick: () => {
        setIsModalOpen(true)
      },
      tooltip: 'Change background',
      isDisabled: false,
    },
  ]

  const onSaveImage = (slideBackgroundType: SlideBackgroundType, data: string | Color, applyType: ApplyType) => {
    
    if (slideBackgroundType === SlideBackgroundType.PICTURE_BASE64 || slideBackgroundType === SlideBackgroundType.PICTURE_URL) {
      switch (applyType){
        case ApplyType.ALL: {
          createChangeAllSlidesImageDataAction(data as string, slideBackgroundType)
        }
        case ApplyType.CURRENT: {
          createChangeSlideImageDataAction(data as string, slideBackgroundType)
        }
      }
    }
    
    if (slideBackgroundType === SlideBackgroundType.SOLID_COLOR) {
      switch (applyType){
        case ApplyType.ALL: {
          createChangeAllSlidesColorAction(data as Color, slideBackgroundType)
        }
        case ApplyType.CURRENT: {
          createChangeSlideColorAction(data as Color, slideBackgroundType)
        }
      }
    }
    
    setIsModalOpen(false)
  }

  return (
    <div className={styles.toolbar}>
      {isModalOpen && (
        <Modal onClose={() => {
          setIsModalOpen(false)
        }}>
          <ChangeSlideBackground onSave={onSaveImage} />
        </Modal>
      )}
      {options.map((option, index) => (
        <ToolbarItem key={index} {...option} />
      ))}
    </div>
  )
}

export { ToolbarSlides }
