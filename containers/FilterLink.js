import Link from '../components/Link'

import { connect } from 'react-redux'
import { setServiceFilter } from '../actions'

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.serviceFilter
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setServiceFilter(ownProps.filter))
        }
    }
}

let FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)

export default FilterLink