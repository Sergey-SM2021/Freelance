import { SyntheticEvent, useState } from "react"

import {
    PopupFullImgWrapper, PopupImgFull,
    PopupImgSmall, PopupSmallImgWrapper, PopupWrapper
} from "./PopupImg.style"

type TProps = {
    src: string
}

export const PopupImg = ({ src }: TProps) => {
    const [isImgFull, changeVisableImgFull] = useState<boolean>(false)
    const fullImgClickHandler = (e: SyntheticEvent<HTMLImageElement>) => {
        e.preventDefault()
    }
    const handlerSmallPopupClick = (e: SyntheticEvent<HTMLImageElement>) => {
        changeVisableImgFull(true)
    }
    const closeAreaClickHandler = () => {
        changeVisableImgFull(false)
    }
    return (<PopupWrapper>
        <PopupSmallImgWrapper>
            <PopupImgSmall src={src} onClick={handlerSmallPopupClick} />
        </PopupSmallImgWrapper>
        <PopupFullImgWrapper isVisable={isImgFull} onClick={closeAreaClickHandler}>
            <PopupImgFull path={src} onClick={fullImgClickHandler} />
        </PopupFullImgWrapper>
    </PopupWrapper>)
}