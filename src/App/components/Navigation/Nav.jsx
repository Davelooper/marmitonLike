import React from 'react'
import LogoSrc from '../../../utils/icons/nav-logo.svg'
import styled from "styled-components/macro";
import { useToggle } from '../../hooks/useToggle'
import SearchSrc from '../../../utils/icons/search-icon.svg'
import SearchParameterSrc from '../../../utils/icons/searchParameter-icon.svg'
import { Button } from '../../../utils/layout/Button'
import Dropdown from './Dropdown'
import colors from '../../../utils/style/colors'
import navHeight from '../../../utils/style/nav'
import { useHistory } from 'react-router-dom';

const Navigation = styled.nav`
display: flex;
height: ${navHeight}px;
position: sticky;
position: fixed;
background-color: white;
z-index: 1;
top: 0;
width: 100%;
box-shadow: 0 4px 15px -2px grey;
`
const LeftContainer = styled.div`
border-right: 2px solid lightgrey;
width: 80px;
display: flex;
justify-content:center;
align-items: center;
`
const IconContainer = styled.div`
padding:20px;
flex-basis: 1;
`
const Logo = styled.img`
width: 140px;
heigh: 48px;
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
padding: 0 10px 0 10px;
border-left: 2px solid lightgrey;
`


function Nav() {
    const [isDrop, toggleDrop] = useToggle(false)
    const history = useHistory()

    const handleSubmit = async function (e) {
        e.preventDefault()
        if (e.code === 'Enter') {
            history.push('/searchRecipes?search=' + e.target.value)
        }
    }

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
                    <Input type="text" placeholder="Chercher une recette" onKeyUp={handleSubmit} />
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

export default Nav

