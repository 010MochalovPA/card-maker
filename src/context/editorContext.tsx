import React, {useCallback, useContext, useMemo, useState} from 'react'
import { Editor, Slide } from '../types'

export interface EditorContext {
	getEditor(): Editor
    getTitle(): string
    getSlideById(id: string): Slide
    getSlides(): Slide[]
    setEditor(editor: Editor): void
}

export const EditorContext = React.createContext<{editor: Editor, setEditor: React.Dispatch<React.SetStateAction<Editor>>}>({editor: {} as Editor, setEditor: () => {}})

export const useEditorContext = (): EditorContext => {
    const {editor, setEditor} = useContext(EditorContext)

    return {
        getEditor: (): Editor => { return editor },
        getTitle: (): string => { return editor.document.title },
        getSlideById: (id: string): Slide => {
            return editor.document.slideList.find(slide => slide.id === id) ?? editor.document.slideList[0]
        },
        getSlides: (): Slide[] => { return editor.document.slideList },
        setEditor: (newEditor: Editor) => {
            setEditor(newEditor)
        }
    }
}