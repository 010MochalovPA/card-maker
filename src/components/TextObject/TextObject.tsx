import styles from './TextObject.css'
import { getTextStyle } from '../../common/getTextStyle'
import { TextObjectType } from '../../types'
import getTextObjectStyle from '../../common/getTextObjectStyle'
import { useRef, useState } from 'react'
import { useDragAndDrop } from '../../hooks/useDragAndDrop'

const TextObject = ({ position, size, angle, style, text, borderColor, backgroundColor }: TextObjectType) => {
  const textStyle = getTextStyle(style)
  const objectStyle = getTextObjectStyle(position, size, angle, borderColor, backgroundColor)
  const ref = useRef<HTMLDivElement | null>(null)
  const [pos, setPos] = useState(position)
  // useDragAndDrop(ref, setPos, pos)
  return (
    <div ref={ref} className={styles.text} style={{ ...objectStyle, top: `${pos.top}px`, left: `${pos.left}px` }}>
      <p style={textStyle}>{text}</p>
    </div>
  )
}

export default TextObject
