/* eslint-disable no-unused-vars */
import { AxiosResponse } from "axios";
import { takeLatest, call, put, all, fork } from "redux-saga/effects";

import { uploadProject, getUserProjects, getProjectExecutionResult } from "../../../services/project/project";

import {
  actionsTypes,
  getProjectResultsSuccess,
  getProjectResultsFailure
} from "./actions";
import { IProjectDownload } from "./types";

interface TypedIterableIterator<T, N = any> {
  next(value: N): T;
}

export function* listProjectResults({
  payload,
}: {
  payload: IProjectDownload;
  type: typeof actionsTypes.GET_PROJECT_RESULTS_REQUEST;
}) {
  try {
    const response: AxiosResponse = yield call(getProjectExecutionResult, payload);
    yield put(getProjectResultsSuccess(response));
  } catch (error: any) {
    yield put(getProjectResultsFailure());
  }
}

export default function* projectResultsSagas() {
  yield all([
    fork(function* root(): TypedIterableIterator<any, any> {
      return [
        yield takeLatest(
          actionsTypes.GET_PROJECT_RESULTS_REQUEST,
          listProjectResults
        ),
      ];
    }),
  ]);
}
