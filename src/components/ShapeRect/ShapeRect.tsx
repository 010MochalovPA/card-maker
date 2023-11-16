import styles from './ShapeRect.css'
import { Color, SlideObjectBase } from '../../types'

type shapeProps = {
  props: SlideObjectBase & {
    backgroundColor: Color
    borderColor: Color
  }
}

const ShapeRect = (props: shapeProps) => {
  const {size, position, angle, borderColor, backgroundColor: bgColor} = props.props
  const {width, height} = size
  const {left, top} = position
  const {r, g, b, a} = bgColor
  const {r: borr, g: borg, b: borb, a: bora} = borderColor
  const fill = `rgba(${r}, ${g}, ${b}, ${a}`
  const stroke = (bora == 0)
    ? `rgba(${r}, ${g}, ${b}, ${a}`
    : `rgba(${borr}, ${borg}, ${borb}, ${bora}`
  const transform = `rotate(${angle}deg)`

  return <div
    className={styles.rect}
    style={{
      top,
      left,
      width,
      height,
      transform,
    }}>
    <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg">
      <rect width={width-4} height={height-4} x="1" y="1" fill={fill} strokeWidth="1" stroke={stroke} />
    </svg>
  </div>
}

export default ShapeRect
