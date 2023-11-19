import styles from './App.css'
import SlidesPanel from '../SlidesPanel/SlidesPanel'
import SlideContent from '../SlideContent/SlideContent'
import { Slide } from '../../types'
import { editor1 } from '../../mock'
import { useState } from 'react'
import TopPanel from '../TopPanel/TopPanel'

const App = () => {
  const slideList: Slide[] = editor1.document.slideList

  const [selectSlideId, setSelectSlideId] = useState(slideList[0].id)
  const [selectSlide, setSelectSlide] = useState(slideList[0])
  const [title, setTitle] = useState(editor1.document.title)

  const onClickSlide = (id: string) => {
    const slide = slideList.find((slide) => slide.id == id)

    if (!slide) {
      return
    }

    setSelectSlideId(id)
    setSelectSlide(slide)
  }

  return (
    <div className={styles.app}>
      <TopPanel title={title} setTitle={setTitle} />
      <SlidesPanel
        slideList={slideList.map((slide) => ({
          slide: slide,
          onClick: () => onClickSlide(slide.id),
          isActive: slide.id === selectSlideId,
        }))}
      />
      <SlideContent {...selectSlide} />
    </div>
  )
}

export default App
