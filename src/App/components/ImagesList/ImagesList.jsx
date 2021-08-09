import React, { useState } from "react";
import styled from "styled-components/macro";
import Pizza1Src from "../../../utils/pictures/pizza/pizza1.jpg"
import Pizza2Src from "../../../utils/pictures/pizza/pizza2.jpg"
import Pizza3Src from "../../../utils/pictures/pizza/pizza3.jpg"
import MilleFeuille1Src from "../../../utils/pictures/mille-feuille/mille-feuille1.jpg"
import MilleFeuille2Src from "../../../utils/pictures/mille-feuille/mille-feuille2.jpg"
import MilleFeuille3Src from "../../../utils/pictures/mille-feuille/mille-feuille3.jpg"
import Mousse1Src from "../../../utils/pictures/mousse-chocolat/mousse-chocolat1.jpg"
import Mousse2Src from "../../../utils/pictures/mousse-chocolat/mousse-chocolat2.jpg"
import Mousse3Src from "../../../utils/pictures/mousse-chocolat/mousse-chocolat3.jpg"
import Tomate1Src from "../../../utils/pictures/tomates-farcies/tomates-farcies1.jpg"
import Tomate2Src from "../../../utils/pictures/tomates-farcies/tomates-farcies2.jpg"
import Tomate3Src from "../../../utils/pictures/tomates-farcies/tomates-farcies3.jpg"
import Carbo1Src from "../../../utils/pictures/pates-carbo/pates-carbo1.jpg"
import Carbo2Src from "../../../utils/pictures/pates-carbo/pates-carbo2.jpg"
import Carbo3Src from "../../../utils/pictures/pates-carbo/pates-carbo3.jpg"
import colors from "../../../utils/style/colors";
import { useToggle } from "../../hooks/useToggle";
import FsLightbox from "fslightbox-react";

const PicturesContainer = styled.div`
display: flex;
justify-content: space-evenly;
`
const PictureCard = styled.div`
text-align: center;

`
const StyledPictureWrapper = styled.div`
width: 90px;
height: 90px;
border-radius: 50%;
overflow: hidden;
border: 2px solid ${colors.primary};
background-size: cover;
margin: 10px auto;
cursor: pointer;
`
const Subtitle = styled.span`
color: #393D6A;
font-size: 12px;
`

function ImagesList() {
    const [isLightBoxToggled, toggleLightBox] = useToggle(false)
    const [lightBoxPictures, setLightBoxPictures] = useState(null)


    return (
        <>
            < PicturesContainer >
                <PictureCard>
                    <PictureWrapper
                        style={{ backgroundImage: `url(${Carbo2Src})` }}
                        toggleLightBox={toggleLightBox}
                        setLightBoxPictures={setLightBoxPictures} />
                    <Subtitle>Pates à la carbonara</Subtitle>
                </PictureCard>
                <PictureCard>
                    <PictureWrapper
                        style={{ backgroundImage: `url(${Pizza1Src})` }}
                        toggleLightBox={toggleLightBox}
                        setLightBoxPictures={setLightBoxPictures} />
                    <Subtitle>Pizza</Subtitle>
                </PictureCard>
                <PictureCard>
                    <PictureWrapper
                        style={{ backgroundImage: `url(${MilleFeuille1Src})` }}
                        toggleLightBox={toggleLightBox}
                        setLightBoxPictures={setLightBoxPictures} />
                    <Subtitle>Mille feuille</Subtitle>
                </PictureCard>
                <PictureCard>
                    <PictureWrapper
                        style={{ backgroundImage: `url(${Mousse1Src})` }}
                        toggleLightBox={toggleLightBox}
                        setLightBoxPictures={setLightBoxPictures} />
                    <Subtitle>Mousse au Chocolat</Subtitle>
                </PictureCard>
                <PictureCard>
                    <PictureWrapper
                        style={{ backgroundImage: `url(${Tomate1Src})` }}
                        toggleLightBox={toggleLightBox}
                        setLightBoxPictures={setLightBoxPictures} />
                    <Subtitle>Tomates farcies</Subtitle>
                </PictureCard>
            </PicturesContainer >
            <FsLightbox
                toggler={isLightBoxToggled}
                sources={lightBoxPictures} />
        </>

    )

}

function PictureWrapper({ style, toggleLightBox, setLightBoxPictures }) {

    const handleClick = function () {
        switch (true) {
            case style.backgroundImage.match(/pates-carbo/i) !== null:
                setLightBoxPictures([Carbo1Src, Carbo2Src, Carbo3Src])
                break;
            case style.backgroundImage.match(/tomates-farcies/i) !== null:
                setLightBoxPictures([Tomate1Src, Tomate2Src, Tomate3Src])
                break;
            case style.backgroundImage.match(/mousse-chocolat/i) !== null:
                setLightBoxPictures([Mousse1Src, Mousse2Src, Mousse3Src])
                break;
            case style.backgroundImage.match(/mille-feuille/i) !== null:
                setLightBoxPictures([MilleFeuille1Src, MilleFeuille2Src, MilleFeuille3Src])
                break;
            case style.backgroundImage.match(/pizza/i) !== null:
                setLightBoxPictures([Pizza1Src, Pizza2Src, Pizza3Src])
                break;
            default:
                console.error('Action inconnue')
        }
        toggleLightBox()
    }

    return <StyledPictureWrapper style={style} onClick={handleClick} />
}

export default ImagesList