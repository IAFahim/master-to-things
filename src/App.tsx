import React, {useState} from 'react';
import './App.css';
import Main from "./components/Main";
import Footer from "./components/Footer";
import Button from "./components/Button";
import TopNav from "./components/TopNav";
import FilePicker from "./components/FilePicker"

function App() {

    return (
        <div className="App">
            <TopNav/>
            <FilePicker/>
            <Main/>
            <Button/>
            <Footer/>
        </div>
    );
}

export default App;
