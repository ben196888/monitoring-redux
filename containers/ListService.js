import ServiceList from '../components/ServiceList'

import { connect } from 'react-redux'

const getVisibleServices = (services, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return services
        case 'SHOW_HW':
            // TODO
            return services
        case 'SHOW_OSD':
            // TODO
            return services
        default:
            return services
    }
}

const mapStateToProps = (state) => {
    return {
        services: getVisibleServices(state.services, state.serviceFilter)
    }
}

const ListService = connect(mapStateToProps, null)(ServiceList)

export default ListService