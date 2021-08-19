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
import Loader from '../components/Loader/Loader'

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

function SearchRecipes() {
    const search = (new URLSearchParams(useLocation().search)).get('search')
    const { recipes, fetchRecipes } = useRecipes(null)

    useEffect(() => {
        if (!recipes) {
            fetchRecipes(search)
        } else {
            debugger
        }

    }, [search, recipes])

    /*const recipes = searchRecipes;*/
    return (
        <>
            <Nav />
            <MainContainer>
                <ContentContainer>
                    <Title>{capitalizeFirstLetter(search)}</Title>
                    <RecipesContainer>
                        {recipes ? recipes.map(r =>
                            <SearchCard recipe={r} key={r.id} />) :
                            <Loader />}
                    </RecipesContainer>
                </ContentContainer>
            </MainContainer>
        </>
    )
}

SearchRecipes.propTypes = {

}

export default SearchRecipes

