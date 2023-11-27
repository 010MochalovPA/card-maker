import { useState } from 'react'
import TitleInput from '../TitleInput/TitleInput'
import styles from './PresentationTitle.css'
import { useEditorContext } from '../../context/editorContext'

const PresentationTitle = () => {
  const editor = useEditorContext()
  const [title, setTitle] = useState(editor.getTitle())

  return (
    <div className={styles.presentationTitle}>
      <TitleInput text={title} setText={setTitle} />
    </div>
  )
}

export default PresentationTitle
