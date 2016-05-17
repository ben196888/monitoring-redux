import React, { PropTypes } from 'react'
import ServiceList from './ServiceList'

const Server = ({ ip, services, servicesStatus }) => (
    <li>
        {ip}
        <ServiceList
            services={services}
            servicesStatus={servicesStatus}
        />
    </li>
)

Server.propTypes = {
    ip: PropTypes.string.isRequired,
    services: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        status: PropTypes.bool.isRequired
    }).isRequired).isRequired,
}

export default Server