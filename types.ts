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
    document: DocType,
}

type DocType = {
    title: string,
    slideList: SlideList,
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

type SlideList = SlideType[];

type SlideType = {
    id: string,
    background: BackgroundType,
    objects: ObjectList,
}

type BackgroundType = BackgroundSolidType | BackgroundPictureType;

type BackgroundSolidType = {
    type: SlideBackgroundType.SOLID_COLOR,
    color: ColorType,
}

type BackgroundPictureType = {
    type: SlideBackgroundType.PICTURE,
    data: string,
}

type ObjectList = ObjectType[];

type ObjectType = TextObjectType | PictureObjectType | PrimitiveObjectType;

type SlideObjectBase = {
    id: string,
    type: SlideObjectType,
    size: Size,
    position: Position,
}

type TextStyle = {
    font: string,
    size: number,
    bold: boolean,
    cursive: boolean, 
    color: ColorType,
}

type TextObjectType = SlideObjectBase & {
    type: SlideObjectType.TEXT,
    style: TextStyle,
    text: string,
}

type PictureObjectType = SlideObjectBase & {
    type: SlideObjectType.PICTURE,
    data: string,
}

type PrimitiveObjectType = SlideObjectBase & {
    type: SlideObjectType.PRIMITIVE,
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
    PrimitiveObjectType,
    PictureObjectType,
    TextObjectType,
    SlideObjectType,
    SlideType,
    SlideBackgroundType,
    DocType,
    Editor
}

