import React, { PropTypes } from 'react'
import Server from './Server'

const ServerList = ({ servers, services, pollStatus }) => (
    <ul>
        {servers.map(server =>
            <Server
                key={server.id}
                {...server}
                ip={server.ip}
                services={services}
                pollStatus={pollStatus}
                servicesStatus={server.servicesStatus}
            />
        )}
    </ul>
)

ServerList.propTypes = {
    servers: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        ip: PropTypes.string.isRequired,
    }).isRequired).isRequired,
    services: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        shouldFetch: PropTypes.bool.isRequired
    }).isRequired).isRequired,
    pollStatus: PropTypes.func.isRequired
}

export default ServerList