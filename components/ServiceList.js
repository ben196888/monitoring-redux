import React, { PropTypes } from 'react'
import Service from './Service'

const ServiceList = ({ services, servicesStatus }) => (
    <ul>
        {services.map(service =>
            <Service
                key={service.id}
                {...service}
                name={service.name}
                show={service.status}
                status={[servicesStatus.isFetching]?'N/A':servicesStatus[service.id]}
            />
        )}
    </ul>
)

ServiceList.propTypes = {
    services: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        status: PropTypes.bool.isRequired
    }).isRequired).isRequired
}

export default ServiceList