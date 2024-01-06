import { Slide } from '../types'

const getSlideOrder = (slideList: Slide[], id: string) => {
  console.log(slideList.findIndex((slide) => slide.id === id))

  return slideList.findIndex((slide) => slide.id === id)
}

export default getSlideOrder