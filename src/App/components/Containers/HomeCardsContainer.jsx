import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

const StyledHomeCardsContainer = styled.div`
display: flex;
justify-content: space-around;
margin-top: 50px;
`
function HomeCardsContainer({ recipes, children }) {

    return (
        <StyledHomeCardsContainer>{children}</StyledHomeCardsContainer>
    )
}

export default HomeCardsContainer

