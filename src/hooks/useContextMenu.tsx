import { RefObject, useEffect, useState } from 'react'
import { ContextMenuItem } from '../components/ContextMenu/ContextMenu'
import { Position } from '../types'
import { useAppActions } from '../redux/hooks'

enum ContextMenuType {
    SLIDE,
    OBJECT,
}

const root = document.getElementById('root') as Element

const useContextMenu = (id: string, ref: RefObject<HTMLDivElement>, type: ContextMenuType): { contextMenuPosition: Position, isShowContextMenu: boolean, items: ContextMenuItem[], onClose: () => void } => {
    const [contextMenuPosition, setContextMenuPosition] = useState<Position>({ top: 0, left: 0 })
    const [isShowContextMenu, setShowContextMenu] = useState(false)

    const {
        createChangeOrderObjectsAction,
        createDeleteObjectAction,
        createMoveDownObjectAction,
        createMoveUpObjectAction,
        createChangeSelectedObjectIdAction
    } = useAppActions()

    const objectMenuItems: ContextMenuItem[] = [
        {
            text: 'Переместить вверх',
            handler: () => {
                createMoveUpObjectAction(id)
                setShowContextMenu(false)
            }
        },
        {
            text: 'Переместить выше',
            handler: () => {
                createChangeOrderObjectsAction(id, 1)
                setShowContextMenu(false)
            }
        },
        {
            text: 'Переместить ниже',
            handler: () => {
                createChangeOrderObjectsAction(id, -1)
                setShowContextMenu(false)
            }
        },
        {
            text: 'Переместить вниз',
            handler: () => {
                createMoveDownObjectAction(id)
                setShowContextMenu(false) 
            }
        },
        {
            text: 'Удалить',
            handler: () => {
                createDeleteObjectAction(id)
                setShowContextMenu(false)
            }
        },
    ]

    const handleContextMenu = (e: Event) => {
        createChangeSelectedObjectIdAction(id)
        e.preventDefault()
        setContextMenuPosition({ top: (e as MouseEvent).pageY, left: (e as MouseEvent).pageX })
        setShowContextMenu(true)
    }

    useEffect(() => {
        if (ref.current) {
            ref.current?.addEventListener('contextmenu', handleContextMenu)
        }
        return () => {
            ref.current?.removeEventListener('contextmenu', handleContextMenu)
        }

    })

    switch (type) {
        case ContextMenuType.OBJECT:
            return { contextMenuPosition, isShowContextMenu, items: objectMenuItems, onClose: () => {setShowContextMenu(false)} }
        default:
            return { contextMenuPosition, isShowContextMenu, items: objectMenuItems, onClose: () => {setShowContextMenu(false)} }
    }
}

export { useContextMenu, ContextMenuType }