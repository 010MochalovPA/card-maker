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
  const {params, text, type, id, size, position, angle} = props.props
  const {width, height} = size
  const {x, y} = position
  // const {fontFamily, fontSize, bold, cursive, color} = params

  return <div
    className={styles.text}
    style={{ width, height, left: x, top: y }}>{text}</div>
}

export default ObjectText

