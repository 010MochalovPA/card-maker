import { ReactNode } from 'react'
import styles from './Button.css'

export enum ButtonType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

type ButtonProps = {
  type?: ButtonType
  icon?: ReactNode
  text: string
  onClick: () => void
}

const Button = ({ type = ButtonType.PRIMARY, icon, text, onClick }: ButtonProps) => {
  return (
    <div
      className={`${styles.button} ${text ? styles.text : ''} ${
        type === ButtonType.PRIMARY ? styles.primary : styles.secondary
      }`}
      onClick={onClick}
    >
      {icon}
      {text}
    </div>
  )
}

export default Button
