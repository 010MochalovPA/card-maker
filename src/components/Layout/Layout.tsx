import styles from './Layout.css'
import SlidesPanel from '../SlidesPanel/SlidesPanel'
import SlideContent from '../SlideContent/SlideContent'
import TopPanel from '../TopPanel/TopPanel'
import { useEditorContext } from '../../context/editorContext'
import OptionPanel from '../OptionPanel/OptionPanel'
import { useAppActions, useAppSelector } from '../../redux/hooks'

const Layout = () => {
  
  const slideList = useAppSelector(state => state.editor.document.slideList)
  const currentSlideId = useAppSelector(state => state.editor.currentSlide)
  const {createChangeCurrentSlideIdAction} = useAppActions() 

  return (
    <div className={styles.layout}>
      <TopPanel />
      <SlidesPanel
        slideList={slideList.map((slide) => ({
          id: slide.id,
          onClick: () => {
            createChangeCurrentSlideIdAction(slide.id)
          },
          isActive: slide.id === currentSlideId,
        }))}
      />
      <SlideContent slideId={currentSlideId} />
      <OptionPanel/>
    </div>
  )
}

export default Layout
