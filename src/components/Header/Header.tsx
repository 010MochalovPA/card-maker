import FileIcon24dp from '../../icons/FileIcon24dp'
import LoadIcon24dp from '../../icons/LoadIcon24dp'
import SaveIcon24dp from '../../icons/SaveIcon24dp'
import IconButton from '../IconButton/IconButton'
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
    <IconButton icon={SaveIcon24dp} onClick={() => console.log('save')} />
    <IconButton icon={LoadIcon24dp} onClick={() => console.log('load')} />
    <PresentationTitle title={title} setTitle={setTitle} />
    <div className={styles.spacer}></div>
    <IconButton icon={FileIcon24dp} onClick={() => console.log('file')} />
  </div>
)

export default Header
