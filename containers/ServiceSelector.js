import ServiceCheckbox from '../components/ServiceCheckbox'

import { connect } from 'react-redux'
import { toggleService } from '../actions'

const mapStateToProps = (state) => {
    return {
        services: state.services
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onServiceClick: (id) => {
            dispatch(toggleService(id))
        }
    }
}

const ServiceSelector = connect(
    mapStateToProps,
    mapDispatchToProps
)(ServiceCheckbox)

export default ServiceSelector