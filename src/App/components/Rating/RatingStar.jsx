import React from 'react'
import PropTypes from 'prop-types'
import emptyStarSrc from '../../../utils/icons/emptyStar.svg'
import fullStarSrc from '../../../utils/icons/fullStar.svg'
import { useState } from 'react'
import styled from 'styled-components/macro'

const StarsContainer = styled.div`
display: flex;
justify-content: space-around;
width: ${({ starSize }) => starSize && `${(starSize * 5) + 20}px;`}
`
const StyledStarRate = styled.img`
`
function RatingStar({ starSize }) {
    const [starOnHoover, setStarOnHoover] = useState(0)
    const [starClicked, setStarClicked] = useState(0)

    function handleHover(number) {
        setStarOnHoover(number)
    }

    function handleStarClick() {
        setStarClicked(starOnHoover)
    }

    return (
        <StarsContainer
            starSize={starSize}
            onMouseLeave={() => setStarOnHoover(0)}>
            <StarRate
                starClicked={starClicked}
                onClick={handleStarClick}
                starSize={starSize}
                starOnHoover={starOnHoover}
                onMouseEnter={handleHover}
                number={1} />
            <StarRate
                starClicked={starClicked}
                onClick={handleStarClick}
                starSize={starSize}
                starOnHoover={starOnHoover}
                onMouseEnter={handleHover}
                number={2} />
            <StarRate
                starClicked={starClicked}
                onClick={handleStarClick}
                starSize={starSize}
                starOnHoover={starOnHoover}
                onMouseEnter={handleHover}
                number={3} />
            <StarRate
                starClicked={starClicked}
                onClick={handleStarClick}
                starSize={starSize}
                starOnHoover={starOnHoover}
                onMouseEnter={handleHover}
                number={4} />
            <StarRate
                starClicked={starClicked}
                onClick={handleStarClick}
                starSize={starSize}
                starOnHoover={starOnHoover}
                onMouseEnter={handleHover}
                number={5} />
        </StarsContainer>
    )
}

/*function StarsContainer(setStarOnHoover) {


    return <styledStarsContainer />
}*/

function StarRate({ starClicked, number, onMouseEnter, starOnHoover, starSize, onClick }) {

    function handleSrc() {
        if (starClicked === 0) {
            if (number > starOnHoover || starOnHoover === 0) {
                return emptyStarSrc
            } else {
                return fullStarSrc
            }
        } else {
            if (number > starClicked) {
                return emptyStarSrc
            } else {
                return fullStarSrc
            }
        }
    }

    return <StyledStarRate
        onClick={onClick}
        starSize={starSize}
        src={handleSrc()}
        onMouseEnter={() => onMouseEnter(number)} />
}

RatingStar.propTypes = {
    starSize: PropTypes.number.isRequired
}

export default RatingStar

