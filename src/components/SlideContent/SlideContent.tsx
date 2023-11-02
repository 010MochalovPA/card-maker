import styles from './SlideContent.css'
import { Slide, SlideObjectType } from '../../types'
import useSlideBackground from '../../hooks/useSlideBackground'
import classNames from 'classnames'
import ObjectText from '../ObjectText/ObjectText'

type SlideContentPropsType = {
  slide: Slide
}

const SlideContent = ({ slide }: SlideContentPropsType) => {
  const background = useSlideBackground(slide)

  console.log(background)
  console.log(slide.objects)

  return (
    <div className={classNames(styles.slideContainer)}>
      <div
        className={styles.slide}
        style={{
          background: `${background} center / cover`,
        }}
      >
        {slide.id}
        {slide.objects.map((slideObject) => {
          switch (slideObject.type) {
            case SlideObjectType.TEXT:
              return <ObjectText props={slideObject} />
            case SlideObjectType.PICTURE:
              return
            case SlideObjectType.SHAPE:
              return
          }
        })}
      </div>
    </div>
  )
}

export default SlideContent
