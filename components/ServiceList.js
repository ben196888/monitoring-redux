import React, { PropTypes } from 'react'
import Service from './Service'

const ServiceList = ({ services }) => (
    <ul>
        {services.map(service =>
            <Service
                {...service}
            />
        )}
    </ul>
)

ServiceList.propTypes = {
    services: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired
    }).isRequired).isRequired
}

export default ServiceList