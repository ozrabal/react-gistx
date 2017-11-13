import React from 'react'
import PropTypes from 'prop-types'
import { PulseLoader } from 'react-spinners'

export const Loading = (props) => {
    const { message } = props
    return (
        <div>
            <PulseLoader color={'#123abc'} size={10} loading={true}/>
            {message && <p>{message}</p>}
        </div>
    )
}

Loading.PropTypes = {
    message: PropTypes.string,
}
