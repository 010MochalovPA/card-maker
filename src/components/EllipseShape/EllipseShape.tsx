import getEllipseShapeStyle from '../../common/getEllipseShapeStyle'
import getShapeObjectStyle from '../../common/getShapeObjectStyle'
import styles from './EllipseShape.css'
import { useEffect, useRef, useState } from 'react'
import { useDragAndDrop } from '../../hooks/useDragAndDrop'
import { ShapeObjectProps } from '../ShapeObject/ShapeObject'
import SelectedItem from '../SelectedItem/SelectedItem'
import getDNDFunctions from '../../common/getDNDFunctions'
import { Position, Size } from '../../types'
import { useAppActions } from '../../redux/hooks'
import { ContextMenuType, useContextMenu } from '../../hooks/useContextMenu'
import { ContextMenu } from '../ContextMenu/ContextMenu'

const EllipseShape = ({ id, position, size, angle, borderColor, backgroundColor, isSelected, isPreview }: ShapeObjectProps) => {
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
  const ellipseStyle = getEllipseShapeStyle(objectSize, borderColor, backgroundColor)
  return (
    <>
      <div
        ref={ref}
        className={styles.shape}
        style={objectStyle}
        onMouseDown={(e) => {
          createChangeSelectedObjectIdAction(id)
          e.stopPropagation()
        }}
      >
        <svg width={objectSize.width} height={objectSize.height}>
          <ellipse {...ellipseStyle} />
        </svg>
      </div>
      {!isPreview && isSelected && <SelectedItem id={id} targetRef={ref} position={objectPosition} size={objectSize} setPosition={setObjectPosition} setSize={setObjectSize} />}
      {!isPreview && isShowContextMenu && <ContextMenu position={contextMenuPosition} items={items} />}
    </>
  )
}

export default EllipseShape
