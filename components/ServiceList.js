import React, { PropTypes } from 'react'
import Service from './Service'

class ServiceList extends React.Component {
    componentDidMount() {
        this.interval = setInterval(this.forceUpdate.bind(this), this.props.updateInterval || 33)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        let { services, servicesStatus } = this.props
        return (
            <ul>
                {services.map(service =>
                    <Service
                        key={service.id}
                        {...service}
                        name={service.name}
                        show={service.shouldFetch}
                        status={
                            (servicesStatus === undefined ||
                            servicesStatus[service.id] === undefined ||
                            (servicesStatus[service.id]).isFetching === undefined) ?
                                'N/A' :
                            ((servicesStatus[service.id]).isFetching ?
                                'Now Fetching' :
                            ((servicesStatus[service.id]).data).mesg)
                        }
                    />
                )}
            </ul>
        )
    }
}

ServiceList.propTypes = {
    services: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        shouldFetch: PropTypes.bool.isRequired
    }).isRequired).isRequired
}

export default ServiceList