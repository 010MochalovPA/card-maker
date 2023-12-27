import { Color, FontStyles, Position, Size } from "../types"

enum EditorActions {
    CHANGE_TITLE = 'CHANGE_TITLE',
    CHANGE_OBJECT_POSITION = 'CHANGE_OBJECT_POSITION',
    CHANGE_OBJECT_SIZE = 'CHANGE_OBJECT_SIZE',
    CHANGE_OBJECT_BACKGROUND_COLOR = 'CHANGE_OBJECT_BACKGROUND_COLOR',
    CHANGE_CURRENT_SLIDE_ID = 'CHANGE_CURRENT_SLIDE_ID',
    CHANGE_SELECTED_OBJECT_ID = 'CHANGE_SELECTED_OBJECT_ID',
    CHANGE_OBJECT_BORDER_COLOR = 'CHANGE_OBJECT_BORDER_COLOR',
    CHANGE_TEXT_FONT_STYLES = 'CHANGE_TEXT_FONT_STYLES',
    CHANGE_TEXT = 'CHANGE_TEXT',
    INSERT_IMAGE = 'INSERT_IMAGE',
    INSERT_RECTANGLE = 'INSERT_RECTANGLE',
    INSERT_TRIANGLE = 'INSERT_TRIANGLE',
    INSERT_ELLIPSE = 'INSERT_ELLIPSE',
    INSERT_TEXT = 'INSERT_TEXT',
    CHANGE_IMAGE_DATA = 'CHANGE_IMAGE_DATA',
    DELETE_OBJECT = 'DELETE_OBJECT',
}

type ChangeTitleAction = {
    type: EditorActions.CHANGE_TITLE,
    payload: {
        newTitle: string,
    },
}

type ChangeObjectPosition = {
    type: EditorActions.CHANGE_OBJECT_POSITION,
    payload: {
        objectId: string,
        position: Position,
    },
}

type ChangeObjectSize = {
    type: EditorActions.CHANGE_OBJECT_SIZE,
    payload: {
        objectId: string,
        size: Size,
    },
}

type ChangeObjectBackgroundColor = {
    type: EditorActions.CHANGE_OBJECT_BACKGROUND_COLOR,
    payload: {
        objectId: string,
        backgroundColor: Color,
    },
}

type ChangeObjectBorderColor = {
    type: EditorActions.CHANGE_OBJECT_BORDER_COLOR,
    payload: {
        objectId: string,
        borderColor: Color,
    },
}

type ChangeText = {
    type: EditorActions.CHANGE_TEXT,
    payload: {
        objectId: string,
        text: string,
    },
}

type ChangeTextFontStyles = {
    type: EditorActions.CHANGE_TEXT_FONT_STYLES,
    payload: {
        objectId: string,
        fontStyles: FontStyles,
    },
}

type ChangeCurrentSlideId = {
    type: EditorActions.CHANGE_CURRENT_SLIDE_ID,
    payload: {
        slideId: string,
    },
}

type ChangeSelectedObject = {
    type: EditorActions.CHANGE_SELECTED_OBJECT_ID,
    payload: {
        objectId: string,
    },
}

type InsertImage = {
    type: EditorActions.INSERT_IMAGE,
    payload: {
        data: string,
    },
}

type InsertRectangle = {
    type: EditorActions.INSERT_RECTANGLE,
}

type InsertTriangle = {
    type: EditorActions.INSERT_TRIANGLE,
}

type InsertEllipse = {
    type: EditorActions.INSERT_ELLIPSE,
}

type InsertText = {
    type: EditorActions.INSERT_TEXT,
}

type ChangeImageData = {
    type: EditorActions.CHANGE_IMAGE_DATA,
    payload: {
        objectId: string,
        data: string,
    },
}

type DeleteObject = {
    type: EditorActions.DELETE_OBJECT,
    payload: {
        objectId: string,
    },
}

type Action =
    ChangeTitleAction |
    ChangeObjectPosition |
    ChangeObjectSize |
    ChangeObjectBackgroundColor |
    ChangeObjectBorderColor |
    ChangeTextFontStyles |
    ChangeText |
    ChangeCurrentSlideId |
    ChangeSelectedObject |
    InsertImage |
    ChangeImageData |
    InsertRectangle |
    InsertTriangle |
    InsertEllipse |
    InsertText |
    DeleteObject

export {
    EditorActions,
    type Action,
}