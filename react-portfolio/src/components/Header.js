import React from "react";
import Navigation from './Navigation'

const Header = () => {
    return (
        <div className="Header container">
            <h1 class="six columns">Sam Ercanbrack</h1>
            {<Navigation />}
        </div>
    )
}

export default Header;