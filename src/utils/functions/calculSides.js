/**
 * Calcul the width and the height for an element.
 * Return a css string containing 'width: ...px; height...px;
 * @param {number} n 
 * @param {number} add 
 * @returns 
 */
function calculSides(n, add = 0) {
    if (typeof n !== "number") {
        console.error(typeof n)
        throw new Error('Erreur, la dimension passée pour l\'icone en forme de coeur doit être un nombre.')
    }
    return `width: ${n + add}px;
    height: ${n + add}px;`
}

export default calculSides