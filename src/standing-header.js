import React from "react";
import "./App.css";
import RSPAN from "./R-SPAN.png"

class StandingHeader extends React.Component{
    render(){
        return (
            <div id='standing-header'>
                <div className="sub-headers">
                    <a href="https://ro-span.org/" className='header'><img src={RSPAN} width="87" height="20" className="R-SPAN" atl="R-SPAN"></img>/ TheAnchorageTimes</a>
                </div>
            </div>
        );
    }
}

export default StandingHeader;