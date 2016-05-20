import AddServerForm from '../components/AddServerForm'

import { connect } from 'react-redux'
import { addServer } from '../actions'

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (ip) => {
            dispatch(addServer(ip))
        }
    }
}

const AddServer = connect(null, mapDispatchToProps)(AddServerForm)

export default AddServer