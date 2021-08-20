import colors from "../style/colors"
import styled from "styled-components/macro"

const StyledButton = styled.button`
display: flex;
justify-content: center;
align-items: center;
border: 1px solid ${colors.primary};
border-radius: 20px;
cursor: pointer;
transition: background-color 0.3s ease-in-out;
font-size: ${({ height }) => height && (height - 25) + 'px;'}
${({ background }) => harmonize(background)}
${({ height }) =>
        height &&
        `height: ${height}px;`
    }
${({ width }) =>
        width &&
        `width: ${width}px;`
    }
&:hover {
    ${({ background }) => harmonize(background, { revert: true })}
}
& > a {
    text-decoration: none;
    color: inherit;
    font-size: inherit;
}
`

export function Button({ children, width, height, background = "white" }) {

    return <StyledButton
        width={width}
        height={height}
        background={background}>{children}</StyledButton>
}

/**
 * Harmonize the background-color with the color of the text.
 * The revert option is used for hover effect.
 * @param {string} backgroundColor 
 * @param {object} options 
 * @returns 
 */
function harmonize(backgroundColor, options = {}) {
    let color = ''
    if (!options.color) {
        if (backgroundColor === colors.primary) {
            color = 'white';
        } else {
            color = colors.primary
        }
    } else {
        color = options.color
    }

    let revert = options.revert ? options.revert : false

    return revert ?
        `background-color: ${color};
        color: ${backgroundColor};` :
        `background-color: ${backgroundColor};
    color: ${color};`
}
