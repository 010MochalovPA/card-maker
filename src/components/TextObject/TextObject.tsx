import styles from './TextObject.css'
import { getTextStyle } from '../../common/getTextStyle'
import { Position, Size, TextObjectType } from '../../types'
import getTextObjectStyle from '../../common/getTextObjectStyle'
import { useRef } from 'react'
import { useDragAndDrop } from '../../hooks/useDragAndDrop'
import getDNDFunctions from '../../common/getDNDFunctions'
import SelectedItem from '../SelectedItem/SelectedItem'
import { useAppActions } from '../../redux/hooks'

type TextObjectProps = TextObjectType & {
  isSelected: boolean
}

const TextObject = ({
  id,
  position,
  size,
  angle,
  style,
  text,
  borderColor,
  backgroundColor,
  isSelected,
}: TextObjectProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const {
    createChangeObjectPositionAction,
    createChangeSelectedObjectIdAction,
    createChangeObjectSizeAction,
    createChangeTextAction,
  } = useAppActions()

  const setPosition = (newPosition: Position) => {
    createChangeObjectPositionAction(id, newPosition)
  }

  const setSize = (newSize: Size) => {
    createChangeObjectSizeAction(id, newSize)
  }

  const setText = (text: string) => {
    createChangeTextAction(id, text)
  }

  const [moveFn] = getDNDFunctions(setPosition, setSize)

  useDragAndDrop(ref, position, size, moveFn)

  const textStyle = getTextStyle(style)
  const objectStyle = getTextObjectStyle(position, size, angle, borderColor, backgroundColor)

  return (
    <>
      <div
        ref={ref}
        className={styles.text}
        style={{ ...objectStyle, top: `${position.top}px`, left: `${position.left}px` }}
        onMouseDown={() => {
          createChangeSelectedObjectIdAction(id)
        }}
      >
        <textarea
          style={textStyle}
          className={styles.input}
          onClick={(e) => e.stopPropagation()}
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
      </div>
      {isSelected && <SelectedItem position={position} size={size} setPosition={setPosition} setSize={setSize} />}
    </>
  )
}

export default TextObject
