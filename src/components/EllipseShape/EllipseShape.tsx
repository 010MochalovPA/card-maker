import getEllipseShapeStyle from '../../common/getEllipseShapeStyle'
import getShapeObjectStyle from '../../common/getShapeObjectStyle'
import styles from './EllipseShape.css'
import { useRef, useState } from 'react'
import { useDragAndDrop } from '../../hooks/useDragAndDrop'
import { ShapeObjectProps } from '../ShapeObject/ShapeObject'
import SelectedItem from '../SelectedItem/SelectedItem'

const EllipseShape = ({ position, size, angle, borderColor, backgroundColor, isSelected }: ShapeObjectProps) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [pos, setPos] = useState(position)
  //useDragAndDrop(ref, pos, setPos)

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
