import styles from './TriangleShape.css'
import { ShapeObjectType } from '../../types'
import getShapeObjectStyle from '../../common/getShapeObjectStyle'
import getTriangleShapeStyle from '../../common/getTriangleShapeStyle'
import { useRef, useState } from 'react'
import { useDragAndDrop } from '../../hooks/useDragAndDrop'
import getDNDFunctions from '../../common/getDNDFunctions'
import SelectedItem from '../SelectedItem/SelectedItem'

type ShapeProps = ShapeObjectType & {
  isSelected: boolean
  onClick: () => void
}

const TriangleShape = ({ position, size, angle, borderColor, backgroundColor, isSelected, onClick }: ShapeProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState(position)
  const [newSize, setNewSize] = useState(size)

  const [moveFn] = getDNDFunctions(setPos, setNewSize)

  useDragAndDrop(ref, pos, newSize, moveFn)
  const objectStyle = getShapeObjectStyle(pos, newSize, angle)
  const triangleStyle = getTriangleShapeStyle(newSize, borderColor, backgroundColor)

  return (
    <>
      <div ref={ref} className={styles.shape} style={objectStyle} onClick={(e) => {
          onClick()
          e.stopPropagation()
      }}>
        <svg width={newSize.width} height={newSize.height} xmlns="http://www.w3.org/2000/svg">
          <polygon {...triangleStyle} />
        </svg>
      </div>
      {isSelected && <SelectedItem position={pos} size={newSize} setPosition={setPos} setSize={setNewSize} />}
    </>
  )
}

export default TriangleShape
