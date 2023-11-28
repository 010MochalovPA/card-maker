import styles from './RectangleShape.css'
import { ShapeObjectType } from '../../types'
import getShapeObjectStyle from '../../common/getShapeObjectStyle'
import getRectangleShapeStyle from '../../common/getRectangleShapeStyle'
import React, { useRef, useState } from 'react'

const RectangleShape = ({ position, size, angle, borderColor, backgroundColor }: ShapeObjectType) => {
  const [selected, setSelected] = useState(false)
  const objectStyle = {
    ...getShapeObjectStyle(position, size, angle),
    outline: selected ? '3px solid blue' : 'none',
  }
  const rectStyle = getRectangleShapeStyle(size, borderColor, backgroundColor)
  const divRef = useRef<HTMLDivElement | null>(null)
  const [x, setX] = useState(objectStyle.left);
  const [y, setY] = useState(objectStyle.top);
  const [startPos, setStartPos] = useState({x: 0, y: 0,})

  const handleDragStart = ((event: React.DragEvent) => {
    // This method runs when the dragging starts
    console.log("Started")
    setStartPos({x: event.clientX, y: event.clientY})
  })

  const handleDrag = ((event: React.DragEvent) => {
    // This method runs when the component is being dragged
    console.log("Dragging...")
  })

  const handleDragEnd = ((event: React.DragEvent) => {
    const {top: slideViewTop, left: slideViewLeft} = document.getElementById('slideView')!.getBoundingClientRect()

    // This method runs when the dragging stops
    console.log("Ended")
    const eventX = event.clientX
    const eventY = event.clientY
    const rectLeft = divRef.current!.getBoundingClientRect().left
    const rectTop = divRef.current!.getBoundingClientRect().top
    console.log(`slideViewTop = ${slideViewTop} ; slideViewLeft = ${slideViewLeft}`)
    console.log(`eventX = ${eventX} ; eventY = ${eventY}; rectLeft = ${rectLeft} ; rectTop = ${rectTop}`)
    console.log(`startPosX = ${startPos.x} ; startPosY = ${startPos.y}`)
    setX((prev) => (prev + eventX - startPos.x));
    setY((prev) => (prev + eventY - startPos.y));
  })

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDrag={handleDrag}
      onDragEnd={handleDragEnd}
      ref={divRef}
      className={styles.shape}
      style={{...objectStyle, top: y, left: x}}
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
