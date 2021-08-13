import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import halfStarSrc from '../../../utils/icons/halfStar.svg'
import fullStarSrc from '../../../utils/icons/fullStar.svg'
import Loader from '../Loader/Loader'
import emptyStarSrc from '../../../utils/icons/emptyStar.svg'
import defaultPictureSrc from '../../../utils/pictures/defaultRecipePicture.jpg'

const StyledSearchCard = styled.div`
width: 190px;
height: 319px;
`
const Picture = styled.img`
width: 190px;
height: 190px;
border-radius: 20px;
`
const StarContainer = styled.div`
`
const Star = styled.img`
width: 14px;
height: 14px;
`
function SearchCard({ recipe }) {
    let rate = generateRate()
    let stars = generateStars(starCounter(rate))

    async function exists(url) {
        const result = await fetch(url, { method: 'HEAD' });
        return result.ok;
    }
    function generateRate() {
        return (Math.floor(Math.random() * 4) + Math.random()).toFixed(1)
    }

    /**
     * Count the number of stars and half star to display.
     * according to the rat.
     * 
     */
    function starCounter(rate) {
        let stars = Math.trunc(rate)
        let rest = rate - stars
        let halfStar = 0
        if (rest >= 0.25 && rest <= 0.75) {
            halfStar = 1
        }
        if (rest > 0.75) {
            stars += 1
        }
        return [stars, halfStar]

    }

    function generateStars(starsCount) {
        debugger
        let stars = []
        for (let i = 0; i < starsCount[0]; i++) {
            stars = [
                ...stars,
                <Star src={fullStarSrc} alt="Rating star" />
            ]
        }
        if (starsCount[1] === 1) {
            stars = [
                ...stars,
                <Star src={halfStarSrc} alt="Rating star" />
            ]
        }
        const emptyStars = 5 - stars.length
        for (let i = 0; i < emptyStars; i++) {
            stars = [
                ...stars,
                <Star src={emptyStarSrc} alt="Rating star" />
            ]
        }
        return stars
    }
    return (
        <StyledSearchCard recipe={recipe}>
            <Picture src={recipe.image} onError={(e) => { e.target.onerror = null; e.target.src = defaultPictureSrc }} />
            <p>{recipe.label}</p>
            <StarContainer>
                {stars ?
                    stars.map(s => s) :
                    <Loader />
                }
                <span>  {rate}</span>
                <span>  ({Math.floor(Math.random() * 900)} avis)</span>
            </StarContainer>
        </StyledSearchCard>
    )
}

SearchCard.propTypes = {

}

export default SearchCard

