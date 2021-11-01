const initValue = {
  num: 0,
};
const counter = (state = initValue, { type, payload }) => {
  switch (type) {
    case "increment":
      return { num: state.num + payload };
    case "decrement":
      return { num: state.num - payload };
    case "reset":
      return { num: 0 };
    default:
      return state;
  }
};
export const increment = (num) => {
  return {
    type: "increment",
    payload: num,
  };
};
export const decrement = (num) => {
  return {
    type: "decrement",
    payload: num,
  };
};
export const reset = (num) => {
  return {
    type: "reset",
    payload: num,
  };
};
export default counter;
