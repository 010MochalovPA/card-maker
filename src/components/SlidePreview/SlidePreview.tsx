import styles from './SlidePreview.css'
import { Slide, SlideObject, SlideObjectType } from '../../types'
import classNames from 'classnames'
import getSlideBackgroundString from '../../common/getSlideBackgroundString'
import SlideView from '../Slide/SlideView'

type SlidePreviewPropsType = {
  slideId: string
  onClick: () => void
  isActive: boolean
}

const SlidePreview = ({ slideId, onClick, isActive }: SlidePreviewPropsType) => {
  return (
    <div className={classNames(styles.slidePreview, isActive && styles.active)} onClick={onClick}>
      <SlideView slideId={slideId} scale={0.25}/>
    </div>
  )
}

export default SlidePreview
