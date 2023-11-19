import styles from './SlideContent.css'
import { Slide, SlideObjectType, SlideObject } from '../../types'
import classNames from 'classnames'
import TextObject from '../TextObject/TextObject'
import PictureObject from '../PictureObject/PictureObject'
import ShapeObject from '../ShapeObject/ShapeObject'
import getSlideBackgroundString from '../../common/getSlideBackgroundString'

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

const SlideContent = (slide: Slide) => {
  const background = getSlideBackgroundString(slide)

  return (
    <div className={classNames(styles.slideContainer)}>
      <div className={styles.slide} style={{background}}>
        {slide.objects.map((slideObject) => (getSlideObject(slideObject)))}
      </div>
    </div>
  )
}

export default SlideContent
