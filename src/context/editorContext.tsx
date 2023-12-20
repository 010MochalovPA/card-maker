import React, { useContext } from 'react'
import { Editor, SelectedType, Slide } from '../types'

export interface EditorContext {
  getEditor(): Editor
  getTitle(): string
  getSlideById(id: string): Slide
  getSlides(): Slide[]
  setEditor(editor: Editor): void
  getSelectedSlides(): string[]
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
    getSelectedSlides: () => {
      const isSelectedObjects = editor.selected.selectedType === SelectedType.OBJECT

      if (!isSelectedObjects)
      {
        return []
      }

      return editor.selected.selectedList;
    }
  }
}
