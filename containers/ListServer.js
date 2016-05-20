import ServerList from '../components/ServerList'

import { connect } from 'react-redux'
import { getServicesStatus } from '../actions'

const mapStateToProps = (state) => {
    return {
        servers: state.servers,
        services: state.services
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getStatus: (ip, services) => {
            console.log("time to dispatch")
            dispatch(getServicesStatus(ip, services))
        }
    }
}

const ListServer = connect(mapStateToProps, mapDispatchToProps)(ServerList)

export default ListServer