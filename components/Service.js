import React, { PropTypes } from 'react'

class Service extends React.Component {
    render() {
        const { name, show, status } = this.props
        return (
            <li style={{
                display: show? 'block' : 'none'
            }}>
                {name}
                {": "}
                <pre>
                    {JSON.stringify(status, null, 2)}
                </pre>
            </li>
        )
    }
}

Service.propTypes = {
    name: PropTypes.string.isRequired,
    show: PropTypes.bool.isRequired
}

export default Service