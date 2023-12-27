import { useState } from 'react'
import styles from './AddImage.css'
import { PictureType } from '../../types'
import { checkImgSrc } from '../../common/checkImgSrc'

type AddImageProps = {
    onSave: (url: string) => void
}

const AddImage = ({ onSave }: AddImageProps) => {
    const [type, setType] = useState<PictureType>(PictureType.URL)
    const [url, setUrl] = useState<string>('')
    const [isDone, setDone] = useState<boolean>(false)
    return <div className={styles.addImage}>
        <div>
            <button onClick={() => setType(PictureType.URL)}>URL</button>
            <button onClick={() => setType(PictureType.BASE64)}>base64</button>
        </div>
        {type === PictureType.URL
            ? <div>
                <input type="text" value={url} onInput={(e) => setUrl(e.currentTarget.value)} onChange={(e) => checkImgSrc(e.currentTarget.value, () => setDone(true), () => setDone(false))} />
            </div>
            : <div>BASE64</div>
        }
        <button disabled={!isDone} onClick={() => {
            onSave(url)
        }}>Добавить</button>
    </div>
}

export {
    AddImage
}