import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Loader from '../Loader/Loader'
import defaultPictureSrc from '../../../utils/pictures/defaultRecipePicture.jpg'
import { useHistory } from 'react-router-dom'
import generateRate from '../../../utils/functions/generateRate'
import generateStars from '../../../utils/functions/generateStars'

const StyledSearchCard = styled.div`
width: 190px;
min-height: 319px;
cursor: pointer;
`
const Picture = styled.img`
width: 190px;
height: 190px;
border-radius: 20px;
`
const StarsContainer = styled.div``
function SearchCard({ recipe }) {
    let rate = generateRate()
    let stars = generateStars(rate)
    const history = useHistory()

    function handleClick(e) {
        e.preventDefault()
        history.push('/recipe?r=' + recipe.id)
    }

    return (
        <StyledSearchCard recipe={recipe} onClick={handleClick}>
            <Picture src={recipe.image} onError={(e) => { e.target.onerror = null; e.target.src = defaultPictureSrc }} />
            <p>{recipe.label}</p>
            <StarsContainer>
                {stars ?
                    stars :
                    <Loader />
                }
                <span>  {rate}</span>
                <span>  ({Math.floor(Math.random() * 900)} avis)</span>
            </StarsContainer>
        </StyledSearchCard>
    )
}

SearchCard.propTypes = {

}

export default SearchCard

