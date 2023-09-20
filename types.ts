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
    hist: HistItem[],
}

type Doc = {
    title: string,
    slideList: SlideType[],
}

type HistItem = {
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

type ColorType = {
    r: number,
    g: number,
    b: number,
    a: number,
}

type SlideType = {
    id: string,
    background: BackgroundSolidType | BackgroundPictureType,
    objects: (TextObjectType | PictureObjectType | PrimitiveObjectType)[],
}

type BackgroundSolidType = {
    type: SlideBackgroundType.SOLID_COLOR,
    color: ColorType,
}

type BackgroundPictureType = {
    type: SlideBackgroundType.PICTURE,
    data: string,
}

type SlideObjectBase = {
    id: string,
    type: SlideObjectType,
    size: Size,
    position: Position,
}

type TextParam = {
    font: string,
    size: number,
    bold: boolean,
    cursive: boolean, 
    color: ColorType,
}

type TextObjectType = SlideObjectBase & {
    type: SlideObjectType.TEXT,
    params: TextParam,
    text: string,
}

type PictureObjectType = SlideObjectBase & {
    type: SlideObjectType.PICTURE,
    data: string,
}

type PrimitiveObjectType = SlideObjectBase & {
    item: PrimitiveSquare | PrimitiveTriangle | PrimitiveEllipse
    backgroundColor: ColorType,
    borderColor: ColorType,
}

type PrimitiveSquare = {
    // some square props
}

type PrimitiveTriangle = {
    // some triangle props
}

type PrimitiveEllipse = {
    // some ellipse props
}

export {
    SlideObjectType,
    SlideBackgroundType,
    PrimitiveObjectType,
    PictureObjectType,
    TextObjectType,
    SlideType,
    Doc,
    Editor
}

