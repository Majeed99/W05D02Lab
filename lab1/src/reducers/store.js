import { combineReducers, createStore } from "redux";
import user from "./user";
import counter from "./counter";
import todos from "./todo";

const comb = combineReducers({
  user,
  counter,
  todos,
});

const store = createStore(comb);
export default store;
