import styles from './SlidePreview.css'
import { Slide, SlideObject, SlideObjectType } from '../../types'
import classNames from 'classnames'
import getSlideBackgroundString from '../../common/getSlideBackgroundString'
import SlideView from '../Slide/SlideView'

type SlidePreviewPropsType = {
  slide: Slide
  onClick: () => void
  isActive: boolean
}

const SlidePreview = ({ slide, onClick, isActive }: SlidePreviewPropsType) => {
  const background = getSlideBackgroundString(slide)
  return (
    <div className={classNames(styles.slidePreview, isActive && styles.active)} onClick={onClick}>
      <SlideView slide={slide} scale={0.25}/>
    </div>
  )
}

export default SlidePreview
