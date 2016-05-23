import ServerList from '../components/ServerList'

import { connect } from 'react-redux'
import { pollServiceStatus } from '../actions'

const mapStateToProps = (state) => {
    return {
        servers: state.servers,
        services: state.services
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        pollStatus: (ip, id, name) => {
            console.log("time to dispatch")
            dispatch(pollServiceStatus({ip, id, name}))
        }
    }
}

const ListServer = connect(mapStateToProps, mapDispatchToProps)(ServerList)

export default ListServer