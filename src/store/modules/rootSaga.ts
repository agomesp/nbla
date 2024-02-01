/* eslint-disable @typescript-eslint/no-explicit-any */
import { all, fork } from "redux-saga/effects";

// import demoHome from "./demoHome/sagas";
import projectSagas from "./project/sagas";
import projectResultsSagas from "./projectResult/sagas";

interface TypedIterableIterator<T, N> {
  // eslint-disable-next-line no-unused-vars
  next(value: N): T;
}

export default function* rootSaga(): TypedIterableIterator<any, any> {
  return yield all([
    fork(projectSagas),
    fork(projectResultsSagas)
  ]);
}
