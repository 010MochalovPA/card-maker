enum SlideBackgroundType {
    SOLID_COLOR,
    PICTURE,
}

enum SlideObjectType {
    TEXT,
    PICTURE,
    PRIMITIVE,
}

type Editor = {
    document: Doc,
    history: HistoryItem[],
    currentSlide: string | null,
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
    type: SlideObjectType,
    size: Size,
    position: Position,
    angle: number,
}

type TextParam = {
    font: string,
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
    item: PrimitiveSquare | PrimitiveTriangle | PrimitiveEllipse
    backgroundColor: Color,
    borderColor: Color,
}

type PrimitiveSquare = {
}

type PrimitiveTriangle = {
    vertex: number,
}

type PrimitiveEllipse = {
}

export {
    SlideObjectType,
    SlideBackgroundType,
    PrimitiveObject,
    PictureObject,
    TextObject,
    Slide,
    Doc,
    Editor
}

