import { TextStyle } from "../types";
import colorToString from "./colorToString";

export const getTextStyle = (style: TextStyle) => {
  return {
    fontFamily: style.fontFamily,
    fontSize: style.fontSize,
    fontWeight: style.bold ? 'bold' : 'normal',
    fontStyle: style.cursive ? 'italic' : 'normal',
    color: colorToString(style.fontColor),
  };
};