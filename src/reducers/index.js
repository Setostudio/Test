import { combineReducer } from "redux";
import firstReducer from "./firstReducer";
import secondReducer from "./secondReducer";

const allreducer = combineReducer({
  firstReducer,
  secondReducer
});
export default allreducer;
