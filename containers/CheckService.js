import ServiceCheckbox from '../components/ServiceCheckbox'

import { connect } from 'react-redux'
import { toggleService } from '../actions'

const mapStateToProps = (state) => {
    return {
        services: state.services
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeHandler: () => {
            dispatch(toggleService(ownProps.serviceName))
        }
    }
}

let CheckService = connect(
    mapStateToProps,
    mapDispatchToProps
)(ServiceCheckbox)

export default CheckService