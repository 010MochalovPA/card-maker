import styles from './PictureObject.css'
import { PictureObjectType, Position, Size } from '../../types'
import getPictureObjectStyle from '../../common/getPictureObjectStyle'
import { useRef } from 'react'
import { useDragAndDrop } from '../../hooks/useDragAndDrop'
import SelectedItem from '../SelectedItem/SelectedItem'
import getDNDFunctions from '../../common/getDNDFunctions'
import { useAppActions } from '../../redux/hooks'

type PictureObjectProps = PictureObjectType & {
  isSelected: boolean
}

const PictureObject = ({id, size, position, angle, data, isSelected, borderColor, backgroundColor }: PictureObjectProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const { createChangeObjectPositionAction, createChangeSelectedObjectIdAction, createChangeObjectSizeAction } = useAppActions()

  const setPosition = (newPosition: Position) => {
    createChangeObjectPositionAction(id, newPosition)
  }
  
  const setSize = (newSize: Size) => {
    createChangeObjectSizeAction(id, newSize)
  }

  const [moveFn] = getDNDFunctions(setPosition, setSize)

  useDragAndDrop(ref, position, size, moveFn)

  const style = getPictureObjectStyle(position, size, angle, data, borderColor, backgroundColor )
  return (
    <>
      <div
        ref={ref}
        className={styles.picture}
        style={{ ...style, top: `${position.top}px`, left: `${position.left}px` }}
        onMouseDown={(e) => {
          createChangeSelectedObjectIdAction(id)
          e.stopPropagation()
        }}
      />
      {isSelected && <SelectedItem position={position} size={size} setPosition={setPosition} setSize={setSize} />}
    </>
  )
}

export default PictureObject
