export interface INewTicket {
  number: string;
  description: string;
  shortDescription: string;
}

export interface IUser {
  user_id: string;
}

export interface IProjectUpload {
  user_id: string;
  project_name: string;
  //execution_id: string; // optional
  tickets: Array<INewTicket>;
}

export interface IProjectDownload {
  user_id: string;
  project_name: string;
  execution_id: string;
}