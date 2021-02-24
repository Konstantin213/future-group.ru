import './App.css';
import React from 'react'
import {Route} from "react-router-dom";
import PrimaryPage from "./components/PrimaryPage/PrimaryPage";

const App = () => {
    return (
        <Route path="/" render={() => <PrimaryPage/>}/>
    );
}
export default App;
