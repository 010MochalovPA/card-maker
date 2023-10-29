import { Color } from '../types'

const useColorBackground = (color: Color) => {
  return `rgba(${color.r},${color.g},${color.b}, ${color.a})`
}

export default useColorBackground
