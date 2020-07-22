import { put, call, all, spawn } from "redux-saga/effects"
import { apiService } from "./services"
import * as types from "./constants"
function* nestedobjectconnector1_post_addApple_readWorker(action) {
  try {
    const result = yield call(
      apiService.nestedobjectconnector1_post_addApple_read,
      action
    )
    yield put(
      actions.nestedobjectconnector1_post_addApple_readSucceeded(result)
    )
  } catch (err) {
    yield put(actions.nestedobjectconnector1_post_addApple_readFailed(err))
  }
}
function* nestedobjectconnector1_post_addApple_readWatcher() {
  yield takeEvery(
    types.NESTEDOBJECTCONNECTOR1_POST_ADD_APPLE_READ,
    nestedobjectconnector1_post_addApple_readWorker
  )
}
export default function* rootSaga() {
  const sagas = [nestedobjectconnector1_post_addApple_readWatcher]
  yield all(
    sagas.map(saga =>
      spawn(function*() {
        while (true) {
          try {
            yield call(saga)
            break
          } catch (e) {
            console.log(e)
          }
        }
      })
    )
  )
}
