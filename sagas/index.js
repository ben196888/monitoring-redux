import { watchPollServiceStatus } from './serviceStatus'

export default function* rootSaga() {
    yield [
        watchPollServiceStatus()
    ]
}