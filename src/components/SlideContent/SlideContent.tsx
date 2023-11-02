import styles from './SlideContent.css'
import { Slide, SlideObjectType } from '../../types'
import useSlideBackground from '../../hooks/useSlideBackground'
import classNames from 'classnames'
import ObjectText from '../ObjectText/ObjectText'
import ObjectPicture from '../ObjectPicture/ObjectPicture'
import ObjectShape from '../ObjectShape/ObjectShape'

type SlideContentPropsType = {
  slide: Slide
}

const SlideContent = ({ slide }: SlideContentPropsType) => {
  const background = useSlideBackground(slide)

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
              return <ObjectPicture props={slideObject} />
            case SlideObjectType.SHAPE:
              return <ObjectShape props={slideObject} />
          }
        })}
      </div>
    </div>
  )
}

export default SlideContent
