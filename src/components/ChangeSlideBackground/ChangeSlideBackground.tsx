import { ChangeEvent, useState } from 'react'
import styles from './ChangeSlideBackground.css'
import { Color, SlideBackgroundType } from '../../types'
import { convertBase64 } from '../../common/convertBase64'
import ColorPicker from '../ColorPicker/ColorPicker'
import { useAppSelector } from '../../redux/hooks'
import { ColorResult } from 'react-color'

type ChangeBackgroundSlideProps = {
    onSave: (slideBackgroundType: SlideBackgroundType, data: string | Color, applyType: ApplyType) => void
}

enum ApplyType {
    ALL,
    CURRENT,
}

const ChangeSlideBackground = ({ onSave }: ChangeBackgroundSlideProps) => {
    const currentSlideId = useAppSelector((state) => state.editor.currentSlide)
    const slideBackground = useAppSelector((state) => state.editor.document.slideList.find((slide) => slide.id === currentSlideId)?.background)
    const [type, setType] = useState<SlideBackgroundType>(SlideBackgroundType.PICTURE_URL)
    const [data, setData] = useState<string>('')
    const [color, setColor] = useState<Color>(slideBackground?.type === SlideBackgroundType.SOLID_COLOR ? slideBackground.color : { r: 255, g: 255, b: 255, a: 1 })

    const handleChangeBackgroundColor = (color: ColorResult) => {
        setColor({ ...color.rgb } as Color)
    }

    const uploadImage = async (e: ChangeEvent<HTMLInputElement>) => {
        const image = e.target.files?.length ? await convertBase64(e.target.files[0]) : ''
        image && setData(image as string)
    }

    return (
        <div className={styles.changeBackground}>
            <div className={styles.tabs}>
                <button className={`${styles.tab} ${(type === SlideBackgroundType.PICTURE_URL) && styles.tabActive}`} onClick={() => setType(SlideBackgroundType.PICTURE_URL)}>Ссылка</button>
                <button className={`${styles.tab} ${(type === SlideBackgroundType.PICTURE_BASE64) && styles.tabActive}`} onClick={() => setType(SlideBackgroundType.PICTURE_BASE64)}>Файл</button>
                <button className={`${styles.tab} ${(type === SlideBackgroundType.SOLID_COLOR) && styles.tabActive}`} onClick={() => setType(SlideBackgroundType.SOLID_COLOR)}>Цвет</button>
            </div>
            <div className={styles.form}>
                {(type === SlideBackgroundType.PICTURE_URL) && <input className={styles.input} type="text" value={data} onInput={(e) => setData(e.currentTarget.value)} />}
                {(type === SlideBackgroundType.PICTURE_BASE64) && <input className={styles.file} type="file" onChange={(e) => uploadImage(e)} />}
                {(type === SlideBackgroundType.SOLID_COLOR) && <div className={styles.color}>Цвет: <ColorPicker color={color} onChange={handleChangeBackgroundColor} /></div>}
                <div className={styles.buttonsBlock}>
                    <button className={styles.submit} onClick={() => onSave(type, type === SlideBackgroundType.SOLID_COLOR ? color : data, ApplyType.CURRENT)}>Применить к выбранному</button>
                    <button className={styles.submit} onClick={() => onSave(type, type === SlideBackgroundType.SOLID_COLOR ? color : data, ApplyType.ALL)}>Применить ко всем</button>
                </div>
            </div>
        </div>
    )
}

export { ChangeSlideBackground, ApplyType }
