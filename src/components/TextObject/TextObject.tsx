import styles from './TextObject.css'
import { getTextStyle } from '../../common/getTextStyle'
import { TextObjectType } from '../../types'
import getTextObjectStyle from '../../common/getTextObjectStyle'

const TextObject = ({
  position,
  size,
  angle,
  style,
  text,
  borderColor,
  backgroundColor,
}: TextObjectType) => {
  const textStyle = getTextStyle(style)
  const objectStyle = getTextObjectStyle(
    position,
    size,
    angle,
    borderColor,
    backgroundColor,
  )

  return (
    <div className={styles.text} style={objectStyle}>
      <p style={textStyle}>{text}</p>
    </div>
  )
}

export default TextObject
