import React from "react";
import moment from "moment";
import CheckIcon from '@material-ui/icons/Check';
import "../App.css";

class RidgewayElectionFeed extends React.Component{
    render(){
        const ctime = moment().format('h:mm')
        return (
            <div className='election-feed'>
                <div className='section-header'>
                    <p className='status-live'> <b>LIVE</b>: Last Updated {ctime} p.m. E.T</p>
                    <h1 className='election-primary-name'>Ridgeway Primary Election Results</h1>
                </div>
                <div className='governor-section'>
                    <h1 className='election-name'>Governor</h1>
                    <p className='election-desc'>Governor Matrix_oc, a Independent, is facing DanielReagan, the incumbent Sheriff of the Ridgeway Sheriffs Office, in the Ridgeway Gubernatorial Primary Race.</p>
                    <div className='candidate-table-1'>
                        <div className='updated-info-table'>
                            <p className='last-update-title'>Latest results from {ctime} p.m. ET</p>
                            <p className='cerified-votes-title'>VOTE TOTALS CERTIFIED</p>
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
                                <div className='can-name-unoffical'>Matrix_oc* </div>
                                <div className='can-party'>Independent</div>
                                <div className='can-votes'>N/A</div>
                                <div className='can-pct'>39.86%</div>
                            </tr>
                            <tr className='candidate-2'>
                                <div className='can-partycolor-ind'></div>
                                <div className='can-name2'>DanielReagan</div>
                                <div className='can-party'>Independent</div>
                                <div className='can-votes'>N/A</div>
                                <div className='can-pct'>60.14%</div>
                            </tr>
                        </table>
                        <div className='footer-table'>
                            <p className='footnote-title'>*Incumbent</p>
                            <p className='reported-title'>{'>'}25% Reported</p>
                        </div>
                    </div>
                </div>
                <div className='secstate-section'>
                    <h1 className='election-name'>Secretary of State</h1>
                    <p className='election-desc'>JasonBourneAxis, is currently locked in a tight race with AlexNeptunes, a Independent, to keep his post as Secretary of State of Ridgeway. </p>
                    <div className='candidate-table-1'>
                        <div className='updated-info-table'>
                            <p className='last-update-title'>Latest results from {ctime} p.m. E.T.</p>
                            <p className='cerified-votes-title'>VOTE TOTALS CERTIFIED</p>
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
                                <div className='can-name-unoffical'>JasonBourneAxis*</div>
                                <div className='can-party'>Independent</div>
                                <div className='can-votes'>N/A</div>
                                <div className='can-pct'>47.06%</div>
                            </tr>
                            <tr className='candidate-2'>
                                <div className='can-partycolor-ind'></div>
                                <div className='can-name2'>AlexNeptunes</div>
                                <div className='can-party'>Independent</div>
                                <div className='can-votes'>N/A</div>
                                <div className='can-pct'>52.94%</div>
                            </tr>
                        </table>
                        <div className='footer-table'>
                            <p className='footnote-title'>*Incumbent</p>
                            <p className='reported-title'>{'>'}25% Reported</p>
                        </div>
                    </div>
                </div>
                <div className='statesenate-section'>
                    <h1 className='election-name'>State Senate</h1>
                    <p className='election-desc'></p>
                    <div className='candidate-table-1'>
                        <div className='updated-info-table'>
                            <p className='last-update-title'>Latest results from June 4</p>
                            <p className='cerified-votes-title'>VOTE TOTALS CERTIFIED</p>
                        </div>
                        <table className='candidate-table-body'>
                            <thead className='table-head-info'>
                                <div className='candidate-title'>District</div>
                                <div className='party-title'>Candidates </div>
                                <div className='votes-title'></div>
                                <div className='pct-title'>Votes in</div>
                            </thead>
                            <tr className='candidate-1'>
                                <div className='can-partycolor-small'></div>
                                <div className='can-district'>1</div>
                                <div className='can-body1-ind1'>
                                    <div className='can-name-small'>adictivefruits</div>
                                    <div className='can-party-small'>Ind.</div>
                                    <div className='can-party-pct'>72%</div>
                                    <CheckIcon className="checkicon-small1" style={{ fontSize: 12 }}></CheckIcon>
                                </div>
                                <div className='can-body2-ind1'>
                                    <div className='can-name-small1b'>TrendLuv</div>
                                    <div className='can-party-small'>Ind.</div>
                                    <div className='can-party-pct'>28%</div>
                                </div>
                                <div className='can-pct-small'>100%</div>
                            </tr>
                            <tr className='candidate-2'>
                                <div className='can-partycolor-small'></div>
                                <div className='can-district'>2</div>
                                <div className='can-body1-ind2'>
                                    <div className='can-name-small'>vincefant*</div>
                                    <div className='can-party-small'>Ind.</div>
                                    <div className='can-party-pct'>88%</div>
                                    <CheckIcon className="checkicon-small2" style={{ fontSize: 12 }}></CheckIcon>
                                </div>
                                <div className='can-body2-ind2'>
                                    <div className='can-name-small2b'>CheifAtreides</div>
                                    <div className='can-party-small'>Ind.</div>
                                    <div className='can-party-pct'>12%</div>
                                </div>
                                <div className='can-pct-small'>100%</div>
                            </tr>
                            <tr className='candidate-3'>
                                <div className='can-partycolor-small'></div>
                                <div className='can-district'>3</div>
                                <div className='can-body1-ind3'>
                                    <div className='can-name-small'>Br1452232*</div>
                                    <div className='can-party-small'>Ind.</div>
                                    <div className='can-party-pct'>61%</div>
                                    <CheckIcon className="checkicon-small3" style={{ fontSize: 12 }}></CheckIcon>
                                </div>
                                <div className='can-body2-ind3'>
                                    <div className='can-name-small3b'>OmniGalaxy</div>
                                    <div className='can-party-small'>Ind.</div>
                                    <div className='can-party-pct'>39%</div>
                                </div>
                                <div className='can-pct-small'>100%</div>
                            </tr>
                            <tr className='candidate-3'>
                                <div className='can-partycolor-small'></div>
                                <div className='can-district'>4</div>
                                <div className='can-body1-ind4'>
                                    <div className='can-name-small'>Stanley_Labson</div>
                                    <div className='can-party-small'>Lib.</div>
                                    <div className='can-party-pct'>53%</div>
                                    <CheckIcon className="checkicon-small4" style={{ fontSize: 12 }}></CheckIcon>
                                </div>
                                <div className='can-body2-ind4'>
                                    <div className='can-name-small4b'>Timbowalk*</div>
                                    <div className='can-party-small'>Ind.</div>
                                    <div className='can-party-pct'>44%</div>
                                </div>
                                <div className='can-pct-small'>100%</div>
                            </tr>
                            <tr className='candidate-3'>
                                <div className='can-partycolor-small'></div>
                                <div className='can-district'>5</div>
                                <div className='can-body1-ind5'>
                                    <div className='can-name-small'>SOURCED_V</div>
                                    <div className='can-party-small'>Ind.</div>
                                    <div className='can-party-pct'></div>
                                    <CheckIcon className="checkicon-small5" style={{ fontSize: 12 }}></CheckIcon>
                                </div>
                                <div className='can-body2-ind5'>
                                    <div className='can-name-small'>Uncontested</div>
                                    <div className='can-party-small'></div>
                                    <div className='can-party-pct'></div>
                                </div>
                                <div className='can-pct-small'></div>
                            </tr>
                            <tr className='candidate-3'>
                                <div className='can-partycolor-small'></div>
                                <div className='can-district'>6</div>
                                <div className='can-body1-ind6'>
                                    <div className='can-name-small'>xXBoomblast339Xx</div>
                                    <div className='can-party-small'>Ind.</div>
                                    <div className='can-party-pct'></div>
                                    <CheckIcon className="checkicon-small6" style={{ fontSize: 12 }}></CheckIcon>
                                </div>
                                <div className='can-body2-ind6'>
                                    <div className='can-name-small'>Uncontested</div>
                                    <div className='can-party-small'></div>
                                    <div className='can-party-pct'></div>
                                </div>
                                <div className='can-pct-small'></div>
                            </tr>
                            <tr className='candidate-3'>
                                <div className='can-partycolor-small'></div>
                                <div className='can-district'>7</div>
                                <div className='can-body1-ind7'>
                                    <div className='can-name-small'>Akogie</div>
                                    <div className='can-party-small'>Ind.</div>
                                    <div className='can-party-pct'></div>
                                    <CheckIcon className="checkicon-small7" style={{ fontSize: 12 }}></CheckIcon>
                                </div>
                                <div className='can-body2-ind7'>
                                    <div className='can-name-small'>Uncontested</div>
                                    <div className='can-party-small'></div>
                                    <div className='can-party-pct'></div>
                                </div>
                                <div className='can-pct-small'></div>
                            </tr>
                        </table>
                        <div className='footer-table'>
                            <p className='footnote-title'>*Incumbent</p>
                            <p className='reported-title'>100% Reported</p>
                        </div>
                    </div>
                </div>
                <div className='attorneyg-section'>
                    <h1 className='election-name'>Attorney General</h1>
                    <p className='election-desc'>Techiey, the incumbent attorney general, defeated his independent challenger, AlexJCabot. Successfully earning him a third term as the Attorney General of Ridgeway.</p>
                    <div className='candidate-table-2'>
                        <div className='updated-info-table'>
                            <p className='last-update-title'>Latest results from March 17</p>
                            <p className='cerified-votes-title'>VOTE TOTALS CERTIFIED</p>
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
                                <div className='can-name1'>Techiey* <CheckIcon className="checkicon" style={{ fontSize: 12 }}></CheckIcon></div>
                                <div className='can-party'>Independent</div>
                                <div className='can-votes'>3,348</div>
                                <div className='can-pct'>55.88%</div>
                            </tr>
                            <tr className='candidate-2'>
                                <div className='can-partycolor-ind'></div>
                                <div className='can-name2'>AlexJCabot</div>
                                <div className='can-party'>Independent</div>
                                <div className='can-votes'>2,652</div>
                                <div className='can-pct'>44.12%</div>
                            </tr>
                        </table>
                        <div className='footer-table'>
                            <p className='footnote-title'>*Incumbent</p>
                            <p className='reported-title'>100% Reported</p>
                        </div>
                    </div>
                </div>
                <div className='countysheriff-section'>
                    <h1 className='election-name'>County Sheriff</h1>
                    <p className='election-desc'></p>
                    <div className='candidate-table-1'>
                        <div className='updated-info-table'>
                            <p className='last-update-title'>Latest results from March 17</p>
                            <p className='cerified-votes-title'>VOTE TOTALS CERTIFIED</p>
                        </div>
                        <table className='candidate-table-body'>
                            <thead className='table-head-info'>
                                <div className='candidate-title'>Candidate</div>
                                <div className='votes-title'>Votes</div>
                                <div className='pct-title'>PCT.</div>
                            </thead>
                            <tr className='candidate-1'>
                                <div className='can-partycolor-un'></div>
                                <div className='can-name1-un'>DanielReagan* <CheckIcon className="checkicon" style={{ fontSize: 12 }}></CheckIcon></div>
                                <div className='can-votes-un1'>4,047</div>
                                <div className='can-pct1'>67.45%</div>
                            </tr>
                            <tr className='candidate-2'>
                                <div className='can-partycolor-un'></div>
                                <div className='can-name2'>BattalionGavin</div>
                                <div className='can-votes-un'>1,020</div>
                                <div className='can-pct'>17.01%</div>
                            </tr>
                            <tr className='candidate-3'>
                                <div className='can-partycolor-un'></div>
                                <div className='can-name3'>BlowWatchCD</div>
                                <div className='can-votes-un2'>914</div>
                                <div className='can-pct'>15.54%</div>
                            </tr>
                        </table>
                        <div className='footer-table'>
                            <p className='footnote-title'>*Incumbent</p>
                            <p className='reported-title'>100% Reported</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RidgewayElectionFeed;