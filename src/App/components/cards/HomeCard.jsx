import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import HeartImageSrc from '../../../utils/icons/009-heart.svg'
import calculSides from '../../../utils/functions/calculSides'

const StyledHomeCard = styled.div`
display: flex;
background-image: ${({ recipe }) => `url(${recipe.image});`}
background-size: cover;
width: 300px;
height: ${({ Cardheight }) => typeof Cardheight === "number" ? `${Cardheight}px;` : `400px;`}
align-items: flex-end;
border-radius: 20px;
box-shadow: 0 6px 9px 0 rgb(0 0 0 / 15%);
margin-bottom: 40px;
cursor: pointer;
`
const CardBody = styled.div`
width: 100%;
height: 25%;
text-align: center;
background: white;
border-radius: inherit;
position: relative;
box-shadow: inherit;
font-size: 20px;
color: #3f3735;
display: flex;
align-items: center;
justify-content: center;
`
const StyledHeartContainer = styled.div`
position: absolute;
background: white;
top: ${({ heartWidth }) => typeof heartWidth === "number" ? `-${heartWidth / 2}px;` : null}
left: 50%;
transform: translateX(-50%);
border-radius: 50%;
width: ${({ heartWidth }) => typeof heartWidth === "number" ? `${heartWidth + 20}px;` : null}
height: ${({ heartWidth }) => typeof heartWidth === "number" ? `${heartWidth + 20}px;` : null}
display: flex;
justify-content: center;
align-items: center;
`
const HeartImage = styled.img`
${({ width }) => calculSides(width)}
`
const CardTitle = styled.p`
font-size: 20px;
`
function HomeCard({ recipe, Cardheight }) {

    const heartWidth = 35
    return (
        <StyledHomeCard recipe={recipe} Cardheight={Cardheight}>
            <CardBody>
                <HeartContainer heartWidth={heartWidth}>
                    <HeartImage src={HeartImageSrc} width={heartWidth} />
                </HeartContainer>
                <CardTitle>{recipe.label}</CardTitle>
            </CardBody>

        </StyledHomeCard>
    )
}

function HeartContainer({ children, heartWidth }) {
    return <StyledHeartContainer heartWidth={heartWidth}>{children}</StyledHeartContainer>
}
HomeCard.propTypes = {

}

export default HomeCard

