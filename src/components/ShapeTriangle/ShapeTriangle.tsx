import styles from './ShapeTriangle.css'
import { Color, SlideObjectBase } from '../../types'

type shapeProps = {
  props: SlideObjectBase & {
    backgroundColor: Color
    borderColor: Color
  }
}

const ShapeTriangle = (props: shapeProps) => {
  const {size, position, angle, borderColor, backgroundColor: bgColor} = props.props
  const {width, height} = size
  const {left, top} = position
  const {r, g, b, a} = bgColor
  const {r: borr, g: borg, b: borb, a: bora} = borderColor
  const fill = `rgba(${r}, ${g}, ${b}, ${a}`
  const stroke = (bora == 0)
    ? `rgba(${r}, ${g}, ${b}, ${a}`
    : `rgba(${borr}, ${borg}, ${borb}, ${bora}`
  const points = `${width/2},1 1,${height - 3} ${width - 3},${height - 3}`
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
      <polygon points={points} fill={fill} strokeWidth="1" stroke={stroke} />
    </svg>
  </div>
}

export default ShapeTriangle
