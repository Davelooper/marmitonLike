import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

const StyledColumnCard = styled.div`
width: 33%;
display: flex;
flex-direction: column;
align-items: center;
`

function ColumnCard({ children }) {

    return (
        <StyledColumnCard>{children}</StyledColumnCard>
    )
}

ColumnCard.propTypes = {

}

export default ColumnCard

