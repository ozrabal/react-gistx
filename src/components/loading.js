import React from 'react'
import PropTypes from 'prop-types'


export const Loading = (props) => {
    const { message } = props
    return (
        <div><p>{message || 'Loading...'}</p></div>
    )
}

Loading.PropTypes = {
    message: PropTypes.string,
}