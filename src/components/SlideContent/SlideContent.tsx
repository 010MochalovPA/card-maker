import styles from './SlideContent.css'
import { Slide, SlideObjectType, SlideObject } from '../../types'
import classNames from 'classnames'
import TextObject from '../TextObject/TextObject'
import PictureObject from '../PictureObject/PictureObject'
import ShapeObject from '../ShapeObject/ShapeObject'
import getSlideBackgroundString from '../../common/getSlideBackgroundString'
import SlideView from '../Slide/SlideView'



const SlideContent = (slide: Slide) => {
  const background = getSlideBackgroundString(slide)

  return (
    <div className={classNames(styles.slideContainer)}>
      <SlideView slide={slide} scale={1}/>
    </div>
  )
}

export default SlideContent
