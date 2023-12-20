
import { Position, Size } from '../types'

const getDNDFunctions = (setPos: (position: Position) => void, setNewSize: (size: Size) => void) => {
 
  const moveFn = (e: MouseEvent, deltaX: number, deltaY: number, startPosLeft: number, startPosTop: number, posX: number, posY: number, startWidth: number, startHeight: number) => {
    let newPos = { left: startPosLeft, top: startPosTop }
    let objectSize = { width: startWidth, height: startHeight}
    deltaX = e.pageX - posX
    deltaY = e.pageY - posY

    newPos = { left: newPos.left + deltaX, top: newPos.top + deltaY }

    setPos(newPos)
    setNewSize(objectSize)
  }

  const leftResizeFn = (e: MouseEvent, deltaX: number, deltaY: number, startPosLeft: number, startPosTop: number, posX: number, posY: number, startWidth: number, startHeight: number) => {
    let newPos = { left: startPosLeft, top: startPosTop }
    let objectSize = { width: startWidth, height: startHeight}
    deltaX = e.pageX - posX

    newPos = { left: newPos.left + deltaX, top: newPos.top }
    objectSize.width -= deltaX
    
    setNewSize(objectSize)
    setPos(newPos)
  }

  const leftTopResizeFn = (e: MouseEvent, deltaX: number, deltaY: number, startPosLeft: number, startPosTop: number, posX: number, posY: number, startWidth: number, startHeight: number) => {
    let newPos = { left: startPosLeft, top: startPosTop }
    let objectSize = { width: startWidth, height: startHeight}
    deltaX = e.pageX - posX
    deltaY = e.pageY - posY

    objectSize = {width: objectSize.width - deltaX, height: objectSize.height - deltaY}
    newPos = { left: newPos.left + deltaX, top: newPos.top + deltaY }

    setNewSize(objectSize)
    setPos(newPos)
  }

  const topResizeFn = (e: MouseEvent, deltaX: number, deltaY: number, startPosLeft: number, startPosTop: number, posX: number, posY: number, startWidth: number, startHeight: number) => {
    let newPos = { left: startPosLeft, top: startPosTop }
    let objectSize = { width: startWidth, height: startHeight}
    deltaY = e.pageY - posY

    objectSize.height -=deltaY
    newPos = { left: newPos.left, top: newPos.top + deltaY }

    setNewSize(objectSize)
    setPos(newPos)
  }

  const rightTopResizeFn = (e: MouseEvent, deltaX: number, deltaY: number, startPosLeft: number, startPosTop: number, posX: number, posY: number, startWidth: number, startHeight: number) => {
    let newPos = { left: startPosLeft, top: startPosTop }
    let objectSize = { width: startWidth, height: startHeight}
    deltaX = e.pageX - posX
    deltaY = e.pageY - posY

    newPos.top += deltaY
    objectSize = {width: objectSize.width + deltaX, height: objectSize.height - deltaY}

    setNewSize(objectSize)
    setPos(newPos)
  }

  const rightResizeFn = (e: MouseEvent, deltaX: number, deltaY: number, startPosLeft: number, startPosTop: number, posX: number, posY: number, startWidth: number, startHeight: number) => {
    let newPos = { left: startPosLeft, top: startPosTop }
    let objectSize = { width: startWidth, height: startHeight}
    deltaX = e.pageX - posX
    deltaY = e.pageY - posY

    objectSize.width += deltaX

    setNewSize(objectSize)
    setPos(newPos)
  }

  const rightBottomResizeFn = (e: MouseEvent, deltaX: number, deltaY: number, startPosLeft: number, startPosTop: number, posX: number, posY: number, startWidth: number, startHeight: number) => {
    let newPos = { left: startPosLeft, top: startPosTop }
    let objectSize = { width: startWidth, height: startHeight}
    deltaX = e.pageX - posX
    deltaY = e.pageY - posY

    objectSize = {width: objectSize.width + deltaX, height: objectSize.height + deltaY}

    setNewSize(objectSize)
    setPos(newPos)
  }

  const bottomResizeFn = (e: MouseEvent, deltaX: number, deltaY: number, startPosLeft: number, startPosTop: number, posX: number, posY: number, startWidth: number, startHeight: number) => {
    let newPos = { left: startPosLeft, top: startPosTop }
    let objectSize = { width: startWidth, height: startHeight}
    deltaX = e.pageX - posX
    deltaY = e.pageY - posY

    objectSize.height += deltaY

    setNewSize(objectSize)
    setPos(newPos)
  }

  const leftBottomResizeFn = (e: MouseEvent, deltaX: number, deltaY: number, startPosLeft: number, startPosTop: number, posX: number, posY: number, startWidth: number, startHeight: number) => {
    let newPos = { left: startPosLeft, top: startPosTop }
    let objectSize = { width: startWidth, height: startHeight}
    deltaX = e.pageX - posX
    deltaY = e.pageY - posY

    objectSize = {width: objectSize.width - deltaX, height: objectSize.height + deltaY}
    newPos.left += deltaX

    setNewSize(objectSize)
    setPos(newPos)
  }

  return [moveFn, leftResizeFn, leftTopResizeFn, topResizeFn, rightTopResizeFn, rightResizeFn, rightBottomResizeFn, bottomResizeFn, leftBottomResizeFn]
}

export default getDNDFunctions
