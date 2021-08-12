import LoaderSrc from '../../../utils/icons/1628758493loading7_pink.gif'
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

const StyledLoader = styled.img`
width: ${({ width }) => width ? `${width}px;` : '350px;'}
`
function Loader({ width }) {
    return (
        <StyledLoader src={LoaderSrc} />
    )
}

export default Loader

