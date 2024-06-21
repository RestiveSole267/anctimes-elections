import React from "react";
import "./404.css"
class ErrorFeed extends React.Component{
    render(){
        return (
            <div id="404">
                <div className="fouronefour-section">
                    <h1 className="fouronefour-header">404</h1>
                    <p className="fouronefour-pagesection">Sorry! This page is unavailable at the moment due to either the page been under construction or the page hasn't be made yet. Please come back later.</p>
                </div>
            </div>
        );
    }
}

export default ErrorFeed;