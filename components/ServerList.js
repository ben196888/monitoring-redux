import React, { PropTypes } from 'react'
import Server from './Server'

const ServerList = ({ servers }) => (
    <ul>
        {servers.map(server =>
            <Server
                key={server.id}
                {...server}
            />
        )}
    </ul>
)

ServerList.propTypes = {
    servers: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        ip: PropTypes.string.isRequired
    }).isRequired).isRequired
}

export default ServerList