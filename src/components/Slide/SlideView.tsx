import getSlideBackgroundString from '../../common/getSlideBackgroundString'
import { useEditorContext } from '../../context/editorContext'
import { SlideObject, SlideObjectType } from '../../types'
import PictureObject from '../PictureObject/PictureObject'
import { ShapeObject } from '../ShapeObject/ShapeObject'
import TextObject from '../TextObject/TextObject'
import styles from './SlideView.css'

function getSlideObject(slideObject: SlideObject) {
  const editor = useEditorContext()
  const isSelected = editor.getSelectedObjects().includes(slideObject.id)
  const mouseClick = () => editor.setSelectedObject([slideObject.id])
  switch (slideObject.type) {
    case SlideObjectType.TEXT:
      return <TextObject key={slideObject.id} {...slideObject} isSelected={isSelected} onClick={mouseClick} />
    case SlideObjectType.PICTURE:
      return <PictureObject key={slideObject.id} {...slideObject} isSelected={isSelected} onClick={mouseClick} />
    case SlideObjectType.SHAPE:
      return <ShapeObject key={slideObject.id} {...slideObject} isSelected={isSelected} onClick={mouseClick} />
  }
}

type SlideViewProps = {
  slideId: string
  scale: number
}

const SlideView = ({ slideId, scale }: SlideViewProps) => {
  const editor = useEditorContext()
  const slide = editor.getSlideById(slideId)
  const background = getSlideBackgroundString(slide)
  const onClick = () => {
    editor.setSelectedObject([])
  }
  return (
    <div className={styles.slide} style={{ background, transform: `scale(${scale})` }} onMouseDown={onClick}>
      {slide.objects.map((slideObject) => getSlideObject(slideObject))}
    </div>
  )
}

export default SlideView
