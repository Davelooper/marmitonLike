import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import HamburgerSrc from '../../utils/icons/007-menu.svg'
import LogoSrc from '../../utils/icons/nav-logo.svg'
import styled from "styled-components/macro";
import { useToggle } from '../hooks/useToggle'
import colors from '../../utils/style/colors'
import { navHeight } from '../../utils/style/nav'
import SearchSrc from '../../utils/icons/search-icon.svg'
import SearchParameterSrc from '../../utils/icons/searchParameter-icon.svg'
import { Button } from '../../utils/layout/Button'

const Navigation = styled.nav`
display: flex;
height: ${navHeight}px;
position: sticky;
position: fixed;
background-color: white;
z-index: 1;
top: 0;
width: 100%;
`
const LeftContainer = styled.div`
border-right: 2px solid lightgrey;
width: 80px;
display: flex;
justify-content:center;
align-items: center;
`
const Hamburger = styled.img`
width: 30px;
height: 30px;
cursor: pointer;
`

const IconContainer = styled.div`
padding:20px;
flex-basis: 1;
`
const Logo = styled.img`
width: 140px;
heigh: 48px;
`

const DropContainer = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
position: fixed;
top: 60px;
background-color:white;
`
const DropDiv = styled.div`
padding: 0 10px;
padding-left: 10px;
border-left: 2px solid lightgrey;
`
const DropTitle = styled.h2`
color: ${colors.primary};
font-size: 1.2rem;
margin-top: 0;
`
const DropList = styled.ul`
list-style-type: none;
padding: 0;
`
const DropItem = styled.li`
margin-top: 10px;
&:hover {
    cursor: pointer;
    color: ${colors.primary};
}
`
const SearchContainer = styled.div`
display: flex;
align-items: center;
widht: 100%;
padding: 0 10px;
flex-grow: 1;
}
`
const InputWrapper = styled.div`
border: 1px solid lightgrey;
border-radius: 10px;
height: 30px;
display: flex;
align-items: center;
justify-content: stretch;
border-box: contain;
padding-left: 5px;
position: relative;
flex-grow: 1;
`
const SearchIcon = styled.img`
width: 20px;
height: auto;
fill: ${colors.primary};
margin-right: 5px;
`
const Input = styled.input`
height: 90%;
width: 70%;
border: none;
&:focus {
    outline: none;
}
`

const SearchParameter = styled.img`
width: 25px;
height: 25px;
position: relative;
absolute: 5px;
justify-self: flex-end;
margin: 0 10px 0 auto ;

`

const ButtonsContainer = styled.div`
display: flex;
align-items: center;
gap: 10px;
margin-left: auto;
padding-left: 10px;
border-left: 2px solid lightgrey;
`
const Overlay = styled.div`
background-color: rgba(119, 119, 119, 0.5);
height: ${window.innerHeight - navHeight}px;
width: 100%;
position: absolute;
top: ${navHeight}px;
transition: opacity 0.6s ease;
&.out {
    opacity: 0;
}
`

function Nav(props) {
    const [isDrop, toggleDrop] = useToggle(false)
    return (
        <Navigation>
            <LeftContainer>
                <Dropdown visible={isDrop} toggleDrop={toggleDrop} />
            </LeftContainer>
            <SearchContainer>
                <IconContainer>
                    <Logo
                        src={LogoSrc} />
                </IconContainer>
                <InputWrapper>
                    <SearchIcon src={SearchSrc} />
                    <Input type="text" placeholder="Chercher une recette" />
                    <SearchParameter src={SearchParameterSrc} />
                </InputWrapper>
            </SearchContainer>
            <ButtonsContainer>
                <Button width={150} height={45}>Mon panier</Button>
                <Button width={150} height={45} background={colors.primary}>Connexion</Button>
            </ButtonsContainer>
        </Navigation>
    )
}

const ENTERING = 1;
const VISIBLE = 2;
const LEAVING = 3;
const HIDDEN = 4;



function Dropdown({ visible, toggleDrop }) {

    const [state, setState] = useState(HIDDEN)
    let className = state === ENTERING || state === LEAVING ?
        'out' : ''

    useEffect(() => {
        if (visible) {
            if (state === HIDDEN) {
                setState(ENTERING)
            } else if (state === ENTERING) {
                setState(VISIBLE)
            }
        } else {
            if (state === VISIBLE) {
                setState(LEAVING)
            } else if (state === LEAVING) {
                const timer = setTimeout(() => setState(HIDDEN), 600)
                return () => clearTimeout(timer)

            }
        }
    }, [visible, state])

    if (state === HIDDEN) {
        return <div>
            <Hamburger
                src={HamburgerSrc}
                alt="Menu icon"
                onClick={toggleDrop} />
        </div>
    }
    return (
        <div>
            <Hamburger
                src={HamburgerSrc}
                alt="Menu icon"
                onClick={toggleDrop} />
            {
                createPortal(<>
                    <Overlay className={className}>
                        <DropContainer>
                            <DropDiv>
                                <DropTitle>Recettes par catégories</DropTitle>
                                <DropList>
                                    <DropItem>Apéritifs</DropItem>
                                    <DropItem>Entrées</DropItem>
                                    <DropItem>Plats</DropItem>
                                    <DropItem>Desserts</DropItem>
                                    <DropItem>Boissons</DropItem>
                                </DropList>
                            </DropDiv>
                            <DropDiv>
                                <DropTitle>Idées recettes</DropTitle>
                                <DropList>
                                    <DropItem>Recettes par ingrédients</DropItem>
                                    <DropItem>Recettes par thème</DropItem>
                                    <DropItem>Top des recettes</DropItem>
                                </DropList>
                            </DropDiv>
                            <DropDiv>
                                <DropTitle>Lorem ipsum</DropTitle>
                                <DropList>
                                    <DropItem>Lorem ipsum</DropItem>
                                    <DropItem>Dolor sit amet consectetur</DropItem>
                                    <DropItem>Adipisicing emt</DropItem>
                                </DropList>
                            </DropDiv>
                        </DropContainer>
                    </Overlay>
                </>, document.body)

            }
        </div>


    )
}


Nav.propTypes = {

}

export default Nav

