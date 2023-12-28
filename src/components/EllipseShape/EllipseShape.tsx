import getEllipseShapeStyle from '../../common/getEllipseShapeStyle'
import getShapeObjectStyle from '../../common/getShapeObjectStyle'
import styles from './EllipseShape.css'
import { useRef } from 'react'
import { useDragAndDrop } from '../../hooks/useDragAndDrop'
import { ShapeObjectProps } from '../ShapeObject/ShapeObject'
import SelectedItem from '../SelectedItem/SelectedItem'
import getDNDFunctions from '../../common/getDNDFunctions'
import { Position, Size } from '../../types'
import { useAppActions } from '../../redux/hooks'

const EllipseShape = ({ id, position, size, angle, borderColor, backgroundColor, isSelected }: ShapeObjectProps) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const { createChangeObjectPositionAction, createChangeSelectedObjectIdAction, createChangeObjectSizeAction } =
    useAppActions()

  const setPosition = (newPosition: Position) => createChangeObjectPositionAction(id, newPosition)
  const setSize = (newSize: Size) => createChangeObjectSizeAction(id, newSize)

  const [moveFn] = getDNDFunctions(setPosition, setSize)

  useDragAndDrop(ref, position, size, moveFn)

  const objectStyle = getShapeObjectStyle(position, size, angle)
  const ellipseStyle = getEllipseShapeStyle(size, borderColor, backgroundColor)
  return (
    <>
      <div
        ref={ref}
        className={styles.shape}
        style={objectStyle}
        onMouseDown={(e) => {
          createChangeSelectedObjectIdAction(id)
          e.stopPropagation()
        }}
      >
        <svg width={size.width} height={size.height}>
          <ellipse {...ellipseStyle} />
        </svg>
      </div>
      {isSelected && <SelectedItem position={position} size={size} setPosition={setPosition} setSize={setSize} />}
    </>
  )
}

export default EllipseShape
