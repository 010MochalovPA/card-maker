import styles from './ObjectShape.css'
import { Color, ShapeType, SlideObjectBase, SlideObjectType } from '../../types'

type objectShapeProps = {
  props: SlideObjectBase & {
    type: SlideObjectType.SHAPE,
    shapeType: ShapeType
    backgroundColor: Color
    borderColor: Color
  }
}

const getShapeUrl = (shapeType: ShapeType) => {
  switch (shapeType) {
    case ShapeType.ELLIPSE:
      return '../../assets/svg/circle.svg'
    case ShapeType.RECTANGLE:
      return '../../assets/svg/rectangle.svg'
    case ShapeType.TRIANGLE:
      return '../../assets/svg/triangle.svg'
  }
}

const ObjectShape = (props: objectShapeProps) => {
  const {size, position, angle, borderColor, backgroundColor, shapeType} = props.props
  const {width, height} = size
  const {left, top} = position
  const backgroundSize = `${width}px ${height}px`
  const background = `transparent url(${getShapeUrl(shapeType)}) no-repeat top left`

  return <div
    className={styles.shape}
    style={{
      width,
      height,
      left,
      top,
      background,
      backgroundSize,
    }}
  ></div>
}

export default ObjectShape
