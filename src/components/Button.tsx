import React from "react";
import "../css/Button.css"

function Button() {
    return (
        <div className="button--email--linkedIn">
            <a href="mailto:ishtiaq.fahim@northsouth.edu?subject=Hello mister">
                <button className="button--email">
                    Email
                </button>
            </a>
            <a href="https://www.linkedin.com/in/pro-grammer-pro-grammer-863761195/">
                <button className="button--linkedIn">
                    LinkedIn
                </button>
            </a>
        </div>
    );
}

export default Button;