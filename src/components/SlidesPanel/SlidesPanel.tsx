import styles from './SlidesPanel.css'
import SlidePreview from '../SlidePreview/SlidePreview'
import { SlidesToolbar } from '../SlidesToolbar/SlidesToolbar'

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
    <SlidesToolbar />
    <div className={styles.slidesWrapper}>
      {slideList.map((slideItem, index) => (
        <SlidePreview
          key={slideItem.id}
          index={index}
          slideId={slideItem.id}
          onClick={slideItem.onClick}
          isActive={slideItem.isActive}
        />
      ))}
    </div>
  </div>
)

export default SlidesPanel
