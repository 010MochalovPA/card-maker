import { RefObject, useEffect, useState } from 'react'
import { ContextMenuItem } from '../components/ContextMenu/ContextMenu'
import { Position } from '../types'
import { useAppActions } from '../redux/hooks'

enum ContextMenuType {
    SLIDE,
    OBJECT,
}

const useContextMenu = (id: string, ref: RefObject<HTMLDivElement>, type: ContextMenuType): { contextMenuPosition: Position, isShowContextMenu: boolean, items: ContextMenuItem[] } => {
    const [contextMenuPosition, setContextMenuPosition] = useState<Position>({ top: 0, left: 0 })
    const [isShowContextMenu, setShowContextMenu] = useState(false)

    const {
        createChangeOrderObjectsAction,
        createDeleteObjectAction,
        createMoveDownObjectAction,
        createMoveUpObjectAction,
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
        e.preventDefault()
        setContextMenuPosition({ top: (e as MouseEvent).pageY, left: (e as MouseEvent).pageX })
        setShowContextMenu(true)
    }

    const handleMouseDown = (e: Event) => {
        isShowContextMenu && setShowContextMenu(false)
    }

    useEffect(() => {
        if (ref.current) {
            ref.current?.addEventListener('contextmenu', handleContextMenu)
            document.addEventListener('mousedown', handleMouseDown)
        }
        return () => {
            ref.current?.removeEventListener('contextmenu', handleContextMenu)
            document.removeEventListener('mousedown', handleMouseDown)
        }

    })

    switch (type) {
        case ContextMenuType.OBJECT:
            return { contextMenuPosition, isShowContextMenu, items: objectMenuItems }
        default:
            return { contextMenuPosition, isShowContextMenu, items: objectMenuItems }
    }
}

export { useContextMenu, ContextMenuType }