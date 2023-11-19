import getEllipseShapeStyle from "../../common/getEllipseShapeStyle";
import getShapeObjectStyle from "../../common/getShapeObjectStyle";
import { ShapeObjectType } from "../../types";
import styles from './EllipseShape.css'

const EllipseShape = ({position, size, angle, borderColor, backgroundColor}: ShapeObjectType) => {
  const objectStyle = getShapeObjectStyle(position, size, angle);
  const ellipseStyle = getEllipseShapeStyle(size, borderColor, backgroundColor);

  return (
    <div className={styles.shape} style={objectStyle}>
      <svg width={size.width} height={size.height} xmlns="http://www.w3.org/2000/svg">
        <ellipse {...ellipseStyle} />
      </svg>
    </div>
  );
};

export default EllipseShape