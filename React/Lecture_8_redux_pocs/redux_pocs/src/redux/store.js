import { createStore } from "redux";
import CounterReducer from "./CounterReducer";
console.log("store")
const store = createStore(CounterReducer);
export default store;