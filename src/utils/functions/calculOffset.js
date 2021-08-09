/**
 * Calcul the size of an element according the screen 
 * size and the size of others elements.
 * @param {array} pixelledElement Values of the elements in pixel.
 * @param {*} elt Ratio wanted for the element.
 * @param {*} screen Size of the screen.
 * @returns 
 */
export function calculSize(pixelledElement, elt, screen) {
    const availableSpace = screen - pixelledElement.reduce((acc, curr) => acc + curr)

    return elt * availableSpace
}