import { TextStyle } from '../types'
import colorToString from './colorToString'

export const getTextStyle = ({ fontFamily, fontSize, bold, cursive, fontColor }: TextStyle) => {
  return {
    fontFamily: fontFamily,
    fontSize: fontSize,
    fontWeight: bold ? 'bold' : 'normal',
    fontStyle: cursive ? 'italic' : 'normal',
    color: colorToString(fontColor),
  }
}
