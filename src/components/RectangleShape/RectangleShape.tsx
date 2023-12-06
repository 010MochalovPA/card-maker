import styles from './RectangleShape.css'
import { ShapeObjectType } from '../../types'
import getShapeObjectStyle from '../../common/getShapeObjectStyle'
import getRectangleShapeStyle from '../../common/getRectangleShapeStyle'
import React, { useRef, useState } from 'react'
import { useDragAndDrop } from '../../hooks/useDragAndDrop'

const RectangleShape = ({ position, size, angle, borderColor, backgroundColor }: ShapeObjectType) => {
  const [selected, setSelected] = useState(false)
  const objectStyle = {
    ...getShapeObjectStyle(position, size, angle),
    outline: selected ? '3px solid blue' : 'none',
  }
  const rectStyle = getRectangleShapeStyle(size, borderColor, backgroundColor)
  const ref = useRef<HTMLDivElement | null>(null)
  const [pos, setPos] = useState(position)
  useDragAndDrop(ref, setPos, pos)

  return (
    <div
      ref={ref}
      className={styles.shape}
      style={{ ...objectStyle, top: pos.top, left: pos.left }}
      onClick={() => setSelected((prev: boolean) => !prev)}
    >
      <svg width={size.width} height={size.height} xmlns="http://www.w3.org/2000/svg">
        <rect {...rectStyle} />
      </svg>
    </div>
  )
}

export default RectangleShape
