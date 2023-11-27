import React, {useContext} from 'react'
import { Editor, Slide } from '../types'

export interface EditorContext {
	getEditor(): Editor
    getTitle(): string
    getSlideById(id: string): Slide
    getSlides(): Slide[]
}

export const EditorContext = React.createContext<Editor>({} as Editor)

export const useEditorContext = (): EditorContext => {
    const editor = useContext(EditorContext)

    return {
        getEditor: (): Editor => { return editor },
        getTitle: (): string => { return editor.document.title },
        getSlideById: (id: string): Slide => {
            return editor.document.slideList.find(slide => slide.id === id) ?? editor.document.slideList[0]
        },
        getSlides: (): Slide[] => { return editor.document.slideList }
    }
}