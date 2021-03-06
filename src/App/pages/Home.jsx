import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { MainContainer } from '../components/Containers/MainContainer'
import ContentContainer from '../components/Containers/ContentContainer'
import Nav from '../components/Navigation/Nav'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import ImagesList from '../components/ImagesList/ImagesList'
import { MEAL_WORDS } from '../../utils/const/mealWords'
import useRecipes from '../hooks/recipes'
import HomeCardsContainer from '../components/Containers/HomeCardsContainer'
import HomeCard from '../components/cards/HomeCard'
import Loader from '../components/Loader/Loader'
import ColumnCard from '../components/Containers/ColumnCard'

const MainTitle = styled.h1`
color: ${colors.primary};
text-align: center;
padding-top: 50px;
`


function Home(props) {
    const { homeRecipes, fetchHomeRecipes } = useRecipes()

    useEffect(() => {
        if (!homeRecipes) {
            fetchHomeRecipes("chicken")
        }
    }, [homeRecipes])


    return (
        <div>
            <Nav />
            <MainContainer>
                <ContentContainer>
                    <MainTitle>Stories</MainTitle>
                    <ImagesList />

                    <HomeCardsContainer>
                        <ColumnCard>
                            {
                                homeRecipes ?
                                    homeRecipes.filter((r, i, arr) => i >= 0 && i <= (arr.length / 3)).map(
                                        (r, i) => (i % 2 === 0) ?
                                            <HomeCard recipe={r.recipe} key={`${r.recipe.totalWeight}-${r.recipe.yeld}`} /> :
                                            <HomeCard Cardheight={450} recipe={r.recipe} key={`${r.recipe.totalWeight}-${r.recipe.yeld}`} />
                                    ) : <Loader />
                            }
                        </ColumnCard>
                        <ColumnCard>
                            {
                                homeRecipes ?
                                    homeRecipes.filter((r, i, arr) => i >= (arr.length / 3) && i <= (arr.length * 2 / 3)).map(
                                        (r, i) => (i % 2 !== 0) ?
                                            <HomeCard recipe={r.recipe} key={`${r.recipe.totalWeight}-${r.recipe.yeld}`} /> :
                                            <HomeCard Cardheight={450} recipe={r.recipe} key={`${r.recipe.totalWeight}-${r.recipe.yeld}`} />
                                    ) : <Loader />
                            }
                        </ColumnCard>
                        <ColumnCard>
                            {
                                homeRecipes ?
                                    homeRecipes.filter((r, i, arr) => i >= (arr.length * 2 / 3) && i <= arr.length).map(
                                        r =>
                                            <HomeCard recipe={r.recipe} key={`${r.recipe.totalWeight}-${r.recipe.yeld}`} />
                                    ) : <Loader />
                            }
                        </ColumnCard>
                    </HomeCardsContainer>
                </ContentContainer>
            </MainContainer>
        </div>
    )
}

Home.propTypes = {

}

export default Home

