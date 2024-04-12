import './App.css';
import {Provider, useDispatch} from 'react-redux';
import store from "../src/store";
import Test from "../src/components/test";

function App() {

  return (

      <Provider store = {store}>
        <Test/>
      </Provider>
  );
}


export default App;
