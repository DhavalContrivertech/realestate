// import logo from './logo.svg';
import './App.css';
import Main from './Main';
import {Helmet} from "react-helmet";
import {reducer , initialState} from './reducer/popupreducer';
import { createContext, useReducer } from 'react';

export const popcontext = createContext();
function App() {
  const [state , dispatch] = useReducer(reducer , initialState);
  return (
    <>
    <popcontext.Provider value={{state , dispatch}}>
      <Main />
    </popcontext.Provider>
    </>
  );
}

export default App;
