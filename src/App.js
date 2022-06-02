// import logo from './logo.svg';
import './App.css';
import Main from './Main';
import {Helmet} from "react-helmet";
import {reducer , initialState} from './reducer/popupreducer';
import { createContext, useReducer } from 'react';
import { BrowserRouter , Routes , Route} from "react-router-dom";
import ThankYou from './components/ThankYou';

export const popcontext = createContext();
function App() {
  const [state , dispatch] = useReducer(reducer , initialState);
  return (
    <>
    <popcontext.Provider value={{state , dispatch}}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/Thankyou" element={<ThankYou />}/>
      </Routes>
    </BrowserRouter>
    </popcontext.Provider>
    </>
  );
}

export default App;
