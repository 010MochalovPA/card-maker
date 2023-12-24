import styles from './TextObject.css'
import { getTextStyle } from '../../common/getTextStyle'
import { TextObjectType } from '../../types'
import getTextObjectStyle from '../../common/getTextObjectStyle'
import { useRef, useState } from 'react'
import { useDragAndDrop } from '../../hooks/useDragAndDrop'
import getDNDFunctions from '../../common/getDNDFunctions'
import SelectedItem from '../SelectedItem/SelectedItem'

type TextObjectProps = TextObjectType & {
  isSelected: boolean
  onClick: () => void
}

const TextObject = ({
  position,
  size,
  angle,
  style,
  text,
  borderColor,
  backgroundColor,
  isSelected,
  onClick,
}: TextObjectProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState(position)
  const [newSize, setNewSize] = useState(size)
  const [value, setValue] = useState(text);

  const [moveFn] = getDNDFunctions(setPos, setNewSize)

  useDragAndDrop(ref, pos, newSize, moveFn)

  const textStyle = getTextStyle(style)
  const objectStyle = getTextObjectStyle(pos, newSize, angle, borderColor, backgroundColor)

  return (
    <>
      <div
        ref={ref}
        className={styles.text}
        style={{ ...objectStyle, top: `${pos.top}px`, left: `${pos.left}px` }}
        onMouseDown={(e) => {
          onClick()
          e.stopPropagation()
        }}
      >
        <textarea style={{width: objectStyle.width, height: objectStyle.height, ...textStyle}} className={styles.input} onChange={(e) => setValue(e.target.value)} value={value}/>
      </div>
      {isSelected && <SelectedItem position={pos} size={newSize} setPosition={setPos} setSize={setNewSize} />}
    </>
  )
}

export default TextObject
