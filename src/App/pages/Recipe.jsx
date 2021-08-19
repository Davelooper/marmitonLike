import React from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router'
import { useEffect } from 'react'
import useRecipes from '../hooks/recipes'
import Loader from '../components/Loader/Loader'
import randomRecipe from '../../utils/const/randomRecipe'
import Nav from '../components/Navigation/Nav'
import { MainContainer } from '../components/Containers/MainContainer'
import ContentContainer from '../components/Containers/ContentContainer'
import styled from 'styled-components/macro'
import defaultPictureSrc from '../../utils/pictures/defaultRecipePicture.jpg'
import generateStars from '../../utils/functions/generateStars'
import generateRate from '../../utils/functions/generateRate'
import colors from '../../utils/style/colors'
import testIconSrc from '../../utils/icons/testIcon.svg'
import weighingSrc from '../../utils/icons/weighing.svg'
import boltSrc from '../../utils/icons/bolt.svg'
import clockSrc from '../../utils/icons/clock.svg'

const Title = styled.h1`
`
const Picture = styled.img``
const StarsContainer = styled.div``
const IconCard = styled.img`
height: 30px;
width: 30px;
`
const IconsContainer = styled.div`
display: flex;
& > div {
    display: flex;
align-items: center;
}
`

function Recipe() {
    const id = (new URLSearchParams(useLocation().search)).get('r')
    const rate = generateRate()
    const stars = generateStars(rate)
    /*const { recipe, fetchRecipe } = useRecipes()

    useEffect(() => {
        if (!recipe) {
            fetchRecipe(id)
        }
        debugger
    }, [id])*/
    const recipe = randomRecipe
    console.log(recipe)

    return (
        <>
            <Nav />
            <MainContainer>
                <ContentContainer>
                    <Title>{recipe.label}</Title>
                    <Picture src={recipe.image} onError={(e) => { e.target.onerror = null; e.target.src = defaultPictureSrc }} />
                    {stars ?
                        <StarsContainer>
                            {stars.map(e => e)}
                        </StarsContainer> :
                        null}
                    <IconsContainer>
                        <div>
                            <IconCard src={clockSrc} />
                            <span>   {recipe.totalTime} min</span>
                        </div>
                        <div>
                            <IconCard src={weighingSrc} />
                            <span>   {parseInt(recipe.totalWeight, 10)} gr</span>
                        </div>
                        <div>
                            <IconCard src={boltSrc} />
                            <span>   {parseInt(recipe.calories, 10)} cal</span>
                        </div>
                    </IconsContainer>
                </ContentContainer>
            </MainContainer>
        </>
    )
}

Recipe.propTypes = {

}

export default Recipe

