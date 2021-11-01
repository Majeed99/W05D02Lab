const initialState = {
  name: "",
};
// REDUCER name
const user = (state = initialState, { type, payload }) => {
  switch (type) {
    case "add":
      return { name: payload };
    default:
      return state;
  }
};
// ACTION add
export const add = (nameOfUser) => {
  return {
    type: "add",
    payload: nameOfUser,
  };
};

export default user;
