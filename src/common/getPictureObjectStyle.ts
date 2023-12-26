import { Color, Position, Size } from '../types'
import colorToString from './colorToString'
import getRotateString from './getRotateString'

const getPictureObjectStyle = (position: Position, size: Size, angle: number, pictureData: string, borderColor: Color, backgroundColor: Color) => {
  const { left, top } = position
  const { width, height } = size

  const background = `transparent url('${pictureData}') center/cover`

  return {
    width,
    height,
    left: `${left}px`,
    top: `${top}px`,
    transform: getRotateString(angle),
    background,
    borderColor: colorToString(borderColor),
    backgroundColor: colorToString(backgroundColor),
  }
}

export default getPictureObjectStyle
