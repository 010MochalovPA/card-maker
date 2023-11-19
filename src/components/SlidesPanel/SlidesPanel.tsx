import styles from './SlidesPanel.css'
import { Slide } from '../../types'
import SlidePreview from '../SlidePreview/SlidePreview'

type SlidesListType = {
  slide: Slide
  onClick: () => void
  isActive: boolean
}

type SlidesPanelPropsType = {
  slideList: SlidesListType[]
}

const SlidesPanel = ({ slideList }: SlidesPanelPropsType) => (
  <div className={styles.slidesPanel}>
    <div className={styles.slidesWrapper}>
      {slideList.map((slideItem) => {
        return (
          <SlidePreview
            key={slideItem.slide.id}
            slide={slideItem.slide}
            onClick={slideItem.onClick}
            isActive={slideItem.isActive}
          />
        )
      })}
    </div>
  </div>
)

export default SlidesPanel
