import styles from './ObjextText.css'
import { SlideObjectType, TextParam, SlideObjectBase } from '../../types'

type objectTextProps = {
  props: SlideObjectBase & {
    type: SlideObjectType.TEXT,
    params: TextParam,
    text: string
  }
}

const ObjectText = (props: objectTextProps) => {
  const {params, text, size, position, angle} = props.props
  const {width, height} = size
  const {left, top} = position
  const {fontFamily, fontSize, bold, cursive, fontColor} = params
  const {r, g, b, a} = fontColor
  const fontWeight = bold ? 'bold' : 'normal'
  const fontStyle = cursive ? 'italic' : 'normal'
  const color = `rgba(${r}, ${g}, ${b}, ${a})`

  return <div
    className={styles.text}
    style={{
      width,
      height,
      left,
      top,
      fontFamily,
      fontSize,
      fontWeight,
      fontStyle,
      color,
    }}>{text}</div>
}

export default ObjectText
