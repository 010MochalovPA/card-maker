import getEllipseShapeStyle from '../../common/getEllipseShapeStyle'
import getShapeObjectStyle from '../../common/getShapeObjectStyle'
import styles from './EllipseShape.css'
import { useRef, useState } from 'react'
import { useDragAndDrop } from '../../hooks/useDragAndDrop'
import { ShapeObjectProps } from '../ShapeObject/ShapeObject'
import SelectedItem from '../SelectedItem/SelectedItem'
import getDNDFunctions from '../../common/getDNDFunctions'

const EllipseShape = ({
  position,
  size,
  angle,
  borderColor,
  backgroundColor,
  isSelected,
  onClick,
}: ShapeObjectProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState(position)
  const [newSize, setNewSize] = useState(size)

  const [moveFn] = getDNDFunctions(setPos, setNewSize)

  useDragAndDrop(ref, pos, newSize, moveFn)

  const objectStyle = getShapeObjectStyle(pos, newSize, angle)
  const ellipseStyle = getEllipseShapeStyle(newSize, borderColor, backgroundColor)

  return (
    <>
      <div ref={ref} className={styles.shape} style={objectStyle} onMouseDown={onClick}>
        <svg width={newSize.width} height={newSize.height} xmlns="http://www.w3.org/2000/svg">
          <ellipse {...ellipseStyle} />
        </svg>
      </div>
      {isSelected && <SelectedItem position={pos} size={newSize} setPosition={setPos} setSize={setNewSize} />}
    </>
  )
}

export default EllipseShape
