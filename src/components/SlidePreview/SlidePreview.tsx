import styles from './SlidePreview.css'
import classNames from 'classnames'
import SlideView from '../Slide/SlideView'

type SlidePreviewPropsType = {
  slideId: string
  onClick: () => void
  isActive: boolean
}

const SlidePreview = ({ slideId, onClick, isActive }: SlidePreviewPropsType) => {
  return (
    <div className={classNames(styles.slidePreview, isActive && styles.active)} onClick={onClick}>
      <SlideView slideId={slideId} scale={0.25} />
    </div>
  )
}

export default SlidePreview
