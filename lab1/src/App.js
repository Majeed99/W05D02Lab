import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import { add } from "./reducers/user";
import { increment, decrement, reset } from "./reducers/counter";
import { addTodo, removeTodo } from "./reducers/todo";
function App() {
  let [input, setInput] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => {
        for (let index = 0; index < 10; index++) {
          let e = response.data[index];
          dispatch(addTodo(e));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const allState = useSelector((allState) => {
    return {
      userName: allState.user.name,
      num: allState.counter.num,
      arrTodo: allState.todos.arr,
    };
  });
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <b>User name: </b>
          {allState.userName}
        </div>
        <input
          placeholder="Enter user name here"
          type="text"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            dispatch(add(input));
          }}
        >
          Change
        </button>
        <hr />
        <div>The result of counter is: {allState.num}</div>
        <div className="row">
          <button
            onClick={() => {
              dispatch(increment(10));
            }}
          >
            {" "}
            increment by 10
          </button>
          <button
            onClick={() => {
              dispatch(decrement(10));
            }}
          >
            {" "}
            decrement by 10
          </button>
          <button
            onClick={() => {
              dispatch(reset());
            }}
          >
            {" "}
            reset to 0
          </button>
        </div>
        <hr />

        <div>
          {allState.arrTodo.map((el, i) => {
            return (
              <div>
                <p>{el.title}</p>
                <button
                  onClick={() => {
                    dispatch(removeTodo(el));
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
