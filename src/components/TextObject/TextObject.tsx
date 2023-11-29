import styles from './TextObject.css'
import { getTextStyle } from '../../common/getTextStyle'
import { TextObjectType } from '../../types'
import getTextObjectStyle from '../../common/getTextObjectStyle'
import React, { useState } from 'react'

const TextObject = ({ position, size, angle, style, text, borderColor, backgroundColor }: TextObjectType) => {
  const textStyle = getTextStyle(style)
  const objectStyle = getTextObjectStyle(position, size, angle, borderColor, backgroundColor)

  const [posStart, setPosStart] = useState({
    left: position.left,
    top: position.top,
  })

  const [pos, setPos] = useState({
    left: position.left,
    top: position.top,
  })
  const [startPosMouse, setStartPosMouse] = useState({ x: 0, y: 0 })

  const handleDragStart = (event: React.DragEvent) => {
    setStartPosMouse({ x: event.clientX, y: event.clientY })
  }

  const handleDrag = (event: React.DragEvent) => {
    event.stopPropagation()
    event.preventDefault()
    setPos(() => ({
      left: posStart.left + event.clientX - startPosMouse.x,
      top: posStart.top + event.clientY - startPosMouse.y,
    }))
  }

  const handleDragEnd = (event: React.DragEvent) => {
    setPos(() => ({
      left: posStart.left + event.clientX - startPosMouse.x,
      top: posStart.top + event.clientY - startPosMouse.y,
    }))
    setPosStart((prev) => ({
      left: prev.left + event.clientX - startPosMouse.x,
      top: prev.top + event.clientY - startPosMouse.y,
    }))
  }

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDrag={handleDrag}
      onDragEnd={handleDragEnd}
      className={styles.text}
      style={{ ...objectStyle, top: `${pos.top}px`, left: `${pos.left}px` }}
    >
      <p style={textStyle}>{text}</p>
    </div>
  )
}

export default TextObject
