import styles from './PictureObject.css'
import { PictureObjectType, Position, Size } from '../../types'
import getPictureObjectStyle from '../../common/getPictureObjectStyle'
import { useRef, useState } from 'react'
import { useDragAndDrop } from '../../hooks/useDragAndDrop'
import SelectedItem from '../SelectedItem/SelectedItem'
import getDNDFunctions from '../../common/getDNDFunctions'
import { useAppActions } from '../../redux/hooks'
import ContextMenu from '../ContextMenu/ContextMenu'

type PictureObjectProps = PictureObjectType & {
  isSelected: boolean
  isPreview: boolean
}

const PictureObject = ({
  id,
  size,
  position,
  angle,
  data,
  isSelected,
  borderColor,
  backgroundColor,
  isPreview,
}: PictureObjectProps) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const { createChangeObjectPositionAction, createChangeSelectedObjectIdAction, createChangeObjectSizeAction } =
    useAppActions()

  const setPosition = (newPosition: Position) => {
    createChangeObjectPositionAction(id, newPosition)
  }

  const setSize = (newSize: Size) => {
    createChangeObjectSizeAction(id, newSize)
  }

  const [contextMenuState, setContextMenuState] = useState(false)
  const [contextMenuPosition, setContextMenuPosition] = useState({top: 0, left: 0})

  const [moveFn] = getDNDFunctions(setPosition, setSize)

  const objectPlaceTopHandler = () => {
    console.log('объект на самый верх')
    setContextMenuState(false)
  }

  const objectPlaceUpHandler = () => {
    console.log('объект повыше')
    setContextMenuState(false)
  }

  const objectPlaceDownHandler = () => {
    console.log('объект пониже')
    setContextMenuState(false)
  }

  const objectPlaceBottomHandler = () => {
    console.log('объект в самый низ')
    setContextMenuState(false)
  }

  const objectDeleteHandler = () => {
    console.log('удаление объекта')
    setContextMenuState(false)
  }

  const menuItems = [
    {text: 'Переместить вверх', handler: objectPlaceTopHandler},
    {text: 'Переместить выше', handler: objectPlaceUpHandler},
    {text: 'Переместить ниже', handler: objectPlaceDownHandler},
    {text: 'Переместить вниз', handler: objectPlaceBottomHandler},
    {text: 'Удалить', handler: objectDeleteHandler},
  ]

  useDragAndDrop(ref, position, size, moveFn)

  const style = getPictureObjectStyle(position, size, angle, data, borderColor, backgroundColor)
  return (
    <>
      <div
        ref={ref}
        className={styles.picture}
        style={{ ...style, top: `${position.top}px`, left: `${position.left}px` }}
        onMouseDown={(e) => {
          e.stopPropagation()
          e.preventDefault()
          createChangeSelectedObjectIdAction(id)
        }}
        onContextMenu={(e) => {
          e.preventDefault()
          e.stopPropagation()
          setContextMenuState(true)
          const {x: slideViewRectX, y: slideViewRectY} = document.querySelector('#slideView')!.getBoundingClientRect()
          setContextMenuPosition({top: e.clientY - slideViewRectY, left: e.clientX - slideViewRectX})
        }}
      />
      {!isPreview && isSelected && <SelectedItem position={position} size={size} setPosition={setPosition} setSize={setSize} />}
      {!isPreview && contextMenuState && <ContextMenu position={contextMenuPosition} items={menuItems} />}
    </>
  )
}

export default PictureObject
