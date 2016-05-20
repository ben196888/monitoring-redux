import React, { PropTypes } from 'react'

const Checkbox = ({ shouldFetch, name, changeHandler }) => {
    return (
        <div>
            <input type='checkbox'
                onChange={e => {changeHandler()}}
                value={name}
                checked={shouldFetch}
            />
            {name}
        </div>
    )
}

Checkbox.propTypes = {
    changeHandler: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    shouldFetch: PropTypes.bool.isRequired
}

export default Checkbox