import React from 'react';
import './App.css';
import Main from "./components/Main";
import Footer from "./components/Footer";
import Button from "./components/Button";
import TopNav from "./components/TopNav";

function App() {
    return (
        <div className="App">
            <TopNav/>
            <Main/>
            <Button/>
            <Footer/>
        </div>
    );
}

export default App;
