import styles from './PictureObject.css'
import { PictureObjectType, Position, Size } from '../../types'
import getPictureObjectStyle from '../../common/getPictureObjectStyle'
import { useEffect, useRef, useState } from 'react'
import { useDragAndDrop } from '../../hooks/useDragAndDrop'
import SelectedItem from '../SelectedItem/SelectedItem'
import getDNDFunctions from '../../common/getDNDFunctions'
import { useAppActions } from '../../redux/hooks'
import { ContextMenu } from '../ContextMenu/ContextMenu'
import { ContextMenuType, useContextMenu } from '../../hooks/useContextMenu'

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

  const style = getPictureObjectStyle(objectPosition, objectSize, angle, borderColor, backgroundColor)
  
  return (
    <>
      <div
        ref={ref}
        className={styles.picture}
        style={{ ...style, top: `${objectPosition.top}px`, left: `${objectPosition.left}px` }}
        onMouseDown={() => createChangeSelectedObjectIdAction(id)}
      >
        <img className={styles.image} src={data}></img>
      </div>
      {!isPreview && isSelected && <SelectedItem id={id} targetRef={ref} position={objectPosition} size={objectSize} setPosition={setObjectPosition} setSize={setObjectSize} />}
      {!isPreview && isShowContextMenu && <ContextMenu position={contextMenuPosition} items={items} />}
    </>
  )
}

export default PictureObject
