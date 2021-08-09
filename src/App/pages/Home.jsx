import React from 'react'
import PropTypes from 'prop-types'
import Nav from '../components/Nav'
import { MainContainer } from '../components/MainContainer'

function Home(props) {
    return (
        <div>
            <Nav />
            <MainContainer>
                <div>Plop</div>
                <div>Plop</div>
                <div>Plop</div>
                <div>Plop</div>
            </MainContainer>

        </div>
    )
}

Home.propTypes = {

}

export default Home

