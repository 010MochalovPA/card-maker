import styles from './Layout.css'
import SlidesPanel from '../SlidesPanel/SlidesPanel'
import SlideContent from '../SlideContent/SlideContent'
import { useState } from 'react'
import TopPanel from '../TopPanel/TopPanel'
import { useEditorContext } from '../../context/editorContext'

const Layout = () => {
  const editorContext = useEditorContext()
  const slideList = editorContext.getSlides()

  const [selectSlideId, setSelectSlideId] = useState(slideList[0].id)

  return (
    <div className={styles.layout}>
      <TopPanel/>
      <SlidesPanel
        slideList={slideList.map((slide) => ({
          id: slide.id,
          onClick: () => setSelectSlideId(slide.id),
          isActive: slide.id === selectSlideId,
        }))}
      />
      <SlideContent slideId={selectSlideId} />
    </div>
  )
}

export default Layout
