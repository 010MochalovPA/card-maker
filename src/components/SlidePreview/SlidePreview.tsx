import styles from './SlidePreview.css'
import classNames from 'classnames'
import SlideView from '../SlideView/SlideView'

type SlidePreviewProps = {
  slideId: string
  onClick: () => void
  isActive: boolean
}

const SlidePreview = ({ slideId, onClick, isActive }: SlidePreviewProps) => {
  return (
    <div className={classNames(styles.slidePreview, isActive && styles.active)} onClick={onClick} >
      <SlideView slideId={slideId} scale={0.25} isPreview={true}/>
    </div>
  )
}

export default SlidePreview
