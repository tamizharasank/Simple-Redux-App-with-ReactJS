import { connect } from "react-redux";
import { INCR, DECR, SET_DATA, REM_DATA } from "../store/action/actions";
import axios from "axios";

let count = (props) => {
  return (
    <>
      <h1>Home</h1>
      <h1>
        {props.name} {props.count}
      </h1>
      <button onClick={() => props.increment()}>Increment</button>
      <button onClick={() => props.decrement()}>Decrement</button>
      <br />
      <button onClick={() => props.setData()}>getData</button>
      <button onClick={() => props.removeData()}>removeData</button>
      <br />
      {props.data.map((x, i) => (
        <div key={i}>{x.title}</div>
      ))}
    </>
  );
};

const getData = () => {
  return (dispatch, getState) => {
    console.log("State => ", getState());
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log("Data fetched");
        dispatch({ type: SET_DATA, data: response.data });
      })
      .catch((error) => console.error(error));
  };
};

const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
    data: state.storage.data || [],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch({ type: INCR });
    },
    decrement: () => {
      dispatch({ type: DECR });
    },
    setData: () => {
      dispatch(getData());
    },
    removeData: () => {
      dispatch({ type: REM_DATA });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(count);
