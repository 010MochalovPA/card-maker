import { PictureObject } from '../types'
import useImageBackground from './useImageBackground'

const useObjectPictureBackground = (pictureObject: PictureObject) => {
  return `transparent ${useImageBackground(pictureObject.data)} top left`
}

export default useObjectPictureBackground
