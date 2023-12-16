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
    outline: selected ? '10px dashed blue' : 'none',
    outlineOffset: '-10px',
  }
  const ref = useRef<HTMLDivElement | null>(null)
  const [pos, setPos] = useState(position)
  const [wh, setWh] = useState(size)

  useDragAndDrop(ref, pos, setPos, selected, setSelected, wh, setWh)

  const rectStyle = getRectangleShapeStyle(wh, borderColor, backgroundColor)

  return (
    <div
      ref={ref}
      className={styles.shape}
      style={{ ...objectStyle, top: pos.top, left: pos.left, width: wh.width, height: wh.height }}
      onClick={() => setSelected((prev: boolean) => !prev)}
    >
      <svg width={wh.width} height={wh.height} xmlns="http://www.w3.org/2000/svg">
        <rect {...rectStyle} />
      </svg>
    </div>
  )
}

export default RectangleShape
