import React from 'react'
import PropTypes from 'prop-types'
import { Alert } from '../styled'

/**
 * Component display Not found message
 */
export const NotFound = (props) => {
    const { message } = props
    return (
        <Alert type="info"><p>{message || 'Not found'}</p></Alert>
    )
}

/**
 * PropTypes
 * @type {Object}
 * @property {message} Message to display
 */
NotFound.PropTypes = {
    message: PropTypes.string,
}