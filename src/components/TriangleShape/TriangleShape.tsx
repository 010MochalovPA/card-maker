import styles from './TriangleShape.css'
import { ShapeObjectType } from '../../types'
import getShapeObjectStyle from '../../common/getShapeObjectStyle'
import getTriangleShapeStyle from '../../common/getTriangleShapeStyle'

const TriangleShape = ({
  position,
  size,
  angle,
  borderColor,
  backgroundColor,
}: ShapeObjectType) => {
  const objectStyle = getShapeObjectStyle(position, size, angle)
  const triangleStyle = getTriangleShapeStyle(
    size,
    borderColor,
    backgroundColor,
  )

  return (
    <div className={styles.shape} style={objectStyle}>
      <svg
        width={size.width}
        height={size.height}
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon {...triangleStyle} />
      </svg>
    </div>
  )
}

export default TriangleShape
