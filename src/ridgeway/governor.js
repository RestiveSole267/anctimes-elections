import React from "react";
import moment from "moment";
import CheckIcon from '@material-ui/icons/Check';
import "../App.css";

class RidgewayGovernor extends React.Component{
    render(){
        const ctime = moment().format('h:mm a')
        return(
            <div className="election-feed">
                <div className='section-header'>
                    <p className='status-live'> <b>LIVE</b>: Last Updated {ctime} E.T.</p>
                    <h1 className='election-primary-name'>Ridgeway Governor Election Results</h1>
                </div>
                <div className='governor-section'>
                    <p className='election-desc'>Matrix_oc, the incumbent Governor of Ridgeway, is running for a second term as Governor. Despite going to war with neighboring ro-state Firestone, Mr. Matrix is considered to be the favorite in the race. His challenger is DanielReagan, the incumbent Sheriff of RCSO, who has positioned himself as the more radical choice. </p>
                    <div className='candidate-table-1'>
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
                                <div className='can-name1'>Matrix_oc* <CheckIcon className="checkicon" style={{ fontSize: 12 }}></CheckIcon></div>
                                <div className='can-party'>Independent</div>
                                <div className='can-votes'>308</div>
                                <div className='can-pct'>52.92%</div>
                            </tr>
                            <tr className='candidate-2'>
                                <div className='can-partycolor-ind'></div>
                                <div className='can-name2'>DanielReagan</div>
                                <div className='can-party'>Independent</div>
                                <div className='can-votes'>274</div>
                                <div className='can-pct'>47.08%</div>
                            </tr>
                        </table>
                        <div className='footer-table'>
                            <p className='footnote-title'>*Incumbent</p>
                            <p className='reported-title'>Total Reported: 582 votes</p>
                        </div>
                    </div>
                    <h1 className='election-name1'>Results by city</h1>
                    <div className='candidate-table-1'>
                        <div className='updated-info-table'>
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
                                <div className='can-name1'>Matrix_oc* <CheckIcon className="checkicon" style={{ fontSize: 12 }}></CheckIcon></div>
                                <div className='can-party'>Independent</div>
                                <div className='can-votes'>308</div>
                                <div className='can-pct'>52.92%</div>
                            </tr>
                            <tr className='candidate-2'>
                                <div className='can-partycolor-ind'></div>
                                <div className='can-name2'>DanielReagan</div>
                                <div className='can-party'>Independent</div>
                                <div className='can-votes'>274</div>
                                <div className='can-pct'>47.08%</div>
                            </tr>
                            <tr className='candidate-2'>
                                <div className='can-partycolor-ind'></div>
                                <div className='can-name2'>DanielReagan</div>
                                <div className='can-party'>Independent</div>
                                <div className='can-votes'>274</div>
                                <div className='can-pct'>47.08%</div>
                            </tr>
                            <tr className='candidate-2'>
                                <div className='can-partycolor-ind'></div>
                                <div className='can-name2'>DanielReagan</div>
                                <div className='can-party'>Independent</div>
                                <div className='can-votes'>274</div>
                                <div className='can-pct'>47.08%</div>
                            </tr>
                            <tr className='candidate-2'>
                                <div className='can-partycolor-ind'></div>
                                <div className='can-name2'>DanielReagan</div>
                                <div className='can-party'>Independent</div>
                                <div className='can-votes'>274</div>
                                <div className='can-pct'>47.08%</div>
                            </tr>
                            <tr className='candidate-2'>
                                <div className='can-partycolor-ind'></div>
                                <div className='can-name2'>DanielReagan</div>
                                <div className='can-party'>Independent</div>
                                <div className='can-votes'>274</div>
                                <div className='can-pct'>47.08%</div>
                            </tr>
                        </table>
                        <div className='footer-table'>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default RidgewayGovernor;