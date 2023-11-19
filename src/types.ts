enum SlideBackgroundType {
  SOLID_COLOR,
  PICTURE_BASE64,
  PICTURE_URL,
}

enum SlideObjectType {
  TEXT,
  PICTURE,
  SHAPE,
}

enum ShapeType {
  RECTANGLE,
  TRIANGLE,
  ELLIPSE,
}

enum PictureType {
  BASE64,
  URL,
}

type SelectedObjects = {
  slideObjectIds: string[]
}

type SelectedSlides = {
  slideIds: string[]
}

type HistoryItem = {
  // hist item props
}

type Position = {
  left: number
  top: number
}

type Size = {
  width: number
  height: number
}

type Color = {
  r: number
  g: number
  b: number
  a: number
}

type BackgroundSolid = {
  type: SlideBackgroundType.SOLID_COLOR
  color: Color
}

type BackgroundPicture = {
  type: SlideBackgroundType.PICTURE_BASE64 | SlideBackgroundType.PICTURE_URL
  data: string
}

type SlideObjectBase = {
  id: string
  size: Size
  position: Position
  angle: number
}

type TextStyle = {
  fontFamily: string
  fontSize: number
  bold: boolean
  cursive: boolean
  fontColor: Color
}

type TextObjectType = SlideObjectBase & {
  type: SlideObjectType.TEXT
  style: TextStyle
  text: string
  borderColor: Color
  bgColor: Color
}

type PictureObjectType = SlideObjectBase & {
  type: SlideObjectType.PICTURE
  pictureType: PictureType
  data: string
}

type ShapeObjectType = SlideObjectBase & {
  type: SlideObjectType.SHAPE
  shapeType: ShapeType
  backgroundColor: Color
  borderColor: Color
}

type SlideObject = TextObjectType | PictureObjectType | ShapeObjectType

type ObjectStyle = {
  top: number;
  left: number;
  width: number;
  height: number;
  transform: string;
}

type Slide = {
  id: string
  background: BackgroundSolid | BackgroundPicture
  objects: SlideObject[]
}

type Doc = {
  title: string
  slideList: Slide[]
}

type Editor = {
  document: Doc
  history: HistoryItem[]
  currentSlide: string
  selected: SelectedObjects | SelectedSlides
}

export {
  ObjectStyle,
  SlideObject,
  SlideObjectType,
  SlideBackgroundType,
  ShapeType,
  PictureType,
  ShapeObjectType,
  PictureObjectType,
  TextObjectType,
  Slide,
  Doc,
  Editor,
  Color,
  SlideObjectBase,
  TextStyle,
  Position, Size,
}
