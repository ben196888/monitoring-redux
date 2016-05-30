import React, { PropTypes } from 'react'

const Checkbox = ({ shouldFetch, name, changeHandler }) => {
    return (
        <div style={{ width: '150px',
                    display: 'inline-block',
                    background: shouldFetch?'white':'blue' }}
             onClick={changeHandler()}>
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