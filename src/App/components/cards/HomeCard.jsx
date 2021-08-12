import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

const StyledHomeCard = styled.div`
background-image: ${({ recipe }) => `url(${recipe.image});`}
background-size: cover;
width: 300px;
height: 400px;
display: flex;
align-items: flex-end;
border-radius: 20px;
box-shadow: 0 6px 9px 0 rgb(0 0 0 / 15%);
margin-bottom: 15px;
`
const CardBody = styled.div`
width: 100%;
height: 25%;
text-align: center;
background: white;
border-radius: inherit;
position: relative;
box-shadow: inherit;
font-size: 20px;
color: #3f3735;
`
function HomeCard({ recipe }) {

    return (
        <StyledHomeCard recipe={recipe}>
            <CardBody>
                <h2>{recipe.label}</h2>
            </CardBody>

        </StyledHomeCard>
    )
}

HomeCard.propTypes = {

}

export default HomeCard

