import { RefObject, useEffect } from 'react'
import { Position, Size } from '../types'

enum DndType {
  MOVE,
  TOP_LEFT,
  TOP,
  TOP_RIGHT,
  RIGHT,
  BOTTOM_RIGHT,
  BOTTOM,
  BOTTOM_LEFT,
  LEFT,
}

const getDndType = (x: number, y: number, rect:DOMRect, selected: boolean):DndType => {
  const {top, left, bottom, right} = rect
  const CAPTURE_WIDTH:number = 10

  if (selected) {
    if (y >= top && y <= top + CAPTURE_WIDTH && x >= left && x <= left + CAPTURE_WIDTH) {
      return DndType.TOP_LEFT
    } else if (y >= top && y <= top + CAPTURE_WIDTH && x >= right - CAPTURE_WIDTH && x <= right) {
      return DndType.TOP_RIGHT
    } else if (y >= bottom - CAPTURE_WIDTH && y <= bottom && x >= left && x <= left + CAPTURE_WIDTH) {
      return DndType.BOTTOM_LEFT
    } else if (y >= bottom - CAPTURE_WIDTH && y <= bottom && x >= right - CAPTURE_WIDTH && x <= right) {
      return DndType.BOTTOM_RIGHT
    } else if(y >= top && y <= top + CAPTURE_WIDTH) {
      return DndType.TOP
    } else if(y >= bottom - CAPTURE_WIDTH && y <= bottom) {
      return DndType.BOTTOM
    } else if(x >= left && x <= left + CAPTURE_WIDTH) {
      return DndType.LEFT
    } else if(x >= right - CAPTURE_WIDTH && x <= right) {
      return DndType.RIGHT
    }
  }
  return DndType.MOVE
}

const useDragAndDrop = (
  ref: RefObject<HTMLDivElement>,
  position: Position,
  setPos: (pos: Position) => void,
  selected: boolean,
  setSelected: (sel: boolean) => void,
  wh: Size,
  setWh: (size: Size) => void,
) => {
  let PosX: number, PosY: number
  const delta: {x: number, y: number} = {x: 0, y: 0}
  let dragType: DndType

  useEffect(() => {
    const { top: startPosTop, left: startPosLeft } = position
    const { width: startWidth, height: startHeight } = wh

    const onMouseMove = (e: MouseEvent) => {
      let newPos = { left: startPosLeft, top: startPosTop }
      let newSize = { width: startWidth, height: startHeight}

      delta.x = e.pageX - PosX
      delta.y = e.pageY - PosY

      switch (dragType) {
        case DndType.TOP_LEFT:
          newSize = {width: newSize.width - delta.x, height: newSize.height - delta.y}
          newPos = { left: newPos.left + delta.x, top: newPos.top + delta.y }
          break
        case DndType.TOP:
          newSize.height -= delta.y
          newPos.top += delta.y
          break
        case DndType.TOP_RIGHT:
          newPos.top += delta.y
          newSize = {width: newSize.width + delta.x, height: newSize.height - delta.y}
          break
        case DndType.RIGHT:
          newSize.width += delta.x
          break
        case DndType.BOTTOM_RIGHT:
          newSize = {width: newSize.width + delta.x, height: newSize.height + delta.y}
          break
        case DndType.BOTTOM:
          newSize.height += delta.y
          break
        case DndType.BOTTOM_LEFT:
          newSize = {width: newSize.width - delta.x, height: newSize.height + delta.y}
          newPos.left += delta.x
          break
        case DndType.LEFT:
          newSize.width -= delta.x
          newPos.left += delta.x
          break
        case DndType.MOVE:
          newPos = { left: newPos.left + delta.x, top: newPos.top + delta.y }
      }

      setPos(newPos)
      setWh(newSize)
    }

    const onMouseUp = () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
      if (ref.current) {
        ref.current.style.opacity = 'inherit'
        if (delta.x || delta.y) {
          setSelected(!selected)
        }
      }
    }

    const onMouseDown = (e: MouseEvent) => {
      PosX = e.pageX
      PosY = e.pageY
      window.addEventListener('mousemove', onMouseMove)
      window.addEventListener('mouseup', onMouseUp)
      if (ref.current) {
        ref.current.style.opacity = '.5'
        dragType = getDndType(PosX, PosY, ref.current.getBoundingClientRect(), selected)
      }
    }

    ref.current!.addEventListener('mousedown', onMouseDown)

    return () => {
      ref.current && ref.current.removeEventListener('mousedown', onMouseDown)
    }
  })
}

export { useDragAndDrop }
