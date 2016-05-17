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
        getServicesStatus: (ip, services) => {
            setInterval(() => {
                dispatch(getServicesStatus(ip, services))
            }, 10*1000)
        }
    }
}

const ListServer = connect(mapStateToProps, mapDispatchToProps)(ServerList)

export default ListServer