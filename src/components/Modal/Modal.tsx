import { createPortal } from 'react-dom'
import styles from './Modal.css'
import CloseWindow from '../../icons/CloseWindow'

type ModalProps = {
  children: string | JSX.Element | JSX.Element[]
  onClose: () => void
}

const layer = document.getElementById('layer') as Element

const Modal = ({ children, onClose }: ModalProps) => {
  return createPortal(
    <>
      <div className={styles.overlay} onClick={() => onClose()}/>
      <div className={styles.modal}>
        <button onClick={() => onClose()} className={styles.close} title='Закрыть'>
          <CloseWindow />
        </button>
        {children}
      </div>
    </>,
    layer,
  )
}

export { Modal }
