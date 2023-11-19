import { Position, Size } from "../types";
import getRotateString from "./getRotateString";

const getPictureObjectStyle = (position: Position, size: Size, angle: number, pictureData: string) => {
  const { left, top } = position;
  const { width, height } = size;

  const background = `transparent url('${pictureData}') center/cover`;
  const backgroundSize = `${width}px ${height}px`;

  return {
    width,
    height,
    left: `${left}px`,
    top: `${top}px`,
    transform: getRotateString(angle),
    backgroundSize,
    background
  };
};

export default getPictureObjectStyle