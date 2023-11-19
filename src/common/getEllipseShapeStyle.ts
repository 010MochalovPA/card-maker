import { Color, Size } from '../types'
import colorToString from './colorToString'

const getEllipseShapeStyle = (
  size: Size,
  borderColor: Color,
  backgroundColor: Color,
): React.SVGProps<SVGEllipseElement> => {
  const { width, height } = size

  const fill: string = colorToString(backgroundColor)
  const stroke: string = borderColor.a === 0 ? colorToString(backgroundColor) : colorToString(borderColor)

  const cx: string = `${width / 2}`
  const cy: string = `${height / 2}`
  const rx: string = `${width / 2}`
  const ry: string = `${height / 2}`

  return {
    cx,
    cy,
    rx,
    ry,
    fill,
    strokeWidth: '1',
    stroke,
  }
}

export default getEllipseShapeStyle
