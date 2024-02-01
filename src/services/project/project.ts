import { IUser, IProjectUpload, IProjectDownload } from "../../store/modules/project/types";
import { AxiosResponse } from "axios";
import { api } from "../api";

export async function uploadProject(project_info: IProjectUpload): Promise<AxiosResponse<any>> {
  return api.post("/api/v2/upload-tickets", project_info, 
  );
}

export async function getUserProjects(user: any): Promise<AxiosResponse<any>> {
  return api.get("/api/v2/get-projects", {params: user}
  );
}

export async function getProjectExecutionResult(project_info: any): Promise<AxiosResponse<any>> {
  return api.get("/api/v2/get-result", {params: project_info}
  );
}
