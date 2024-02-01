import { IProjectUpload, IUser } from "./types";
import { ToastError } from '../../../components/Toast';

export const actionsTypes = {
  CREATE_USER_PROJECT_REQUEST: "@userProjects/CREATE_USER_PROJECT_REQUEST",
  CREATE_USER_PROJECT_SUCCESS: "@userProjects/CREATE_USER_PROJECT_SUCCESS",
  CREATE_USER_PROJECT_FAILURE: "@userProjects/CREATE_USER_PROJECT_FAILURE",
  GET_USER_PROJECTS_REQUEST: "@userProjects/GET_USER_PROJECTS_REQUEST",
  GET_USER_PROJECTS_SUCCESS: "@userProjects/GET_USER_PROJECTS_SUCCESS",
  GET_USER_PROJECTS_FAILURE: "@userProjects/GET_USER_PROJECTS_FAILURE",
};

const baseSelector = (state: { userProjects: any }) => state.userProjects;

export function createUserProjectRequest(description: IProjectUpload) {
  return {
    type: actionsTypes.CREATE_USER_PROJECT_REQUEST,
    payload: description,
  };
}

export function createUserProjectSuccess(execution_info: any) {
  return {
    type: actionsTypes.CREATE_USER_PROJECT_SUCCESS,
    payload: execution_info,
  };
}

export function createUserProjectFailure() {
  ToastError('Failed to upload project');
  return { type: actionsTypes.CREATE_USER_PROJECT_FAILURE };
}

export function getUserProjectsRequest(description: IUser) {
  return {
    type: actionsTypes.GET_USER_PROJECTS_REQUEST,
    payload: description,
  };
}

export function getUserProjectsSuccess(uploadedProjects: any) {
  return {
    type: actionsTypes.GET_USER_PROJECTS_SUCCESS,
    payload: uploadedProjects,
  };
}

export function getUserProjectsFailure() {
  return { type: actionsTypes.GET_USER_PROJECTS_FAILURE };
}

export const projectsSelectors = {
  userProjects: (state: { userProjects: any }) => baseSelector(state).userProjects?.data || [],
};
