import { ShapeType, ShapeObjectType } from '../../types'
import RectangleShape from '../RectangleShape/RectangleShape'
import EllipseShape from '../EllipseShape/EllipseShape'
import TriangleShape from '../TriangleShape/TriangleShape'

type ShapeObjectProps = ShapeObjectType & {
  isSelected: boolean
}

const ShapeObject = (shapeObjectProps: ShapeObjectProps) => {
  switch (shapeObjectProps.shapeType) {
    case ShapeType.ELLIPSE:
      return <EllipseShape {...shapeObjectProps} />
    case ShapeType.RECTANGLE:
      return <RectangleShape {...shapeObjectProps} />
    case ShapeType.TRIANGLE:
      return <TriangleShape {...shapeObjectProps} />
    default:
      throw Error('unknown shape type')
  }
}

export { ShapeObject, ShapeObjectProps }
