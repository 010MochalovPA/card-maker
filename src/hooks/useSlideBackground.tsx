import { Slide, SlideBackgroundType } from '../types'
import useImageBackground from './useImageBackground'
import useColorBackground from './useColorBackground'

const useSlideBackground = (slide: Slide) => {
  switch (slide.background.type) {
    case SlideBackgroundType.SOLID_COLOR:
      return useColorBackground(slide.background.color)
    case SlideBackgroundType.PICTURE_BASE64:
    case SlideBackgroundType.PICTURE_URL:
      return `#ffffff ${useImageBackground(slide.background.data)} center/cover`
  }
}

export default useSlideBackground
