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
import chickenRecipes from '../../utils/const/chickenRecipes'
import { Button } from '../../utils/layout/Button'
import RatingStar from '../components/Rating/RatingStar'
import firstNames from '../../utils/const/firstNames'
import Comment from '../components/Comments/Comment'

const Title = styled.h1`
font-size: 25px;
color: ${colors.secondary};
padding-top: 50px;
`
const Picture = styled.img`
width: 600px;
height: 480px;
border-radius: 20px;`

const StarsContainer = styled.div`
height: 20px;
margin: 0 0 20px 10px;
& span:nth-of-type(1) {
    margin-left: 10px;
    font-size: 15px;
}
`
const IconCard = styled.img`
height: 30px;
width: 30px;
`
const RecipeContent = styled.div`
margin-left: 20px;
width: 650px;
& > button {
    margin: auto;
}
`
const IconsContainer = styled.div`
display: flex;
justify-content: space-evenly;
margin-top: 20px;
& > div {
    display: flex;
align-items: center;
}
`

const IngredientsContainer = styled.div`
margin: 30px;
& > div:nth-of-type(1) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}
& > h2 {
    font-size: 25px;
    color: ${colors.secondary};
    text-align: center;
    
}
`
const Ingredient = styled.div`
text-align: center;

`
const PictureIngredient = styled.img`
width: 125px;
height: 125px;
border-radius: 20px;
box-shadow: 1px 2px 9px 0 ${colors.secondary};
`
const CommentsContainer = styled.div`
display: flex;
margin-top: 30px;
padding: 0 20px 0 20px;
`
const Rating = styled.div`
margin-top: 50px;
padding: 0 20px 0 20px;
`
const AuthorLetter = styled.div``

function Recipe() {
    const id = (new URLSearchParams(useLocation().search)).get('r')
    const rate = generateRate()
    const stars = generateStars(rate, 18)
    /*const { recipe, fetchRecipe } = useRecipes()

    useEffect(() => {
        if (!recipe) {
            fetchRecipe(id)
        }
        debugger
    }, [id])*/
    const recipe = randomRecipe
    console.log(firstNames)

    return (
        <>
            <Nav />
            <MainContainer>
                <ContentContainer>
                    <RecipeContent>
                        <Title>{recipe.label}</Title>
                        {stars ?
                            <StarsContainer>
                                {stars}
                                <span>{rate} / 5</span>
                            </StarsContainer> :
                            null
                        }
                        <Picture src={recipe.image} onError={(e) => { e.target.onerror = null; e.target.src = defaultPictureSrc }} />
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
                        <IngredientsContainer>
                            <h2>Ingrédients</h2>
                            <div>
                                {
                                    recipe.ingredients.map((e, i) => {
                                        return <Ingredient key={i}>
                                            {
                                                e.image ?
                                                    <PictureIngredient
                                                        src={e.image}
                                                        alt="An ingredient"
                                                        onError={(e) => {
                                                            e.target.onerror = null;
                                                            e.target.src = defaultPictureSrc
                                                        }} /> :
                                                    <PictureIngredient
                                                        src={defaultPictureSrc}
                                                        alt="An ingredient"
                                                    />
                                            }
                                            <p>{e.text}</p>
                                        </Ingredient>
                                    }
                                    )

                                }
                            </div>
                        </IngredientsContainer>
                        <Button
                            background={colors.primary}
                            width={250}
                            height={50}
                        ><a style={{ display: "table-cell" }} href={recipe.url} target="_blank">Voir la préparation</a></Button>
                    </RecipeContent>
                    <Rating>
                        <p>C'est terminé, qu'en avez vous pensé ?</p>
                        <RatingStar starSize={32} />
                    </Rating>

                    <CommentsContainer>
                        <Comment />
                        <Comment />
                        <Comment />
                    </CommentsContainer>
                </ContentContainer>
            </MainContainer>
        </>
    )
}

Recipe.propTypes = {

}

export default Recipe

