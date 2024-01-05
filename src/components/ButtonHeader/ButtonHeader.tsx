import { ComponentType } from 'react'
import styles from './ButtonHeader.css'

type ButtonProps = {
  icon: ComponentType
  text: string
  onClick?: () => void
}

const ButtonHeader = ({ icon: IconComponent, text, onClick }: ButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick} title={text}>
      {IconComponent && <IconComponent />}
      {text}
    </button>
  )
}

export default ButtonHeader
