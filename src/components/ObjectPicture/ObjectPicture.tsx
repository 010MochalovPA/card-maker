import styles from './ObjectPicture.css'
import { PictureType, SlideObjectBase, SlideObjectType } from '../../types'
import useObjectPictureBackground from '../../hooks/useObjectPictureBackground'

type objectPictureProps = {
  props: SlideObjectBase & {
    type: SlideObjectType.PICTURE,
    pictureType: PictureType,
    data: string,
  }
}

const ObjectPicture = (props: objectPictureProps) => {
  const {size, position} = props.props
  const {width, height} = size
  const {left, top} = position
  const background = useObjectPictureBackground(props.props)
  const backgroundSize = `${width}px ${height}px`

  return <div className={styles.picture} style={{
    width,
    height,
    left,
    top,
    background,
    backgroundSize
  }}></div>
}

export default ObjectPicture
