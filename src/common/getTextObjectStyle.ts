import { Color, Position, Size } from "../types";
import colorToString from "./colorToString";

const getTextObjectStyle = (position: Position, size: Size, angle: number, borderColor: Color, bgColor: Color) => {
  const { left, top } = position;
  const { width, height } = size;

  return {
    left: `${left}px`,
    top: `${top}px`,
    width: `${width}px`,
    height: `${height}px`,
    transform: `rotate(${angle}deg)`,
    borderColor: colorToString(borderColor),
    backgroundColor: colorToString(bgColor),
  };
};

export default getTextObjectStyle