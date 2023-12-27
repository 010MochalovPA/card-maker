import styles from './SlideContent.css'
import classNames from 'classnames'
import SlideView from '../SlideView/SlideView'
import {Toolbar} from '../Toolbar/Toolbar'

type SlideContentProps = {
  slideId: string
}

const SlideContent = ({ slideId }: SlideContentProps) => {
  return (
    <div className={classNames(styles.slideContainer)}>
      <Toolbar />
      <SlideView slideId={slideId} scale={1} />
    </div>
  )
}

export default SlideContent
