import { Slide, SlideBackgroundType } from '../types'
import useImageBackground from './useImageBackground'
import useColorBackground from './useColorBackground'

const useSlideBackground = (slide: Slide) => {
  switch (slide.background.type) {
    case SlideBackgroundType.SOLID_COLOR:
      return useColorBackground(slide.background.color)
    case SlideBackgroundType.PICTURE_BASE64:
      return useImageBackground(slide.background.data)
    case SlideBackgroundType.PICTURE_URL:
      return useImageBackground(slide.background.data)
  }
}

export default useSlideBackground
