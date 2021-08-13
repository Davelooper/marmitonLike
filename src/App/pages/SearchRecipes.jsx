import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import useRecipes from '../hooks/recipes'
import searchRecipes from '../../utils/const/searchRecipes'
import SearchCard from '../components/cards/SearchCard'
import ContentContainer from '../components/Containers/ContentContainer'
import styled from 'styled-components'
import Nav from '../components/Navigation/Nav'
import { MainContainer } from '../components/Containers/MainContainer'
import capitalizeFirstLetter from '../../utils/functions/capitalizeFirstLetter'

const RecipesContainer = styled.div`
width: 100%;
display: grid;
grid-template-columns: repeat(3, 1fr);
padding-top: 50px;
width: 850px;
margin: auto;
`
const Title = styled.h1`
padding-top: 40px;
margin: 0 0 0 20px;
font-size: 30px;
`

function SearchRecipes(props) {
    const search = (new URLSearchParams(useLocation().search)).get('search')
    /*const { recipes, fetchRecipes } = useRecipes() */

    /*useEffect(() => {
        debugger
        if (!recipes) {
            fetchRecipes(search)
        }
    }, [search, recipes])*/

    const recipes = searchRecipes;
    return (
        <>
            <Nav />
            <MainContainer>
                <ContentContainer>
                    <Title>{capitalizeFirstLetter(search)}</Title>
                    <RecipesContainer>
                        {recipes.map(r =>
                            <SearchCard recipe={r.recipe} key={`${r.recipe.totalWeight}-${r.recipe.yeld}`} />)}
                    </RecipesContainer>
                </ContentContainer>
            </MainContainer>
        </>
    )
}

SearchRecipes.propTypes = {

}

export default SearchRecipes

