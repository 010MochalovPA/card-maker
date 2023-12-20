import styles from './RectangleShape.css'
import getShapeObjectStyle from '../../common/getShapeObjectStyle'
import getRectangleShapeStyle from '../../common/getRectangleShapeStyle'
import React, { useRef, useState } from 'react'
import { useDragAndDrop } from '../../hooks/useDragAndDrop'
import { ShapeObjectProps } from '../ShapeObject/ShapeObject'
import SelectedItem from '../SelectedItem/SelectedItem'
import getDNDFunctions from '../../common/getDNDFunctions'

const RectangleShape = ({
  position,
  size,
  angle,
  borderColor,
  backgroundColor,
  isSelected,
  onClick,
}: ShapeObjectProps) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [pos, setPos] = useState(position)
  const [newSize, setNewSize] = useState(size)

  const [moveFn] = getDNDFunctions(setPos, setNewSize)

  useDragAndDrop(ref, pos, newSize, moveFn)

  const objectStyle = {
    ...getShapeObjectStyle(position, newSize, angle),
  }
  const rectStyle = getRectangleShapeStyle(newSize, borderColor, backgroundColor)

  return (
    <>
      <div
        ref={ref}
        className={styles.shape}
        style={{ ...objectStyle, top: pos.top, left: pos.left, width: newSize.width, height: newSize.height }}
        onMouseDown={(e) => {
          onClick()
          e.stopPropagation()
        }}
      >
        <svg width={newSize.width} height={newSize.height} xmlns="http://www.w3.org/2000/svg">
          <rect {...rectStyle} />
        </svg>
      </div>
      {isSelected && <SelectedItem position={pos} size={newSize} setPosition={setPos} setSize={setNewSize} />}
    </>
  )
}

export default RectangleShape
