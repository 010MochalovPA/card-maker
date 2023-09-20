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

type SlideList = SlideType[];

type SlideType = {
    id: string,
    background: BackgroundType,
    objects: ObjectList,
}

type BackgroundType = {
    type: SlideBackgroundType,
    value: string,
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
    backgroundColor: string,
    borderColor: string,
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
    SlideObjectType
}

