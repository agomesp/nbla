import { IProjectUpload, IProjectDownload, IUser } from "./types";
import { ToastLoading } from '../../../components/Toast';

export const actionsTypes = {
  GET_PROJECT_RESULTS_REQUEST: "@projectResults/GET_PROJECT_RESULTS_REQUEST",
  GET_PROJECT_RESULTS_SUCCESS: "@projectResults/GET_PROJECT_RESULTS_SUCCESS",
  GET_PROJECT_RESULTS_FAILURE: "@projectResults/GET_PROJECT_RESULTS_FAILURE",
};

const baseSelector = (state: { projectResults: any }) => state.projectResults;

export function getProjectResultsRequest(description: IProjectDownload) {
  ToastLoading(`Downloading project ${description?.project_name}`);
  return {
    type: actionsTypes.GET_PROJECT_RESULTS_REQUEST,
    payload: description,
  };
}

export function getProjectResultsSuccess(tickets: any) {
  return {
    type: actionsTypes.GET_PROJECT_RESULTS_SUCCESS,
    payload: tickets,
  };
}

export function getProjectResultsFailure() {
  return { type: actionsTypes.GET_PROJECT_RESULTS_FAILURE };
}

export const projectResultsSelectors = {
  projectResults: (state: { projectResult: any }) => baseSelector(state).projectResults?.data || [],
};
