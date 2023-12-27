import { Action, EditorActions } from './actions'
import { combineReducers } from 'redux'
import { editor1 } from '../mock'
import { Editor, SlideObjectType } from '../types'

const editorReducer = (state: Editor = editor1, action: Action) => {
    switch (action.type) {
        case EditorActions.CHANGE_TITLE: {
            return { ...state, document: { ...state.document, title: action.payload.newTitle } }
        }

        case EditorActions.CHANGE_OBJECT_POSITION: {
            const currentSlide = state.currentSlide;
            const slideList = state.document.slideList;

            return {
                ...state,
                document: {
                    ...document,
                    slideList: slideList.map(slide => {
                        if (slide.id === currentSlide) {
                            slide.objects = slide.objects.map(object => {
                                if (object.id === action.payload.objectId) {
                                    object.position = action.payload.position
                                }

                                return object
                            })
                        }
                        return slide
                    })
                }
            }
        }

        case EditorActions.CHANGE_OBJECT_SIZE: {
            const currentSlide = state.currentSlide;
            const slideList = state.document.slideList;

            return {
                ...state,
                document: {
                    ...document,
                    slideList: slideList.map(slide => {
                        if (slide.id === currentSlide) {
                            slide.objects = slide.objects.map(object => {
                                if (object.id === action.payload.objectId) {
                                    object.size = action.payload.size
                                }

                                return object
                            })
                        }
                        return slide
                    })
                }
            }
        }

        case EditorActions.CHANGE_OBJECT_BACKGROUND_COLOR: {
            const currentSlide = state.currentSlide;
            const slideList = state.document.slideList;

            return {
                ...state,
                document: {
                    ...document,
                    slideList: slideList.map(slide => {
                        if (slide.id === currentSlide) {
                            slide.objects = slide.objects.map(object => {
                                if (object.id === action.payload.objectId) {
                                    object.backgroundColor = action.payload.backgroundColor
                                }

                                return object
                            })
                        }
                        return slide
                    })
                }
            }
        }

        case EditorActions.CHANGE_OBJECT_BORDER_COLOR: {
            const currentSlide = state.currentSlide;
            const slideList = state.document.slideList;

            return {
                ...state,
                document: {
                    ...document,
                    slideList: slideList.map(slide => {
                        if (slide.id === currentSlide) {
                            slide.objects = slide.objects.map(object => {
                                if (object.id === action.payload.objectId) {
                                    object.borderColor = action.payload.borderColor
                                }

                                return object
                            })
                        }
                        return slide
                    })
                }
            }
        }

        case EditorActions.CHANGE_TEXT_FONT_STYLES: {
            const currentSlide = state.currentSlide;
            const slideList = state.document.slideList;

            return {
                ...state,
                document: {
                    ...document,
                    slideList: slideList.map(slide => {
                        if (slide.id === currentSlide) {
                            slide.objects = slide.objects.map(object => {
                                if (object.id === action.payload.objectId && object.type === SlideObjectType.TEXT) {
                                    object.style = action.payload.fontStyles
                                }

                                return object
                            })
                        }
                        return slide
                    })
                }
            }
        }

        case EditorActions.CHANGE_TEXT: {
            const currentSlide = state.currentSlide;
            const slideList = state.document.slideList;

            return {
                ...state,
                document: {
                    ...document,
                    slideList: slideList.map(slide => {
                        if (slide.id === currentSlide) {
                            slide.objects = slide.objects.map(object => {
                                if (object.id === action.payload.objectId && object.type === SlideObjectType.TEXT) {
                                    object.text = action.payload.text
                                }

                                return object
                            })
                        }
                        return slide
                    })
                }
            }
        }

        case EditorActions.CHANGE_CURRENT_SLIDE_ID: {
            return { ...state, currentSlide: action.payload.slideId }
        }

        case EditorActions.CHANGE_SELECTED_OBJECT_ID: {
           return { ...state, selected: { ...state.selected, selected: action.payload.objectId } }
        }

        default:
            return state
    }
}

const rootReducer = combineReducers({
    editor: editorReducer,
})

export {
    rootReducer,
}