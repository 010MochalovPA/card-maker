import styles from './TriangleShape.css'
import { Position, ShapeObjectType, Size } from '../../types'
import getShapeObjectStyle from '../../common/getShapeObjectStyle'
import getTriangleShapeStyle from '../../common/getTriangleShapeStyle'
import { useRef } from 'react'
import { useDragAndDrop } from '../../hooks/useDragAndDrop'
import getDNDFunctions from '../../common/getDNDFunctions'
import SelectedItem from '../SelectedItem/SelectedItem'
import { useAppActions } from '../../redux/hooks'

type ShapeProps = ShapeObjectType & {
  isSelected: boolean
}

const TriangleShape = ({id, position, size, angle, borderColor, backgroundColor, isSelected }: ShapeProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const { createChangeObjectPositionAction, createChangeSelectedObjectIdAction, createChangeObjectSizeAction } = useAppActions()

  const setPos = (newPosition: Position) => {
    createChangeObjectPositionAction(id, newPosition)
  }

  const setSize = (newSize: Size) => {
    createChangeObjectSizeAction(id, newSize)
  }

  const [moveFn] = getDNDFunctions(setPos, setSize)

  useDragAndDrop(ref, position, size, moveFn)
  const objectStyle = getShapeObjectStyle(position, size, angle)
  const triangleStyle = getTriangleShapeStyle(size, borderColor, backgroundColor)

  return (
    <>
      <div ref={ref} className={styles.shape} style={objectStyle} onMouseDown={(e) => {
          createChangeSelectedObjectIdAction(id)
          e.stopPropagation()
      }}>
        <svg width={size.width} height={size.height}>
          <polygon {...triangleStyle} />
        </svg>
      </div>
      {isSelected && <SelectedItem position={position} size={size} setPosition={setPos} setSize={setSize} />}
    </>
  )
}

export default TriangleShape
