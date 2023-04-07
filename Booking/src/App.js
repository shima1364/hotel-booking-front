
import './App.css';
import DataContextProvider from './context/DataContextProvider';
import Router from './router/Router';
import { useState,useEffect} from "react";

function App() {

  return (
    <DataContextProvider>
      <Router/>
    </DataContextProvider>
  );
}

export default App;
