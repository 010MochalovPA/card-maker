import { ComponentType } from 'react'
import styles from './IconButton.css'

type IconButtonProps = {
  icon: ComponentType
  onClick?: () => void
}

const IconButton = ({ icon: IconComponent, onClick }: IconButtonProps) => {
  return (
    <button className={styles.iconButton} onClick={onClick}>
      {IconComponent && <IconComponent />}
    </button>
  )
}

export default IconButton
