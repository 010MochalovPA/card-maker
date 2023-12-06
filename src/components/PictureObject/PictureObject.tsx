import styles from './PictureObject.css'
import { PictureObjectType } from '../../types'
import getPictureObjectStyle from '../../common/getPictureObjectStyle'
import React, { useRef, useState } from 'react'
import { useDragAndDrop } from '../../hooks/useDragAndDrop'

const PictureObject = ({ size, position, angle, data }: PictureObjectType) => {
  const style = getPictureObjectStyle(position, size, angle, data)
  const ref = useRef<HTMLDivElement | null>(null)
  const [pos, setPos] = useState(position)
  useDragAndDrop(ref, setPos, pos)

  return (
    <div ref={ref} className={styles.picture} style={{ ...style, top: `${pos.top}px`, left: `${pos.left}px` }}></div>
  )
}

export default PictureObject
