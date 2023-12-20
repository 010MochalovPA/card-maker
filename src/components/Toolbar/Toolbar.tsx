import { ComponentType } from 'react'
import styles from './Toolbar.css'
import RectangleIcon20dp from '../../icons/RectangleIcon20dp'
import TriangleIcon20dp from '../../icons/TriangleIcon20dp'
import ElipseIcon20dp from '../../icons/ElipseIcon20dp'
import ToolbarItem from '../ToolbarItem/ToolbarItem'
import TextIcon20dp from '../../icons/TextIcon20dp'
import { useEditorContext } from '../../context/editorContext'

export type OptionItemType = {
  icon: ComponentType
  onClick: () => void
  tooltip: string
}

const Toolbar = () => {
  const editor = useEditorContext()
  const options: OptionItemType[] = [
    {
      icon: RectangleIcon20dp,
      onClick: () => {
        console.log('create rectangle')
      },
      tooltip: 'Rectangle',
    },
    {
      icon: TriangleIcon20dp,
      onClick: () => {
        console.log('create triangle')
      },
      tooltip: 'Triangle',
    },
    {
      icon: ElipseIcon20dp,
      onClick: () => {
        console.log('create elipse')
      },
      tooltip: 'Elipse',
    },
    {
      icon: TextIcon20dp,
      onClick: () => {
        editor.createTextObject('c932d26bcf6946618042e9852163c642')
      },
      tooltip: 'Text',
    },
  ]
  return (
    <div className={styles.toolbar}>
      {options.map((option, index) => (
        <ToolbarItem key={index} {...option} />
      ))}
    </div>
  )
}

export default Toolbar
