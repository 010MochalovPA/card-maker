import React, { useContext } from 'react'
import { Editor, SelectedType, Slide, SlideObjectType, TextObjectType } from '../types'
import generateUUID from '../common/generateUUID'

export interface EditorContext {
  getEditor(): Editor
  getTitle(): string
  getSlideById(id: string): Slide
  getSlides(): Slide[]
  setEditor(editor: Editor): void
  getSelectedObjects(): string[]
  setSelectedObject(ids: string[]): void
  createTextObject(slideId: string): void
  setCurrentSlide(slideId: string): void
  getCurrentSlide(): string
}

export const EditorContext = React.createContext<{
  editor: Editor
  setEditor: React.Dispatch<React.SetStateAction<Editor>>
}>({ editor: {} as Editor, setEditor: () => {} })

export const useEditorContext = (): EditorContext => {
  const { editor, setEditor } = useContext(EditorContext)

  return {
    getEditor: (): Editor => {
      return editor
    },
    getTitle: (): string => {
      return editor.document.title
    },
    getSlideById: (id: string): Slide => {
      return editor.document.slideList.find((slide) => slide.id === id) ?? editor.document.slideList[0]
    },
    getSlides: (): Slide[] => {
      return editor.document.slideList
    },
    setEditor: (newEditor: Editor) => {
      setEditor(newEditor)
    },
    getSelectedObjects: () => {
      const isSelectedObjects = editor.selected.selectedType === SelectedType.OBJECT
      return isSelectedObjects ? editor.selected.selectedList : []
    },
    setSelectedObject: (ids) => {
      setEditor({ ...editor, selected: { selectedType: SelectedType.OBJECT, selectedList: ids } })
    },
    setCurrentSlide: (slideId) => {
      setEditor({ ...editor, currentSlide: slideId })
    },
    getCurrentSlide: (): string => {
      return editor.currentSlide || editor.document.slideList[0].id
    },
    createTextObject: (slideId: string) => {
      const text: TextObjectType = {
        id: generateUUID(),
        size: {
          width: 100,
          height: 20,
        },
        position: {
          left: 50,
          top: 50,
        },
        angle: 0,
        type: SlideObjectType.TEXT,
        style: {
          fontFamily: 'Arial',
          fontSize: 16,
          bold: false,
          cursive: false,
          fontColor: {
            r: 0,
            g: 0,
            b: 0,
            a: 1,
          },
        },
        text: 'Text',
        borderColor: {
          r: 0,
          g: 0,
          b: 0,
          a: 0,
        },
        backgroundColor: {
          r: 255,
          g: 255,
          b: 255,
          a: 1,
        },
      }

      const newObjects = editor.document.slideList.map((slide) => {
        if (slide.id === slideId) {
          return { ...slide, objects: [...slide.objects, text] }
        }
        return slide
      })

      console.log(newObjects)

      const newEditor = {
        history: editor.history,
        currentSlide: editor.currentSlide,
        selected: editor.selected,
        document: {
          title: editor.document.title,
          slideList: [...newObjects],
        },
      }

      console.log(newEditor)
      setEditor(newEditor)

    },
  }
}