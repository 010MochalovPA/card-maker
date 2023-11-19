import { ShapeType, ShapeObjectType } from '../../types'
import RectangleShape from '../RectangleShape/RectangleShape'
import EllipseShape from '../EllipseShape/EllipseShape'
import TriangleShape from '../TriangleShape/TriangleShape'

const ShapeObject = (shapeObject: ShapeObjectType) => {
  switch (shapeObject.shapeType) {
    case ShapeType.ELLIPSE:
      return <EllipseShape {...shapeObject} />
    case ShapeType.RECTANGLE:
      return <RectangleShape {...shapeObject} />
    case ShapeType.TRIANGLE:
      return <TriangleShape {...shapeObject} />
    default:
      throw Error('unknown shape type')
  }
}

export default ShapeObject
