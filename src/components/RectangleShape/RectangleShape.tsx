import styles from './RectangleShape.css'
import { ShapeObjectType } from '../../types'
import getShapeObjectStyle from '../../common/getShapeObjectStyle'
import getRectangleShapeStyle from '../../common/getRectangleShapeStyle'
import React, { useState } from 'react'

const RectangleShape = ({ position, size, angle, borderColor, backgroundColor }: ShapeObjectType) => {
  const [selected, setSelected] = useState(false)
  const objectStyle = {
    ...getShapeObjectStyle(position, size, angle),
    outline: selected ? '3px solid blue' : 'none',
  }
  const rectStyle = getRectangleShapeStyle(size, borderColor, backgroundColor)
  const [pos, setPos] = useState({
    left: objectStyle.left,
    top: objectStyle.top,
  })
  const [startPos, setStartPos] = useState({x: 0, y: 0,})

  const handleDragStart = ((event: React.DragEvent) => {
    setStartPos({x: event.clientX, y: event.clientY})
  })

  const handleDrag = ((event: React.DragEvent) => {
  })

  const handleDragEnd = ((event: React.DragEvent) => {
    setPos((prev) => ({
      left: prev.left + event.clientX - startPos.x,
      top: prev.top + event.clientY - startPos.y,
    }))
  })

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDrag={handleDrag}
      onDragEnd={handleDragEnd}
      className={styles.shape}
      style={{...objectStyle, top: pos.top, left: pos.left}}
      onClick={() =>
        setSelected((prev: boolean) => !prev)
      }
    >
      <svg width={size.width} height={size.height} xmlns="http://www.w3.org/2000/svg">
        <rect {...rectStyle} />
      </svg>
    </div>
  )
}

export default RectangleShape
