import styles from './RectangleShape.css';
import { ShapeObjectType } from '../../types';
import getShapeObjectStyle from '../../common/getShapeObjectStyle';
import getRectangleShapeStyle from '../../common/getRectangleShapeStyle';

const RectangleShape = ({ position, size, angle, borderColor, backgroundColor }: ShapeObjectType) => {
  const objectStyle = getShapeObjectStyle(position, size, angle);
  const rectStyle = getRectangleShapeStyle(size, borderColor, backgroundColor);

  return (
    <div className={styles.rect} style={objectStyle}>
      <svg width={size.width} height={size.height} xmlns="http://www.w3.org/2000/svg">
        <rect {...rectStyle} />
      </svg>
    </div>
  );
};

export default RectangleShape;