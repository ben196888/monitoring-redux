import React, { PropTypes } from 'react'
import ServiceList from './ServiceList'

class Server extends React.Component {
    render() {
        const { ip, services, servicesStatus, pollStatus } = this.props
        return (
            <li>
                {ip}
                <ServiceList
                    ip={ip}
                    services={services}
                    servicesStatus={servicesStatus}
                    pollStatus={pollStatus}
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
    pollStatus: PropTypes.func.isRequired
}

export default Server