import TitleInput from '../TitleInput/TitleInput'
import styles from './PresentationTitle.css'

type PresentationTitleProps = {
  title: string
  setTitle: (title: string) => void
}

const PresentationTitle = ({ title, setTitle }: PresentationTitleProps) => (
  <div className={styles.presentationTitle}>
    <TitleInput text={title} setText={setTitle} />
  </div>
)

export default PresentationTitle
