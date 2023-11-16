import styles from './ObjextText.css'
import { SlideObjectType, TextParam, SlideObjectBase, Color } from '../../types'

type objectTextProps = {
  props: SlideObjectBase & {
    type: SlideObjectType.TEXT,
    params: TextParam,
    text: string,
    borderColor: Color,
    bgColor: Color,
  }
}

const ObjectText = (props: objectTextProps) => {
  const {params, text, size, position, angle, borderColor, bgColor} = props.props
  const {width, height} = size
  const {left, top} = position
  const {fontFamily, fontSize, bold, cursive, fontColor} = params
  const {r, g, b, a} = fontColor
  const {r: borr, g: borg, b: borb, a: bora} = borderColor
  const {r: bgcr, g: bgcg, b: bgcb, a: bgca} = bgColor
  const fontWeight = bold ? 'bold' : 'normal'
  const fontStyle = cursive ? 'italic' : 'normal'
  const color = `rgba(${r}, ${g}, ${b}, ${a})`
  const border = `1px solid rgba(${borr}, ${borg}, ${borb}, ${bora}`
  const backgroundColor = `rgba(${bgcr}, ${bgcg}, ${bgcb}, ${bgca}`
  const transform = `rotate(${angle}deg)`

  return <div
    className={styles.text}
    style={{
      width,
      height,
      left,
      top,
      border,
      fontFamily,
      fontSize,
      fontWeight,
      fontStyle,
      backgroundColor,
      color,
      transform,
    }}>{text}</div>
}

export default ObjectText
