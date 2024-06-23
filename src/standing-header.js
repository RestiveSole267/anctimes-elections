import React from "react";
import "./App.css";
import RSPAN from "./R-SPAN.png"

class StandingHeader extends React.Component{
    render(){
        return (
            <div id='standing-header'>
                <a href="https://ro-span.org/" className='header'>TheAnchorageTimes</a>
            </div>
        );
    }
}

export default StandingHeader;