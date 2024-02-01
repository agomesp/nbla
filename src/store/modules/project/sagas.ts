/* eslint-disable no-unused-vars */
import { AxiosResponse } from "axios";
import { takeLatest, call, put, all, fork } from "redux-saga/effects";

import { uploadProject, getUserProjects } from "../../../services/project/project";

import {
  actionsTypes,
  createUserProjectSuccess,
  createUserProjectFailure,
  getUserProjectsSuccess,
  getUserProjectsFailure,
} from "./actions";
import { IUser, IProjectUpload } from "./types";
import { useNavigate } from "react-router-dom";

interface TypedIterableIterator<T, N = any> {
  next(value: N): T;
}

export function* uploadUserProject({
  payload,
}: {
  payload: any;
  type: typeof actionsTypes.CREATE_USER_PROJECT_REQUEST;
}) {
  try {
    console.log('uploadUserProject payload call', payload);
    const project = {
      user_id: payload.user_id,
      project_name: payload.project_name,
      tickets: payload.tickets
    }

    const response: AxiosResponse = yield call(uploadProject, project);
    console.log('uploadUserProject response AxiosResponse', response);
    yield put(createUserProjectSuccess(response));
    payload.navigate('/');
  } catch (error: any) {
    console.error('createUserProjectFailure error', error);
    yield put(createUserProjectFailure());
    payload.setLoading(false);
  }
}

export function* listUserProjects({
  payload,
}: {
  payload: IUser;
  type: typeof actionsTypes.GET_USER_PROJECTS_REQUEST;
}) {
  try {
    console.log('listUserProjects payload call', payload);
    const response: AxiosResponse = yield call(getUserProjects, payload);
    console.log('listUserProjects response AxiosResponse', response);
    yield put(getUserProjectsSuccess(response));
  } catch (error: any) {
    yield put(getUserProjectsFailure());
  }
}

export default function* projectSagas() {
  yield all([
    fork(function* root(): TypedIterableIterator<any, any> {
      return [
        yield takeLatest(
          actionsTypes.CREATE_USER_PROJECT_REQUEST,
          uploadUserProject
        ),
        yield takeLatest(
          actionsTypes.GET_USER_PROJECTS_REQUEST,
          listUserProjects
        ),
      ];
    }),
  ]);
}
