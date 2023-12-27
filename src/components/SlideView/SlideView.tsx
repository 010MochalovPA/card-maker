import getSlideBackgroundString from '../../common/getSlideBackgroundString'
import { useAppActions, useAppSelector } from '../../redux/hooks'
import { SlideObject, SlideObjectType } from '../../types'
import PictureObject from '../PictureObject/PictureObject'
import { ShapeObject } from '../ShapeObject/ShapeObject'
import TextObject from '../TextObject/TextObject'
import styles from './SlideView.css'

function getSlideObject(slideObject: SlideObject, isSelected: boolean) {
  switch (slideObject.type) {
    case SlideObjectType.TEXT:
      return <TextObject key={slideObject.id} {...slideObject} isSelected={isSelected} />
    case SlideObjectType.PICTURE:
      return <PictureObject key={slideObject.id} {...slideObject} isSelected={isSelected} />
    case SlideObjectType.SHAPE:
      return <ShapeObject key={slideObject.id} {...slideObject} isSelected={isSelected} />
  }
}

type SlideViewProps = {
  slideId: string
  scale: number
}

const SlideView = ({ slideId, scale }: SlideViewProps) => {
  const slide = useAppSelector((state) => state.editor.document.slideList.find((slide) => slide.id === slideId))
  const objects = useAppSelector(
    (state) => state.editor.document.slideList.find((slide) => slide.id === slideId)?.objects,
  )
  const selectedId = useAppSelector((state) => state.editor.selected.selected)

  const { createChangeSelectedObjectIdAction } = useAppActions()

  if (!objects || !slide) {
    return
  }

  const background = getSlideBackgroundString(slide)
  return (
    <div className={styles.slide} style={{ background, transform: `scale(${scale})` }}>
      {objects.map((slideObject) => getSlideObject(slideObject, slideObject.id === selectedId))}
      <div className={styles.overlay} onMouseDown={() => createChangeSelectedObjectIdAction('')} />
    </div>
  )
}

export default SlideView
