import { Action, EditorActions } from './actions'
import { combineReducers } from 'redux'
import { editor1 } from '../mock'
import {
  Editor,
  PictureObjectType,
  PictureType,
  ShapeObjectType,
  ShapeType,
  Slide,
  SlideBackgroundType,
  SlideObjectType,
  TextObjectType,
} from '../types'
import generateUUID from '../common/generateUUID'

const editorReducer = (state: Editor = editor1, action: Action) => {
  switch (action.type) {
    case EditorActions.CHANGE_TITLE: {
      return { ...state, document: { ...state.document, title: action.payload.newTitle } }
    }

    case EditorActions.CHANGE_OBJECT_POSITION: {
      const currentSlide = state.currentSlide
      const slideList = state.document.slideList

      return {
        ...state,
        document: {
          ...document,
          slideList: slideList.map((slide) => {
            if (slide.id === currentSlide) {
              slide.objects = slide.objects.map((object) => {
                if (object.id === action.payload.objectId) {
                  object.position = action.payload.position
                }

                return object
              })
            }
            return slide
          }),
        },
      }
    }

    case EditorActions.CHANGE_OBJECT_SIZE: {
      const currentSlide = state.currentSlide
      const slideList = state.document.slideList

      return {
        ...state,
        document: {
          ...document,
          slideList: slideList.map((slide) => {
            if (slide.id === currentSlide) {
              slide.objects = slide.objects.map((object) => {
                if (object.id === action.payload.objectId) {
                  object.size = action.payload.size
                }

                return object
              })
            }
            return slide
          }),
        },
      }
    }

    case EditorActions.CHANGE_OBJECT_BACKGROUND_COLOR: {
      const currentSlide = state.currentSlide
      const slideList = state.document.slideList

      return {
        ...state,
        document: {
          ...document,
          slideList: slideList.map((slide) => {
            if (slide.id === currentSlide) {
              slide.objects = slide.objects.map((object) => {
                if (object.id === action.payload.objectId) {
                  object.backgroundColor = action.payload.backgroundColor
                }

                return object
              })
            }
            return slide
          }),
        },
      }
    }

    case EditorActions.CHANGE_OBJECT_BORDER_COLOR: {
      const currentSlide = state.currentSlide
      const slideList = state.document.slideList

      return {
        ...state,
        document: {
          ...document,
          slideList: slideList.map((slide) => {
            if (slide.id === currentSlide) {
              slide.objects = slide.objects.map((object) => {
                if (object.id === action.payload.objectId) {
                  object.borderColor = action.payload.borderColor
                }

                return object
              })
            }
            return slide
          }),
        },
      }
    }

    case EditorActions.CHANGE_TEXT_FONT_STYLES: {
      const currentSlide = state.currentSlide
      const slideList = state.document.slideList

      return {
        ...state,
        document: {
          ...document,
          slideList: slideList.map((slide) => {
            if (slide.id === currentSlide) {
              slide.objects = slide.objects.map((object) => {
                if (object.id === action.payload.objectId && object.type === SlideObjectType.TEXT) {
                  object.style = action.payload.fontStyles
                }

                return object
              })
            }
            return slide
          }),
        },
      }
    }

    case EditorActions.CHANGE_IMAGE_DATA: {
      const currentSlide = state.currentSlide
      const slideList = state.document.slideList

      return {
        ...state,
        document: {
          ...document,
          slideList: slideList.map((slide) => {
            if (slide.id === currentSlide) {
              slide.objects = slide.objects.map((object) => {
                if (object.id === action.payload.objectId && object.type === SlideObjectType.PICTURE) {
                  object.data = action.payload.data
                }

                return object
              })
            }
            return slide
          }),
        },
      }
    }

    case EditorActions.INSERT_IMAGE: {
      const currentSlide = state.currentSlide
      const slideList = state.document.slideList

      return {
        ...state,
        document: {
          ...document,
          slideList: slideList.map((slide) => {
            if (slide.id === currentSlide) {
              const newImage: PictureObjectType = {
                id: generateUUID(),
                size: { width: 100, height: 100 },
                position: { top: 0, left: 0 },
                angle: 0,
                backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
                borderColor: { r: 255, g: 255, b: 255, a: 0 },
                type: SlideObjectType.PICTURE,
                pictureType: PictureType.URL,
                data: action.payload.data,
              }
              slide.objects = [...slide.objects, newImage]
            }
            return slide
          }),
        },
      }
    }

    case EditorActions.INSERT_RECTANGLE: {
      const currentSlide = state.currentSlide
      const slideList = state.document.slideList

      return {
        ...state,
        document: {
          ...document,
          slideList: slideList.map((slide) => {
            if (slide.id === currentSlide) {
              const rect: ShapeObjectType = {
                id: generateUUID(),
                size: { width: 100, height: 100 },
                position: { top: 0, left: 0 },
                angle: 0,
                backgroundColor: { r: 255, g: 255, b: 255, a: 1 },
                borderColor: { r: 0, g: 0, b: 0, a: 1 },
                type: SlideObjectType.SHAPE,
                shapeType: ShapeType.RECTANGLE,
              }
              slide.objects = [...slide.objects, rect]
            }
            return slide
          }),
        },
      }
    }

    case EditorActions.INSERT_TRIANGLE: {
      const currentSlide = state.currentSlide
      const slideList = state.document.slideList

      return {
        ...state,
        document: {
          ...document,
          slideList: slideList.map((slide) => {
            if (slide.id === currentSlide) {
              const rect: ShapeObjectType = {
                id: generateUUID(),
                size: { width: 100, height: 100 },
                position: { top: 0, left: 0 },
                angle: 0,
                backgroundColor: { r: 255, g: 255, b: 255, a: 1 },
                borderColor: { r: 0, g: 0, b: 0, a: 1 },
                type: SlideObjectType.SHAPE,
                shapeType: ShapeType.TRIANGLE,
              }
              slide.objects = [...slide.objects, rect]
            }
            return slide
          }),
        },
      }
    }

    case EditorActions.INSERT_ELLIPSE: {
      const currentSlide = state.currentSlide
      const slideList = state.document.slideList

      return {
        ...state,
        document: {
          ...document,
          slideList: slideList.map((slide) => {
            if (slide.id === currentSlide) {
              const rect: ShapeObjectType = {
                id: generateUUID(),
                size: { width: 100, height: 100 },
                position: { top: 0, left: 0 },
                angle: 0,
                backgroundColor: { r: 255, g: 255, b: 255, a: 1 },
                borderColor: { r: 0, g: 0, b: 0, a: 1 },
                type: SlideObjectType.SHAPE,
                shapeType: ShapeType.ELLIPSE,
              }
              slide.objects = [...slide.objects, rect]
            }
            return slide
          }),
        },
      }
    }

    case EditorActions.INSERT_TEXT: {
      const currentSlide = state.currentSlide
      const slideList = state.document.slideList

      return {
        ...state,
        document: {
          ...document,
          slideList: slideList.map((slide) => {
            if (slide.id === currentSlide) {
              const textObject: TextObjectType = {
                id: generateUUID(),
                size: { width: 100, height: 100 },
                position: { top: 0, left: 0 },
                angle: 0,
                backgroundColor: { r: 255, g: 255, b: 255, a: 1 },
                borderColor: { r: 0, g: 0, b: 0, a: 1 },
                type: SlideObjectType.TEXT,
                style: {
                  fontFamily: 'Arial',
                  fontSize: 18,
                  bold: false,
                  cursive: false,
                  fontColor: { r: 0, g: 0, b: 0, a: 1 },
                },
                text: 'Text',
              }
              slide.objects = [...slide.objects, textObject]
            }
            return slide
          }),
        },
      }
    }

    case EditorActions.CHANGE_TEXT: {
      const currentSlide = state.currentSlide
      const slideList = state.document.slideList

      return {
        ...state,
        document: {
          ...document,
          slideList: slideList.map((slide) => {
            if (slide.id === currentSlide) {
              slide.objects = slide.objects.map((object) => {
                if (object.id === action.payload.objectId && object.type === SlideObjectType.TEXT) {
                  object.text = action.payload.text
                }

                return object
              })
            }
            return slide
          }),
        },
      }
    }

    case EditorActions.DELETE_OBJECT: {
      const currentSlide = state.currentSlide
      const slideList = state.document.slideList

      return {
        ...state,
        document: {
          ...document,
          slideList: slideList.map((slide) => {
            if (slide.id === currentSlide) {
              slide.objects = slide.objects.filter((object) => object.id !== action.payload.objectId)
            }
            return slide
          }),
        },
      }
    }

    case EditorActions.ADD_SLIDE: {
      const slideList = state.document.slideList

      const newSlide: Slide = {
        id: generateUUID(),
        background: {
          type: SlideBackgroundType.SOLID_COLOR,
          color: { r: 255, g: 255, b: 255, a: 1 },
        },
        objects: [],
      }

      return {
        ...state,
        document: {
          ...document,
          slideList: [...slideList, newSlide],
        },
      }
    }

    case EditorActions.MOVE_DOWN_SLIDE: {
      const slideList = state.document.slideList

      const newIndex = slideList.findIndex((slide) => slide.id === state.currentSlide) + 1

      const MoveSlide = slideList.find((slide) => slide.id === state.currentSlide)

      console.log(newIndex)

      if (newIndex <= 0 || newIndex >= slideList.length || !MoveSlide) {
        return state
      }

      const newSlideList = slideList.filter((slide) => slide.id !== state.currentSlide)

      newSlideList.splice(newIndex, 0, { ...MoveSlide })
      return {
        ...state,
        document: {
          ...document,
          slideList: [...newSlideList],
        },
      }
    }

    case EditorActions.MOVE_UP_SLIDE: {
      const slideList = state.document.slideList

      const newIndex = slideList.findIndex((slide) => slide.id === state.currentSlide) - 1

      const MoveSlide = slideList.find((slide) => slide.id === state.currentSlide)

      console.log(newIndex)

      if (newIndex < 0 || newIndex >= slideList.length || !MoveSlide) {
        return state
      }

      const newSlideList = slideList.filter((slide) => slide.id !== state.currentSlide)

      newSlideList.splice(newIndex, 0, { ...MoveSlide })
      return {
        ...state,
        document: {
          ...document,
          slideList: [...newSlideList],
        },
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

export { rootReducer }
