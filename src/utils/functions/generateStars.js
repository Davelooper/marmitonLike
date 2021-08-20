import React from "react"
import styled from "styled-components/macro"
import halfStarSrc from '../icons/halfStar.svg'
import fullStarSrc from '../icons/fullStar.svg'
import emptyStarSrc from '../icons/emptyStar.svg'

const Star = styled.img`
width: ${({ size }) => size ? `${size}px;` : '14px;'}
height: ${({ size }) => size ? `${size}px;` : '14px;'}
`

/**
     * Count the number of stars and half star to display.
     * according to the rat.
     * 
     */
function starCounter(rate) {
    let stars = Math.trunc(rate)
    let rest = rate - stars
    let halfStar = 0
    if (rest >= 0.25 && rest <= 0.75) {
        halfStar = 1
    }
    if (rest > 0.75) {
        stars += 1
    }
    return [stars, halfStar]

}

/**
     * Generate stars components according to the number of stars to display.
     * @param {number} rate 
     * @returns 
     */
function generateStars(rate, size) {
    let stars = []
    const starsCount = starCounter(rate)
    for (let i = 0; i < starsCount[0]; i++) {
        stars = [
            ...stars,
            <Star src={fullStarSrc} size={size} key={i} alt="Rating star" />
        ]
    }
    if (starsCount[1] === 1) {
        stars = [
            ...stars,
            <Star src={halfStarSrc} size={size} key={'p54781'} alt="Rating star" />
        ]
    }
    const emptyStars = 5 - stars.length
    for (let i = 0; i < emptyStars; i++) {
        stars = [
            ...stars,
            <Star src={emptyStarSrc} size={size} key={`${i}p}`} alt="Rating star" />
        ]
    }
    return stars
}


export default generateStars
