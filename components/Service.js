import React, { PropTypes } from 'react'

const Service = ({ name }) => (
    <li>
        {name}
    </li>
)

Service.propTypes = {
    ip: PropTypes.string.isRequired
}

export default Service