import React from "react";
import ReactDOM from "react-dom";
import "../css/Button.css"

function Button() {
    return (
        <div className="button--email--linkedIn">
            <button>
                Email
            </button>
            <button>
                LinkedIn
            </button>
        </div>
    );
}

export default Button;