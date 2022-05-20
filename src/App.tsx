import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <div className={"nav--main"}>
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                <img width={300} src="https://avatars.githubusercontent.com/u/63500913" alt="display image"/>
                <nav className={"div--main"}>
                    <main>IA Fahim</main>
                    <small>Learning</small>
                    <address>Dhaka, Bangladesh</address>
                </nav>
            </div>
            <div className="button--email--linkedIn">
                <button>
                    Email
                </button>
                <button>
                    LinkedIn
                </button>
            </div>
            <footer>
                <a target="_blank" href="https://github.com/IAFahim">
                    <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github"/>
                </a>
                <a target="_blank" href="https://www.facebook.com/566hz">
                    <img src="https://cdn-icons-png.flaticon.com/512/20/20673.png" alt="Facebook"/>
                </a>
            </footer>

        </div>
    );
}

export default App;
