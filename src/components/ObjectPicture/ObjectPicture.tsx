import { PictureType, SlideObjectBase, SlideObjectType } from '../../types'

type objectPictureProps = {
  props: SlideObjectBase & {
    type: SlideObjectType.PICTURE,
    pictureType: PictureType
    data: string
  }
}

const ObjectPicture = (props: objectPictureProps) => {
  return <div></div>
}

export default ObjectPicture