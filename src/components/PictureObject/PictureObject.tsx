import styles from './PictureObject.css'
import { PictureObjectType } from '../../types'
import getPictureObjectStyle from '../../common/getPictureObjectStyle'
import React, { useRef, useState } from 'react'
import { useDragAndDrop } from '../../hooks/useDragAndDrop'
import SelectedItem from '../SelectedItem/SelectedItem'
import getDNDFunctions from '../../common/getDNDFunctions'

type PictureObjectProps = PictureObjectType & {
  isSelected: boolean
  onClick: () => void
}

const PictureObject = ({ size, position, angle, data, isSelected, onClick }: PictureObjectProps) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [pos, setPos] = useState(position)
  const [newSize, setNewSize] = useState(size)

  const [moveFn] = getDNDFunctions(setPos, setNewSize)

  useDragAndDrop(ref, pos, newSize, moveFn)

  const style = getPictureObjectStyle(pos, newSize, angle, data)
  return (
    <>
      <div
        ref={ref}
        className={styles.picture}
        style={{ ...style, top: `${pos.top}px`, left: `${pos.left}px` }}
        onMouseDown={onClick}
      ></div>
      {isSelected && <SelectedItem position={pos} size={newSize} setPosition={setPos} setSize={setNewSize} />}
    </>
  )
}

export default PictureObject
