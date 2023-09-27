enum SlideBackgroundType {
    SOLID_COLOR,
    PICTURE,
}

enum SlideObjectType {
    TEXT,
    PICTURE,
    PRIMITIVE,
}

enum PrimitiveType {
    RECTANGLE,
    TRIANGLE,
    ELLIPSE,
}

type Editor = {
    document: Doc,
    history: HistoryItem[],
    currentSlide: string,
    selected: SelectedObjects | SelectedSlides,
}

type SelectedObjects = {
    slideObjectIds: string[],
}

type SelectedSlides = {
    slideIds: string[],
}

type Doc = {
    title: string,
    slideList: Slide[],
}

type HistoryItem = {
    // hist item props
}

type Position = {
    x: number,
    y: number,
}

type Size = {
    width: number,
    height: number,
}

type Color = {
    r: number,
    g: number,
    b: number,
    a: number,
}

type Slide = {
    id: string,
    background: BackgroundSolid | BackgroundPicture,
    objects: (TextObject | PictureObject | PrimitiveObject)[],
}

type BackgroundSolid = {
    type: SlideBackgroundType.SOLID_COLOR,
    color: Color,
}

type BackgroundPicture = {
    type: SlideBackgroundType.PICTURE,
    data: string,
}

type SlideObjectBase = {
    id: string,
    size: Size,
    position: Position,
    angle: number,
}

type TextParam = {
    fontFamily: string,
    size: number,
    bold: boolean,
    cursive: boolean, 
    color: Color,
}

type TextObject = SlideObjectBase & {
    type: SlideObjectType.TEXT,
    params: TextParam,
    text: string,
}

type PictureObject = SlideObjectBase & {
    type: SlideObjectType.PICTURE,
    data: string,
}

type PrimitiveObject = SlideObjectBase & {
    type: SlideObjectType.PRIMITIVE,
    shapeType: PrimitiveType.RECTANGLE | PrimitiveType.TRIANGLE | PrimitiveType.ELLIPSE,
    backgroundColor: Color,
    borderColor: Color,
}

export {
    SlideObjectType,
    SlideBackgroundType,
    PrimitiveType,
    PrimitiveObject,
    PictureObject,
    TextObject,
    Slide,
    Doc,
    Editor
}

