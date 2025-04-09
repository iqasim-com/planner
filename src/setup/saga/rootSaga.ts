import { all } from "redux-saga/effects";
import { watchAuth } from "../../app/modules/redux/auth/authSaga";

export default function* rootSaga () {
  yield all([
    watchAuth()
  ])
}