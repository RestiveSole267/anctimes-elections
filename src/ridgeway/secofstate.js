import React from "react";
import moment from "moment";
import { Link } from "react-router-dom"
import CheckIcon from '@material-ui/icons/Check';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import "../App.css";

class RidgewaySecofState extends React.Component{
    render(){
        const ctime = moment().format('h:mm a')
        return(
            <div className="election-feed">
                <div className='section-header'>
                    <p className='status-live'> <b>LIVE</b>: Last Updated {ctime} E.T.</p>
                    <h1 className='election-primary-name'>Ridgeway Secretary of State Election Results</h1>
                    <Link to="/anctimes-elections/ridgeway" className='election-link'>{'<'} See all Ridgeway State Results</Link>
                    <p className='election-desc'>JasonBourneAxis, the incumbent Secretary of State of Ridgeway, is running for a third term as Sec. of State. His challenger is AlexNeptunes, who has proven to be the more popular choice.</p>
                </div>
                <div className='governor-section'>
                <p className='election-desc'></p>
                    <div className='candidate-table-1'>
                        <div className="winner-box">
                            <h2 className="winner-text">WINNER <CheckCircleIcon className="checkcircleicon" style={{ fontSize: 12 }}></CheckCircleIcon></h2>
                            <p className="box-text">AlexNeptunes, Indep., wins the Secretary of State's race in Ridgeway.</p>
                            <p className="race-called">Race called by The Palmer Times</p>
                        </div>
                        <div className='updated-info-table'>
                            <p className='last-update-title'>Latest results from {ctime} ET</p>
                            <p className='cerified-votes-title'>100% Reported</p>
                        </div>
                        <table className='candidate-table-body'>
                            <thead className='table-head-info'>
                                <div className='candidate-title'>Candidate</div>
                                <div className='party-title'>Party</div>
                                <div className='votes-title'>Votes</div>
                                <div className='pct-title'>PCT.</div>
                            </thead>
                            <tr className='candidate-1'>
                                <div className='can-partycolor-ind'></div>
                                <div className='can-name1'>AlexNeptunes <CheckIcon className="checkicon" style={{ fontSize: 12 }}></CheckIcon></div>
                                <div className='can-party'>Independent</div>
                                <div className='can-votes'>246</div>
                                <div className='can-pct'>52.27%</div>
                            </tr>
                            <tr className='candidate-2'>
                                <div className='can-partycolor-ind'></div>
                                <div className='can-name2'>JasonBourneAxis*</div>
                                <div className='can-party'>Independent</div>
                                <div className='can-votes'>225</div>
                                <div className='can-pct'>47.73%</div>
                            </tr>
                        </table>
                        <div className='footer-table'>
                            <p className='footnote-title'>*Incumbent</p>
                            <p className='reported-title'>Total Reported: 471 votes</p>
                        </div>
                    </div>
                    <h1 className='election-name1'>Results by district</h1>
                    <div className='candidate-table-1'>
                        <div className='updated-info-table'>
                        </div>
                        <table className='candidate-table-body'>
                            <thead className='table-head-info'>
                                <div className='candidate-title'>District</div>
                                <div className='party-title'>Alex</div>
                                <div className='votes-title1'>Jason</div>
                                <div className='pct-title'>% In.</div>
                            </thead>
                            <tr className='city-1'>
                                <div className='city-empty-body'></div>
                                <div className='city-name'>Palmer</div>
                                <div className='can1-party'>55%</div>
                                <div className='can-votes'>45%</div>
                                <div className='can-pct'>100%</div>
                            </tr>
                            <tr className='candidate-2'>
                                <div className='city-empty-body'></div>
                                <div className='city-name'>Sterling</div>
                                <div className='can1-party'>58%</div>
                                <div className='can-votes'>42%</div>
                                <div className='can-pct'>100%</div>
                            </tr>
                            <tr className='candidate-2'>
                                <div className='city-empty-body'></div>
                                <div className='city-name'>Oakland</div>
                                <div className='can1-party'>60%</div>
                                <div className='can-votes'>40%</div>
                                <div className='can-pct'>100%</div>
                            </tr>
                            <tr className='candidate-2'>
                                <div className='city-empty-body'></div>
                                <div className='city-name'>Milton</div>
                                <div className='can1-party'>68%</div>
                                <div className='can-votes'>42%</div>
                                <div className='can-pct'>100%</div>
                            </tr>
                            <tr className='candidate-2'>
                                <div className='city-empty-body'></div>
                                <div className='city-name'>Alder</div>
                                <div className='can1-party'>65%</div>
                                <div className='can-votes'>35%</div>
                                <div className='can-pct'>100%</div>
                            </tr>
                            <tr className='candidate-2'>
                                <div className='city-empty-body'></div>
                                <div className='city-name'>Cyprus Acres</div>
                                <div className='can1-party'>53%</div>
                                <div className='can-votes'>48%</div>
                                <div className='can-pct'>100%</div>
                            </tr>
                        </table>
                        <div className='footer-table'>
                        </div>
                    </div>
                </div>
                <p className='election-credits'>Source: Election results and race calls are from R-SPAN, The Palmer Times, The Anchorage Times and Ridgeway State Board of Elections.</p>
                <p className='election-credits'>Produced & Edited by RestiveSole267 (Uh_Cam)</p>
            </div>

        );
    }
}

export default RidgewaySecofState;