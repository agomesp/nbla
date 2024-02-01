import { combineReducers } from "redux";
import language from "./language/reducer";
import userProjects from "./project/reducer";
import projectResults from "./projectResult/reducer";

export default combineReducers({
  language,
  userProjects,
  projectResults,
});
