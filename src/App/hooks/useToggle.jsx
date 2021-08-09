import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'


export function useToggle(initialValue = false) {
    const [state, setState] = useState(initialValue)

    return [state, useCallback(function (state) {
        setState(state => !state)
    }, [])]
}

useToggle.propTypes = {
    initialValue: PropTypes.bool.isRequired,
}