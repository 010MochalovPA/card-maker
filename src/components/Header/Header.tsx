import { ChangeEvent, useRef, useState } from 'react'
import { useEditorContext } from '../../context/editorContext'
import FileIcon24dp from '../../icons/FileIcon24dp'
import LoadIcon24dp from '../../icons/LoadIcon24dp'
import SaveIcon24dp from '../../icons/SaveIcon24dp'
import Button from '../Button/Button'
import Logo from '../Logo/Logo'
import PresentationTitle from '../PresentationTitle/PresentationTitle'
import styles from './Header.css'


const Header = () => {
  const aRef = useRef<HTMLAnchorElement>(null)
  const editor = useEditorContext()
  const [title, setTitle] = useState(editor.getTitle())
  

  const text = JSON.stringify(editor.getEditor());
  const file = new Blob([text], { type: "text/plain" });

  return (
    <div className={styles.header}>
      <Logo />
      <PresentationTitle title={title} setTitle={setTitle} />
      <div className={styles.spacer}></div>
      <a ref={aRef} className={styles.hidden} download={`${title}.json`} href={URL.createObjectURL(file)}>Save</a>
      <Button icon={SaveIcon24dp} text={'Сохранить'} onClick={() => aRef.current?.click()}/>
      <Button icon={LoadIcon24dp} text={'Загрузить'} onClick={() => console.log('load')} />
      <Button icon={FileIcon24dp} text={'Экспорт в PDF'} onClick={() => console.log('file')} />
    </div>
  )
}

export default Header
