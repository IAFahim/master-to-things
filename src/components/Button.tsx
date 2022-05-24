import React from "react";
import ReactDOM from "react-dom";
import "../css/Button.css"

function Button() {
    return (
        <div className="button--email--linkedIn">
            <a href="mailto:ishtiaq.fahim@northsouth.edu?subject=Hello mister">
                <button>
                    Email
                </button>
            </a>
            <a href="https://www.linkedin.com/in/pro-grammer-pro-grammer-863761195/">
                <button>
                    LinkedIn
                </button>
            </a>
        </div>
    );
}

export default Button;