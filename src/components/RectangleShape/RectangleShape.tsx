import styles from './RectangleShape.css'
import getShapeObjectStyle from '../../common/getShapeObjectStyle'
import getRectangleShapeStyle from '../../common/getRectangleShapeStyle'
import { useRef } from 'react'
import { useDragAndDrop } from '../../hooks/useDragAndDrop'
import { ShapeObjectProps } from '../ShapeObject/ShapeObject'
import SelectedItem from '../SelectedItem/SelectedItem'
import getDNDFunctions from '../../common/getDNDFunctions'
import { useAppActions } from '../../redux/hooks'
import { Position, Size } from '../../types'

const RectangleShape = ({ id, position, size, angle, borderColor, backgroundColor, isSelected, isPreview }: ShapeObjectProps) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const { createChangeObjectPositionAction, createChangeSelectedObjectIdAction, createChangeObjectSizeAction } =
    useAppActions()

  const setPosition = (newPosition: Position) => {
    createChangeObjectPositionAction(id, newPosition)
  }

  const setSize = (newSize: Size) => {
    createChangeObjectSizeAction(id, newSize)
  }

  const [moveFn] = getDNDFunctions(setPosition, setSize)

  useDragAndDrop(ref, position, size, moveFn)

  const objectStyle = getShapeObjectStyle(position, size, angle)
  const rectStyle = getRectangleShapeStyle(size, borderColor, backgroundColor)

  return (
    <>
      <div
        ref={ref}
        className={styles.shape}
        style={{ ...objectStyle, top: position.top, left: position.left, width: size.width, height: size.height }}
        onMouseDown={(e) => {
          createChangeSelectedObjectIdAction(id)
          e.stopPropagation()
        }}
      >
        <svg width={size.width} height={size.height} xmlns="http://www.w3.org/2000/svg">
          <rect {...rectStyle} />
        </svg>
      </div>
      {!isPreview && isSelected && <SelectedItem position={position} size={size} setPosition={setPosition} setSize={setSize} />}
    </>
  )
}

export default RectangleShape
