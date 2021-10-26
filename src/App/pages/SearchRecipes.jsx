import React, { useEffect, useState } from 'react'
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
import { useToggle } from '../hooks/useToggle'
import { Button } from '../../utils/layout/Button'

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

const Pagination = styled.div`
display: flex;
justify-content: center`

const PageNumber = styled.div`
margin: 0px 2px 0px 0px;
    border-radius: 50%;
    background-color: #FF485A;
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    `

function SearchRecipes() {
    const research = (new URLSearchParams(useLocation().search)).get('search')
    const { recipes, recipesAccount, fetchRecipes } = useRecipes(null)
    const [search, setSearch] = useState('')
    const [shouldUpdateRecipes, setShouldUpdateRecipes] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const resultsPerPages = 20
    let pagesAccount = 1
    let pages = [1]
    let lastPage = null
    let recipesPerPages = 20
    let from = 1
    let to = 20

    if (recipes) {

        pagesAccount = recipesAccount / resultsPerPages
        pages = [...Array(pagesAccount + 1).keys()].slice(1)
        lastPage = pages[pages.length - 1]
        from = recipesPerPages * currentPage
        to = from + recipesPerPages
    }


    useEffect(() => {
        if (research !== null && research !== "") {
            if (research !== search) {
                setSearch(research)
                setShouldUpdateRecipes(true)
            }
        }
    }, [search, research, fetchRecipes, recipes])

    useEffect(() => {
        if (shouldUpdateRecipes) {
            fetchRecipes(search, from, to)
            setShouldUpdateRecipes(false)
        }
    })


    const handlePageClick = function (n) {
        if (n) {
            setCurrentPage(n)
            /*setShouldUpdateRecipes(true)*/ //Ligne à décommenter lorsque l'api permettra d'avoir plus que les 20 premiers resultats.
        }
    }

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
                    <Pagination>
                        {
                            generatePagination(pages, pagesAccount, currentPage, handlePageClick, lastPage)
                        }
                    </Pagination>
                </ContentContainer>
            </MainContainer>
        </>
    )
}

function generatePagination(pages, pagesAccount, currentPage, handlePageClick, lastPage) {

    if (currentPage <= 10) {
        return <>
            {
                pages.map(n =>
                    n <= 10 && n < currentPage ?
                        <Button
                            onClick={() => handlePageClick(n)}
                            height={45}
                            width={45} key={n}>{n}</Button> : null)
            }
            <PageNumber
            >{currentPage}</PageNumber>
            {
                pages.map(n =>
                    n <= 10 && n > currentPage ?
                        <Button
                            onClick={() => handlePageClick(n)}
                            height={45}
                            width={45} key={n}>{n}</Button> : null)
            }
            <Button
                onClick={() => handlePageClick(11)}
                height={45}
                width={45}>11</Button>
            <PageNumber
            >...</PageNumber>
            <Button
                height={45}
                width={45}
                onClick={() => handlePageClick(pages.length - 1)}
            >{pages[pages.length - 1]}</Button>
        </>
    } else if (currentPage > 10 && currentPage < lastPage - 4) {
        return <>
            <Button
                height={45}
                width={45}
                onClick={() => handlePageClick(1)}>1</Button>
            <PageNumber
            >...</PageNumber>
            {
                pages.map((n) =>
                (n >= currentPage - 4 && n < currentPage ?
                    <Button
                        height={45}
                        width={45}
                        key={n}
                        onClick={() => handlePageClick(n)}>{n}</Button> : null
                ))

            }
            <PageNumber
            >{currentPage}</PageNumber>
            {
                pages.map((n) =>
                (n > currentPage && n <= currentPage + 4 ?
                    <Button
                        height={45}
                        width={45}
                        key={n}
                        onClick={() => handlePageClick(n)}>{n}</Button> : null
                ))

            }
            <PageNumber
            >...</PageNumber>
            <Button
                height={45}
                width={45}
                onClick={() => handlePageClick(pages.length - 1)}
            >{pages[pages.length - 1]}</Button>

        </>
    } else if (currentPage > 10 && currentPage >= lastPage - 4) {
        return <>
            <Button
                height={45}
                width={45}
                onClick={() => handlePageClick(1)}>1</Button>
            <PageNumber
            >...</PageNumber>
            {
                pages.map((n) =>
                (n >= currentPage - 4 && n < currentPage ?
                    <Button
                        height={45}
                        width={45}
                        key={n}
                        onClick={() => handlePageClick(n)}>{n}</Button> : null
                ))

            }
            <PageNumber
            >{currentPage}</PageNumber>
            {
                pages.map((n) =>
                (n > currentPage && n <= currentPage + 4 ?
                    <Button
                        height={45}
                        width={45}
                        key={n}
                        onClick={() => handlePageClick(n)}>{n}</Button> : null
                ))

            }
        </>
    }
}


SearchRecipes.propTypes = {

}

export default SearchRecipes

