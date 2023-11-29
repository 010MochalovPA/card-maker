import styles from './SlidesPanel.css'
import SlidePreview from '../SlidePreview/SlidePreview'

type SlidesListType = {
  id: string
  onClick: () => void
  isActive: boolean
}

type SlidesPanelPropsType = {
  slideList: SlidesListType[]
}

const SlidesPanel = ({ slideList }: SlidesPanelPropsType) => (
  <div className={styles.slidesPanel}>
    <div className={styles.slidesWrapper}>
      {slideList.map((slideItem) => (
        <SlidePreview
          key={slideItem.id}
          slideId={slideItem.id}
          onClick={slideItem.onClick}
          isActive={slideItem.isActive}
        />
      ))}
    </div>
  </div>
)

export default SlidesPanel
