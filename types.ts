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

type ObjectType = TextObject | PictureObject | PrimitiveObject;

type SlideObjectBase = {
    id: string,
}

type TextStyle = {
    font: string,
    size: number,
    bold: boolean,
    cursive: boolean, 
}

type TextObject = SlideObjectBase & {
    type: SlideObjectType.TEXT,
    value: string,
    position: Position,
    size: Size,
    style: TextStyle,
}

type PictureObject = SlideObjectBase & {
    type: SlideObjectType.PICTURE,
    url: string,
    position: Position,
    size: Size,
}

type PrimitiveObject = SlideObjectBase & {
    type: SlideObjectType.PRIMITIVE,
    url: string,
    position: Position,
    size: Size,
    backgroundColor: string,
    borderColor: string,
}

export {
    PrimitiveObject,
    PictureObject,
    TextObject,
    SlideObjectType
}

