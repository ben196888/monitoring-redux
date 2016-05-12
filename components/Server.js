import React, { PropTypes } from 'react'
import ListService from '../containers/ListService'

const Server = ({ ip }) => (
    <li>
        {ip}
    </li>
)

Server.propTypes = {
    ip: PropTypes.string.isRequired
}

export default Server