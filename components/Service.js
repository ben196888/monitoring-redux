import React, { PropTypes } from 'react'

const Service = ({ name, show, status }) => (
    <li style={{
        display: show? 'block' : 'none'
    }}>
        {name}
        {": "}
        {status}
    </li>
)

Service.propTypes = {
    name: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired
}

export default Service