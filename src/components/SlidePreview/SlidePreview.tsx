import styles from './SlidePreview.css'
import { Slide } from '../../types'
import classNames from 'classnames'

type SlidePreviewPropsType = {
  slide: Slide
  onClick: () => void
  isActive: boolean
}

const SlidePreview = ({ slide, onClick, isActive }: SlidePreviewPropsType) => (
  <div
    className={classNames(styles.slidePreview, isActive && styles.active)}
    onClick={onClick}
  >
    {slide.id}
  </div>
)

export default SlidePreview
