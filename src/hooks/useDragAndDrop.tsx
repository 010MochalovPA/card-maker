import { RefObject, useEffect } from 'react'
import { Position } from '../types'

const useDragAndDrop = (ref: RefObject<HTMLDivElement>, setPos: (pos: Position) => void, position: Position) => {
  let PosX: number, PosY: number
  useEffect(() => {
    const { top: startPosTop, left: startPosLeft } = position

    const onMouseMove = (e: MouseEvent) => {
      const delta = { x: e.pageX - PosX, y: e.pageY - PosY }
      const newPos = { left: startPosLeft + delta.x, top: startPosTop + delta.y }
      setPos(newPos)
    }

    const onMouseUp = () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
    }

    const onMouseDown = (e: MouseEvent) => {
      PosX = e.pageX
      PosY = e.pageY
      window.addEventListener('mousemove', onMouseMove)
      window.addEventListener('mouseup', onMouseUp)
    }

    ref.current!.addEventListener('mousedown', onMouseDown)

    return () => {
      ref.current!.removeEventListener('mousedown', onMouseDown)
    }
  }, [])
}

export { useDragAndDrop }
