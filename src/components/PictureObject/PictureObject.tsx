import styles from './PictureObject.css'
import { PictureObjectType } from '../../types'
import getPictureObjectStyle from '../../common/getPictureObjectStyle'
import React, { useRef, useState } from 'react'

const PictureObject = ({ size, position, angle, data }: PictureObjectType) => {
  const style = getPictureObjectStyle(position, size, angle, data)
  const divRef = useRef<HTMLDivElement | null>(null)
  const [posStart, setPosStart] = useState({
    left: position.left,
    top: position.top,
  })

  const [pos, setPos] = useState({
    left: position.left,
    top: position.top,
  })
  const [startPosMouse, setStartPosMouse] = useState({x: 0, y: 0,})

  const handleDragStart = ((event: React.DragEvent) => {
    setStartPosMouse({x: event.clientX, y: event.clientY})
    event.dataTransfer.setDragImage(divRef.current!, -9999, -9999)
  })

  const handleDrag = ((event: React.DragEvent) => {
    event.preventDefault()
    setPos(() => ({
      left: posStart.left + event.clientX - startPosMouse.x,
      top: posStart.top + event.clientY - startPosMouse.y,
    }))
  })

  const handleDragEnd = ((event: React.DragEvent) => {
    setPos(() => ({
      left: posStart.left + event.clientX - startPosMouse.x,
      top: posStart.top + event.clientY - startPosMouse.y,
    }))
    setPosStart((prev) => ({
      left: prev.left + event.clientX - startPosMouse.x,
      top: prev.top + event.clientY - startPosMouse.y,
    }))
  })

  return <div
    ref={divRef}
    draggable
    onDragStart={handleDragStart}
    onDrag={handleDrag}
    onDragEnd={handleDragEnd}
    className={styles.picture}
    style={{...style, top: `${pos.top}px`, left: `${pos.left}px`}}
  ></div>
}

export default PictureObject
