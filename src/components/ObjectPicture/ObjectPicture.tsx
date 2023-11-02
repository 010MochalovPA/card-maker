import styles from './ObjectPicture.css'
import { PictureType, SlideObjectBase, SlideObjectType } from '../../types'

type objectPictureProps = {
  props: SlideObjectBase & {
    type: SlideObjectType.PICTURE,
    pictureType: PictureType
    data: string
  }
}

const ObjectPicture = (props: objectPictureProps) => {
  return <div className={styles.picture}></div>
}

export default ObjectPicture
