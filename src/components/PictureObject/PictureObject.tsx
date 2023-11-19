import styles from './PictureObject.css';
import { PictureObjectType } from '../../types';
import getPictureObjectStyle from '../../common/getPictureObjectStyle';

const PictureObject = ({ size, position, angle, data }: PictureObjectType) => {
  const style = getPictureObjectStyle(position, size, angle, data);

  console.log(style)
  
  return <div className={styles.picture} style={style}></div>;
};

export default PictureObject;