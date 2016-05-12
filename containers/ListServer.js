import ServerList from '../components/ServerList'

import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        servers: state.servers
    }
}

const ListServer = connect(mapStateToProps, null)(ServerList)

export default ListServer