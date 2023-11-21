import FileIcon24dp from '../../icons/FileIcon24dp'
import LoadIcon24dp from '../../icons/LoadIcon24dp'
import SaveIcon24dp from '../../icons/SaveIcon24dp'
import Button from '../Button/Button'
import Logo from '../Logo/Logo'
import PresentationTitle from '../PresentationTitle/PresentationTitle'
import styles from './Header.css'

type HeaderProps = {
  title: string
  setTitle: (title: string) => void
}

const Header = ({ title, setTitle }: HeaderProps) => (
  <div className={styles.header}>
    <Logo />
    <PresentationTitle title={title} setTitle={setTitle} />
    <div className={styles.spacer}></div>
    <Button icon={SaveIcon24dp} text={'Сохранить'} onClick={() => console.log('save')} />
    <Button icon={LoadIcon24dp} text={'Загрузить'} onClick={() => console.log('load')} />
    <Button icon={FileIcon24dp} text={'Экспорт в PDF'} onClick={() => console.log('file')} />
  </div>
)

export default Header
