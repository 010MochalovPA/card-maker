import { Color, FontStyles, Position, Size } from '../types'
import {EditorActions} from './actions'

function createChangeTitleAction(newTitle: string) {
	return {
		type: EditorActions.CHANGE_TITLE,
		payload: {
			newTitle,
		},
	}
}

function createChangeObjectPositionAction(objectId: string, position: Position) {
	return {
		type: EditorActions.CHANGE_OBJECT_POSITION,
		payload: {
			objectId,
            position,
		},
	}
}

function createChangeObjectSizeAction(objectId: string, size: Size) {
	return {
		type: EditorActions.CHANGE_OBJECT_SIZE,
		payload: {
			objectId,
            size,
		},
	}
}

function createChangeObjectBackgroundColorAction(objectId: string, backgroundColor: Color) {
	return {
		type: EditorActions.CHANGE_OBJECT_BACKGROUND_COLOR,
		payload: {
			objectId,
            backgroundColor,
		},
	}
}

function createChangeObjectBorderColorAction(objectId: string, borderColor: Color) {
	return {
		type: EditorActions.CHANGE_OBJECT_BORDER_COLOR,
		payload: {
			objectId,
            borderColor,
		},
	}
}

function createChangeTextFontStylesAction(objectId: string, fontStyles: FontStyles) {
	return {
		type: EditorActions.CHANGE_TEXT_FONT_STYLES,
		payload: {
			objectId,
            fontStyles,
		},
	}
}

function createChangeTextAction(objectId: string, text: string) {
	return {
		type: EditorActions.CHANGE_TEXT,
		payload: {
			objectId,
            text,
		},
	}
}

function createChangeCurrentSlideIdAction(slideId: string) {
	return {
		type: EditorActions.CHANGE_CURRENT_SLIDE_ID,
		payload: {
			slideId,
		},
	}
}

function createChangeSelectedObjectIdAction(objectId: string) {
	return {
		type: EditorActions.CHANGE_SELECTED_OBJECT_ID,
		payload: {
			objectId,
		},
	}
}

export {
	createChangeTitleAction,
    createChangeObjectPositionAction,
    createChangeCurrentSlideIdAction,
    createChangeSelectedObjectIdAction,
    createChangeObjectSizeAction,
    createChangeObjectBackgroundColorAction,
    createChangeObjectBorderColorAction,
	createChangeTextFontStylesAction,
	createChangeTextAction,
}