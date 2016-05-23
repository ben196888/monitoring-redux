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
        pollStatus: (ip, services) => {
            console.log("time to dispatch")
            dispatch(pollServiceStatus(ip, services))
        }
    }
}

const ListServer = connect(mapStateToProps, mapDispatchToProps)(ServerList)

export default ListServer