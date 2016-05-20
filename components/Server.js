import React, { PropTypes } from 'react'
import ServiceList from './ServiceList'

class Server extends React.Component {
    componentWillMount() {
        let { ip, services, getServicesStatus } = this.props
        getServicesStatus(ip, services)
    }

    render() {
        const { ip, services, servicesStatus } = this.props
        return (
            <li>
                {ip}
                <ServiceList
                    services={services}
                    servicesStatus={servicesStatus}
                />
            </li>
        )
    }
}

Server.propTypes = {
    ip: PropTypes.string.isRequired,
    services: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        shouldFetch: PropTypes.bool.isRequired
    }).isRequired).isRequired,
    getServicesStatus: PropTypes.func.isRequired
}

export default Server