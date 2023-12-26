import { useState } from 'react'
import { Color, TextStyle } from '../../types'
import ColorPicker from '../ColorPicker/ColorPicker'
import styles from './TextOptions.css'
import { ColorResult } from 'react-color'

type FontElement = {
  name: string,
  fontFamily: string
}

const fontList: FontElement[] = [
  {
    name: 'Roboto',
    fontFamily: 'Roboto'
  },
  {
    name: 'Arial',
    fontFamily: 'Arial, Helvetica, sans-serif'
  },
  {
    name: 'Arial Black',
    fontFamily: '"Arial Black", Gadget, sans-serif'
  },
  {
    name: 'Comic Sans MS',
    fontFamily: 'Comic Sans MS", cursive'
  },
  {
    name: 'Georgia',
    fontFamily: 'Georgia, serif'
  },
  {
    name: 'Impact',
    fontFamily: 'Impact,Charcoal, sans-serif'
  },
  {
    name: 'Lucida Console',
    fontFamily: '"Lucida Console", Monaco, monospace'
  },
] // TODO: https://habr.com/ru/articles/68189/

type TextOptionsProps = TextStyle & {
  text: string
}

const TextOptions = ({fontFamily, fontSize, bold, cursive, fontColor, text}: TextOptionsProps) => {
  
  const [color, setColor] = useState<Color>(fontColor);

  const handleColor = (color: ColorResult) => {
    setColor({ ...color.rgb } as Color);
  };
  return (
    <>
      <div className={styles.title}>
        Найстройки формата текста
      </div>
      <div className={styles.textOptions}>
        <span>Текст:</span><input className={styles.input} type="text" value={text}/>
        <span>Цвет текста:</span><ColorPicker color={color} onChange={handleColor}/>
        <span>Шрифт:</span>
        <select className={styles.input}>
          {fontList.map((font, index) => (<option key={index} value={index}>{font.name}</option>))}
        </select>
        <span>Размер шрифта:</span><input className={styles.input} type="number" value={fontSize}/>
        <span>Жирный:</span><input className={styles.input} type="checkbox" checked={bold} />
        <span>Курсив:</span><input className={styles.input} type="checkbox" checked={cursive}/>
      </div>
    </>
  )
}

export default TextOptions
