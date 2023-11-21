import getSlideBackgroundString from "../../common/getSlideBackgroundString"
import { Slide, SlideObject, SlideObjectType } from "../../types"
import PictureObject from "../PictureObject/PictureObject"
import ShapeObject from "../ShapeObject/ShapeObject"
import TextObject from "../TextObject/TextObject"
import styles from "./SlideView.css"

function getSlideObject(slideObject: SlideObject) {
  switch (slideObject.type) {
    case SlideObjectType.TEXT:
      return <TextObject key={slideObject.id} {...slideObject} />
    case SlideObjectType.PICTURE:
      return <PictureObject key={slideObject.id} {...slideObject} />
    case SlideObjectType.SHAPE:
      return <ShapeObject key={slideObject.id} {...slideObject} />
  }
}

type SlideViewProps = {
  slide: Slide
  scale: number
}

const SlideView = ({slide, scale}: SlideViewProps) => {
  const background = getSlideBackgroundString(slide)

  return (
    <div className={styles.slide} style={{ background, transform: `scale(${scale})` }}>
      {slide.objects.map((slideObject) => getSlideObject(slideObject))}
    </div>
  )
}

export default SlideView
