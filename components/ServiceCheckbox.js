import React, { PropTypes } from 'react'

const ServiceCheckbox = ({ serviceName, children, changeHandler }) => {
    return (
        <input type='checkbox'
            onChange={e => {
                e.preventDefault()
                console.log(serviceName)
                // changeHandler(serviceName)
            }}
         />
    )
}

ServiceCheckbox.propTypes = {
    serviceName: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    changeHandler: PropTypes.func.isRequired
}

export default ServiceCheckbox