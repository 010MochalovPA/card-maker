import styles from './ShapeRectangle.css'
import getShapeObjectStyle from '../../common/getShapeObjectStyle'
import getRectangleShapeStyle from '../../common/getRectangleShapeStyle'
import { useEffect, useRef, useState } from 'react'
import { useDragAndDrop } from '../../hooks/useDragAndDrop'
import { ShapeObjectProps } from '../ObjectShape/ObjectShape'
import SelectedItem from '../SelectedItem/SelectedItem'
import getDNDFunctions from '../../common/getDNDFunctions'
import { useAppActions } from '../../redux/hooks'
import { Position, Size } from '../../types'
import { ContextMenuType, useContextMenu } from '../../hooks/useContextMenu'
import { ContextMenu } from '../ContextMenu/ContextMenu'

const ShapeRectangle = ({ id, position, size, angle, borderColor, backgroundColor, isSelected, isPreview }: ShapeObjectProps) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const {createChangeSelectedObjectIdAction } = useAppActions()
  const [objectPosition, setObjectPosition] = useState<Position>(position)
  const [objectSize, setObjectSize] = useState<Size>(size)
  
  useEffect(()=> {
    setObjectPosition(position)
    setObjectSize(size)
  },[position, size])

  const [moveFn] = getDNDFunctions(setObjectPosition, setObjectSize)
  useDragAndDrop(id, ref, ref, objectPosition, objectSize, moveFn)
  const {contextMenuPosition, isShowContextMenu, items} = useContextMenu(id, ref, ContextMenuType.OBJECT)
  
  const objectStyle = getShapeObjectStyle(objectPosition, objectSize, angle)
  const rectStyle = getRectangleShapeStyle(objectSize, borderColor, backgroundColor)

  return (
    <>
      <div
        ref={ref}
        className={styles.shape}
        style={{ ...objectStyle, top: objectPosition.top, left: objectPosition.left, width: objectSize.width, height: objectSize.height }}
        onMouseDown={(e) => {
          createChangeSelectedObjectIdAction(id)
          e.stopPropagation()
        }}
      >
        <svg width={objectSize.width} height={objectSize.height} xmlns="http://www.w3.org/2000/svg">
          <rect {...rectStyle} />
        </svg>
      </div>
      {!isPreview && isSelected && <SelectedItem id={id} targetRef={ref} position={objectPosition} size={objectSize} setPosition={setObjectPosition} setSize={setObjectSize} />}
      {!isPreview && isShowContextMenu && <ContextMenu position={contextMenuPosition} items={items} />}
    </>
  )
}

export default ShapeRectangle
