import styles from './SlideContent.css'
import { Slide } from '../../types'
import useSlideBackground from '../../hooks/useSlideBackground'
import classNames from 'classnames'

type SlideContentPropsType = {
  slide: Slide
}

const SlideContent = ({ slide }: SlideContentPropsType) => {
  const background = useSlideBackground(slide)

  console.log(background)

  return (
    <div className={classNames(styles.slideContainer)}>
      <div
        className={styles.slide}
        style={{
          background: `${background} center / cover`,
        }}
      >
        {slide.id}
      </div>
    </div>
  )
}

export default SlideContent
