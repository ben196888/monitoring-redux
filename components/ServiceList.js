import React, { PropTypes } from 'react'
import Service from './Service'

class ServiceList extends React.Component {
    render() {
        let { ip, services, servicesStatus, pollStatus } = this.props
        return (
            <ul>
                {services.filter(s => s.shouldFetch)
                .map(service =>
                    <Service
                        key={service.id}
                        {...service}
                        ip={ip}
                        id={service.id}
                        name={service.name}
                        pollStatus={pollStatus}
                        info={(
                            servicesStatus.status === 'init' ?
                                'N/A' :
                            servicesStatus.status === 'connecting' ?
                                'Connecting...' :
                            servicesStatus.status === 'error' ?
                                'Server not found' :
                            servicesStatus.status === 'connected' ?
                                servicesStatus[service.id] : null
                        )}
                    />
                )}
            </ul>
        )
    }
}

ServiceList.propTypes = {
    ip: PropTypes.string.isRequired,
    services: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        shouldFetch: PropTypes.bool.isRequired
    }).isRequired).isRequired,
    pollStatus: PropTypes.func.isRequired
}

export default ServiceList