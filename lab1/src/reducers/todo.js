const initValue = {
  arr: [],
};

const todos = (state = initValue, { type, payload }) => {
  switch (type) {
    case "addTodo":
      return { arr: [...state.arr, payload] };
    case "removeTodo":
      return {
        arr: state.arr.filter((e) => {
          return payload.id !== e.id;
        }),
      };

    default:
      return state;
  }
};
export const addTodo = (data) => {
  return {
    type: "addTodo",
    payload: data,
  };
};
export const removeTodo = (index) => {
  return {
    type: "removeTodo",
    payload: index,
  };
};
export default todos;
