import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom';
import styled from 'styled-components/macro';
import HamburgerSrc from '../../../utils/icons/007-menu.svg'
import colors from '../../../utils/style/colors';
import navHeight from '../../../utils/style/nav';


const Hamburger = styled.img`
width: 30px;
height: 30px;
cursor: pointer;
`
const DropContainer = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
position: fixed;
top: 60px;
background-color:white;
padding-top: 20px;
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

export default Dropdown