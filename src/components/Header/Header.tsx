import FileExport from '../../icons/FileExport'
import ButtonHeader from '../ButtonHeader/ButtonHeader'
import Logo from '../Logo/Logo'
import PresentationTitle from '../PresentationTitle/PresentationTitle'
import styles from './Header.css'
import { ToolbarFile } from '../ToolbarFile/ToolbarFile'
import { ToolbarHistory } from '../ToolbarHistory/ToolbarHistory'

const Header = () => {

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <ToolbarFile />
      <ToolbarHistory />
      <PresentationTitle />
      <div className={styles.spacer}></div>
      <ButtonHeader icon={FileExport} text={'Экспорт в PDF'} onClick={() => console.log('file export')} />
    </div>
  )
}

export default Header
