import styles from './App.css'
import SlidesPanel from '../SlidesPanel/SlidesPanel'
import SlideContent from '../SlideContent/SlideContent'
import { Slide } from '../../types'
import { useState } from 'react'
import TopPanel from '../TopPanel/TopPanel'
import { useEditorContext } from '../../context/editorContext'

const App = () => {
  const editorContext = useEditorContext()
  const slideList = editorContext.getSlides()

  const [selectSlideId, setSelectSlideId] = useState(slideList[0].id)

  return (
    <div className={styles.app}>
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

export default App
