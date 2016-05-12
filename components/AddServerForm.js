import React from 'react'

let AddServerForm = ({ onSubmit }) => {
    let input

    return(
        <div>
            <form onSubmit={e => { onSubmit(input.value) }}>
                <input ref={node => {input = node}} />
                <button type="submit">Add Server</button>
            </form>
        </div>
    )
}

export default AddServerForm