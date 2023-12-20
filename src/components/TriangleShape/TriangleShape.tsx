import styles from './TriangleShape.css'
import { ShapeObjectType } from '../../types'
import getShapeObjectStyle from '../../common/getShapeObjectStyle'
import getTriangleShapeStyle from '../../common/getTriangleShapeStyle'
import { useRef, useState } from 'react'
import { useDragAndDrop } from '../../hooks/useDragAndDrop'

type ShapeProps = ShapeObjectType & {
  isSelected: boolean
  onClick: () => void
}

const TriangleShape = ({ position, size, angle, borderColor, backgroundColor, isSelected, onClick }: ShapeProps) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [pos, setPos] = useState(position)
  // useDragAndDrop(ref, setPos, pos)

  const objectStyle = getShapeObjectStyle(pos, size, angle)
  const triangleStyle = getTriangleShapeStyle(size, borderColor, backgroundColor)

  return (
    <div ref={ref} className={styles.shape} style={objectStyle} onClick={onClick}>
      <svg width={size.width} height={size.height} xmlns="http://www.w3.org/2000/svg">
        <polygon {...triangleStyle} />
      </svg>
    </div>
  )
}

export default TriangleShape
