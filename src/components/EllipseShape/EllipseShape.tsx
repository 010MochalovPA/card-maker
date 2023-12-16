import getEllipseShapeStyle from '../../common/getEllipseShapeStyle'
import getShapeObjectStyle from '../../common/getShapeObjectStyle'
import { ShapeObjectType } from '../../types'
import styles from './EllipseShape.css'
import { useRef, useState } from 'react'
import { useDragAndDrop } from '../../hooks/useDragAndDrop'

const EllipseShape = ({ position, size, angle, borderColor, backgroundColor }: ShapeObjectType) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [pos, setPos] = useState(position)
  // useDragAndDrop(ref, setPos, pos)

  const objectStyle = getShapeObjectStyle(pos, size, angle)
  const ellipseStyle = getEllipseShapeStyle(size, borderColor, backgroundColor)

  return (
    <div ref={ref} className={styles.shape} style={objectStyle}>
      <svg width={size.width} height={size.height} xmlns="http://www.w3.org/2000/svg">
        <ellipse {...ellipseStyle} />
      </svg>
    </div>
  )
}

export default EllipseShape
