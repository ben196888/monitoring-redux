import React, { PropTypes } from 'react'

class Service extends React.Component {
    componentWillMount() {
        let { ip, id, name, pollStatus } = this.props
        pollStatus(ip, id, name)
    }

    componentDidMount() {
        let { ip, id, name, pollStatus } = this.props
        this.interval = setInterval(() => pollStatus(ip, id, name), this.queryInterval || 10 * 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        const { name, info } = this.props
        return (
            <li style={{ display: 'block' }}>
                {name}
                {": "}
                {
                    info.status === undefined ||
                    info.status === null ?
                        info :
                    info.status === 'init' ?
                        'Get Service Meta...' :
                    info.status === 'fetching' ?
                        'Fetching Service Info...' :
                    info.status === 'fetched' ?
                        <pre>{JSON.stringify(info.data, null, 2)}</pre> :
                    info.status === 'error' ?
                        info.error.toString() : null
                }
            </li>
        )
    }
}

Service.propTypes = {
    ip: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    pollStatus: PropTypes.func.isRequired
}

export default Service