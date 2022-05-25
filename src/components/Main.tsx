import React from "react";
import "../css/Main.css";

function Main() {
    return (
        <div className={"nav--main"}>
            <img width={300} src="https://avatars.githubusercontent.com/u/63500913" alt="display image"/>
            <nav className={"div--main"}>
                <main>IA Fahim</main>
                <small>Learning</small>
                <address>Dhaka, Bangladesh</address>
            </nav>
        </div>
    );
}

export default Main;