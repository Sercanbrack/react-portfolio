import React, { useEffect, useState } from 'react';
import { AboutMe, Contact, Portfolio, Resume } from './pages'

const Navigation = (props) => {

    
    return (
        <div class='Navigation six columns'>
            <h4 class='NavTab' id='aboutMe'> About Me </h4>
            <h4 class='NavTab' id='portfolio'> Portfolio </h4>
            <h4 class='NavTab' id='contact'> Contact </h4>
            <h4 class='NavTab' id='resume'> Resume </h4>
        </div>

    )
}


export default Navigation;