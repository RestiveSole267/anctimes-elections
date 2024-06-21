import React from "react";
import { Link } from "react-router-dom"
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import "./App.css"

class ElectionNavBar extends React.Component{
    render(){
        return (
            <div id='election-header'>
                <Link to='/anctimes-elections' className='election-logo'>
                    <rect className="two"><b><span className="two-text">2</span></b></rect>
                    <rect className="zero"><b><span className="two-text">0</span></b></rect>
                    <rect className="two-1"><b><span className="two-text">2</span></b></rect>
                    <rect className="four"><b><span className="two-text">4</span></b></rect>
                </Link>
                <Link to="/anctimes-elections/anchorage" className='anchorage-head'>Anchorage</Link>
                <Link to="/anctimes-elections/ridgeway" className='ridgeway-head'>Ridgeway</Link>
                <Link to="/anctimes-elections/harrison" className='harrison-head'>Harrison</Link>
                <Link to="/anctimes-elections/state-results" className='stateresults-head'>State Results <KeyboardArrowDownIcon className="downarrow" style={{ fontSize: 12}}></KeyboardArrowDownIcon></Link>
            </div>
        );
    }
}

export default ElectionNavBar;