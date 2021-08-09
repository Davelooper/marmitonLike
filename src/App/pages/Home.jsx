import React from 'react'
import PropTypes from 'prop-types'
import { MainContainer } from '../components/Containers/MainContainer'
import ContentContainer from '../components/Containers/ContentContainer'
import Nav from '../components/Navigation/Nav'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import ImagesList from '../components/ImagesList/ImagesList'

const MainTitle = styled.h1`
color: ${colors.primary};
text-align: center;
`
function Home(props) {
    return (
        <div>
            <Nav />
            <MainContainer>
                <ContentContainer>
                    <MainTitle>Stories</MainTitle>
                    <ImagesList />
                </ContentContainer>
            </MainContainer>

        </div>
    )
}

Home.propTypes = {

}

export default Home

