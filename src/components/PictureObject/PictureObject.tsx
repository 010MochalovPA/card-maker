import styles from './PictureObject.css'
import { PictureObjectType } from '../../types'
import getPictureObjectStyle from '../../common/getPictureObjectStyle'
import React, { useState } from 'react'

const PictureObject = ({ size, position, angle, data }: PictureObjectType) => {
  const style = getPictureObjectStyle(position, size, angle, data)
  const [pos, setPos] = useState({
    left: position.left,
    top: position.top,
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

  return <div
    draggable
    onDragStart={handleDragStart}
    onDrag={handleDrag}
    onDragEnd={handleDragEnd}
    className={styles.picture}
    style={{...style, top: `${pos.top}px`, left: `${pos.left}px`}}
  ></div>
}

export default PictureObject
