import React, { PropTypes } from 'react'
import Checkbox from './Checkbox'

const ServiceCheckbox = ({ services, onServiceClick }) => (
    <div style={{display: 'table-cell'}}>
        {services.map(service =>
            <Checkbox
                key={service.id}
                {...service}
                shouldFetch={service.shouldFetch}
                name={service.name}
                changeHandler={() => onServiceClick(service.id)}
            />
        )}
    </div>
)

ServiceCheckbox.propTypes = {
    services: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        shouldFetch: PropTypes.bool.isRequired
    }).isRequired).isRequired,
    onServiceClick: PropTypes.func.isRequired
}

export default ServiceCheckbox