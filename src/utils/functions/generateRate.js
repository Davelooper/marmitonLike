/**
     * Generate a random rate betwenn 1 ans 5.
     */
function generateRate() {
    return (Math.floor(Math.random() * 4) + Math.random()).toFixed(1)
}

export default generateRate