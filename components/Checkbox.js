import React, { PropTypes } from 'react'

const Checkbox = ({ status, name, changeHandler }) => {
    return (
        <div>
            <input type='checkbox'
                onChange={e => {changeHandler()}}
                value={name}
                checked={status}
            />
            {name}
        </div>
    )
}

Checkbox.propTypes = {
    changeHandler: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired
}

export default Checkbox