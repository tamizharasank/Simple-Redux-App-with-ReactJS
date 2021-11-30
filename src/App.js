// import logo from './logo.svg';
import {Provider} from 'react-redux';
import './App.css';
import store from './store/stores';
import { INCR, DECR } from './store/action/actions';
import Count from './pages/count';
import Main from './main';

const incr = () => {
  store.dispatch({ type: INCR });
  console.log(store.getState().counter.count);
}

const decr = () => {
  store.dispatch({ type: DECR });
  console.log(store.getState().counter.count);
}

const name = 'Hello React!';

function App() {
  return (
    <Provider store={store}>
      <div className="App"> 
      <Main name={name} />       
        {/*
        <br />
        <button onClick={() => incr()}>Increment</button>
        <button onClick={() => decr()}>Decrement</button> */}
        {/* <Form /> */}
      </div>
    </Provider>
  );
}

export default App;
