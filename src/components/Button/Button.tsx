import { ComponentType } from 'react'
import styles from './Button.css'

type ButtonProps = {
  icon: ComponentType
  text: string
  onClick?: () => void
}

const Button = ({ icon: IconComponent, text, onClick }: ButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {IconComponent && <IconComponent />}
      {text}
    </button>
  )
}

export default Button
