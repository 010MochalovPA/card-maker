import { Color, ShapeType, SlideObjectBase, SlideObjectType } from '../../types'
import ShapeRect from '../ShapeRect/ShapeRect'
import ShapeEllipse from '../ShapeEllipse/ShapeEllipse'
import ShapeTriangle from '../ShapeTriangle/ShapeTriangle'

type objectShapeProps = {
  props: SlideObjectBase & {
    type: SlideObjectType.SHAPE
    shapeType: ShapeType
    backgroundColor: Color
    borderColor: Color
  }
}

const ObjectShape = (props: objectShapeProps) => {
  const {shapeType} = props.props
  switch (shapeType) {
    case ShapeType.ELLIPSE:
      return <ShapeEllipse props={props.props} />
    case ShapeType.RECTANGLE:
      return <ShapeRect props={props.props} />
    case ShapeType.TRIANGLE:
      return <ShapeTriangle props={props.props} />
  }
}

export default ObjectShape
