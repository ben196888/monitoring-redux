import React, { PropTypes } from 'react'
import ServiceList from './ServiceList'

class Server extends React.Component {
    componentDidMount() {
        let { ip, services, pollStatus } = this.props
        this.interval = setInterval(pollStatus(ip, services), 10 * 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
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
    pollStatus: PropTypes.func.isRequired
}

export default Server