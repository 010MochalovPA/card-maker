import { Color, Size } from '../types'
import colorToString from './colorToString'

const getRectangleShapeStyle = (size: Size, borderColor: Color, backgroundColor: Color) => {
  const { width, height } = size

  const fill = colorToString(backgroundColor)
  const stroke = borderColor.a === 0 ? colorToString(backgroundColor) : colorToString(borderColor)

  return { width, height, fill, strokeWidth: '1', stroke }
}

export default getRectangleShapeStyle
