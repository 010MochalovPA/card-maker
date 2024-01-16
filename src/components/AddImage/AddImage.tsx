import { ChangeEvent, useState } from 'react'
import styles from './AddImage.css'
import { PictureType } from '../../types'
import { convertBase64 } from '../../common/convertBase64'

type AddImageProps = {
  onSave: (url: string, type: PictureType) => void
}

const AddImage = ({ onSave }: AddImageProps) => {
  const [type, setType] = useState<PictureType>(PictureType.URL)
  const [data, setData] = useState<string>('')

  const uploadImage = async (e: ChangeEvent<HTMLInputElement>) => {
    const image = e.target.files?.length ? await convertBase64(e.target.files![0]) : ''
    image && setData(image as string)
  }

  return (
    <div className={styles.addImage}>
      <div className={styles.tabs}>
        {type === PictureType.URL ? (
          <>
            <button className={`${styles.tab} ${styles.tabActive}`}>Ссылка</button>
            <button className={styles.tab} onClick={() => setType(PictureType.BASE64)}>Файл</button>
          </>
        ) : (
          <>
            <button className={styles.tab} onClick={() => setType(PictureType.URL)}>Ссылка</button>
            <button className={`${styles.tab} ${styles.tabActive}`}>Файл</button>
          </>
        )}
      </div>
      <div className={styles.form}>
        {type === PictureType.URL ? (
          <input type="text" value={data} onInput={(e) => setData(e.currentTarget.value)} className={styles.input}/>
        ) : (
          <input type="file" onChange={(e) => uploadImage(e)} className={styles.file}/>
        )}
        <button onClick={() => onSave(data, type)} className={styles.submit}>Добавить</button>
      </div>
    </div>
  )
}

export { AddImage }
