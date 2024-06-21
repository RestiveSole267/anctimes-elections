import React from "react";
import CheckIcon from '@material-ui/icons/Check';
import "/Users/User/Documents/GitHub/anctimes-test-pages/src/App.css"
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

class AnchorageElectionFeed extends React.Component{
    render(){
        return (
            <div className='election-feed'>
                <div className='section-header'>
                    <p className='status'> Last Updated June 4, 2024, 8:57pm E.T.</p>
                    <h1 className='election-primary-name'>Anchorage Primary Election Results</h1>
                    <div className="winner-boxs">
                        <div className="mayorial-box">
                        </div>
                        <div className="attorney-box"></div>
                        <div className="commissioner-box"></div>
                    </div>
                </div>

                <div className='governor-section'>
                    <h1 className='election-name'>Mayorial</h1>
                    <p className='election-desc'>Mayor Stanley_Labson, a Libertarian who was apart of the General Assembly Scandal of 2020, is facing PATBack74, a Republican who he narrowly defeated a year ago.</p>
                    <div className='candidate-table-1'>
                        <div className='updated-info-table'>
                            <p className='last-update-title'>Latest results from June 4</p>
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
                                <div className='can-partycolor-lib'></div>
                                <div className='can-name1-lib'>Stanley_Labson* <CheckIcon className="checkicon" style={{ fontSize: 12 }}></CheckIcon></div>
                                <div className='can-party'>Libertarin</div>
                                <div className='can-votes'>242</div>
                                <div className='can-pct'>65.60%</div>
                            </tr>
                            <tr className='candidate-2'>
                                <div className='can-partycolor-rep'></div>
                                <div className='can-name2'>PATBack74</div>
                                <div className='can-party'>Republican</div>
                                <div className='can-votes'>127</div>
                                <div className='can-pct'>34.40%</div>
                            </tr>
                        </table>
                        <div className='footer-table'>
                            <p className='footnote-title'>*Incumbent</p>
                            <p className='reported-title'>100% Reported</p>
                        </div>
                    </div>
                </div>
                <div className='attorneyg-section'>
                    <h1 className='election-name'>District Attorney</h1>
                    <p className='election-desc'>koala4lif, the incumbent district attorney, defeated his democract challenger, DirectBuzz. Successfully earning him a second term as the District Attorney of Anchorage.</p>
                    <div className='candidate-table-2'>
                        <div className='updated-info-table'>
                            <p className='last-update-title'>Latest results from June 4</p>
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
                                <div className='can-partycolor-dem'></div>
                                <div className='can-name1-dem'>koala4lif* <CheckIcon className="checkicon" style={{ fontSize: 12 }}></CheckIcon></div>
                                <div className='can-party'>Democract</div>
                                <div className='can-votes'>3,348</div>
                                <div className='can-pct'>55.88%</div>
                            </tr>
                            <tr className='candidate-2'>
                                <div className='can-partycolor-dem'></div>
                                <div className='can-name2'>DirectBuzz</div>
                                <div className='can-party'>Democract</div>
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
                <div className='secstate-section'>
                    <h1 className='election-name'>Election Commissioner</h1>
                    <p className='election-desc'>RestiveSole267, an Independent who is known for the General Assembly Scandal of 2020, is in a tight race with Danlabs, an independent and RocketLaws, an independent. </p>
                    <div className='candidate-table-1'>
                        <div className='updated-info-table'>
                            <p className='last-update-title'>Latest results from June 4</p>
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
                                <div className='can-name1'>RestiveSole267* <CheckIcon className="checkicon" style={{ fontSize: 12 }}></CheckIcon></div>
                                <div className='can-party'>Independent</div>
                                <div className='can-votes'>3,263</div>
                                <div className='can-pct'>54.39%</div>
                            </tr>
                            <tr className='candidate-2'>
                                <div className='can-partycolor-ind'></div>
                                <div className='can-name2'>Danlabs</div>
                                <div className='can-party'>Independent</div>
                                <div className='can-votes'>1,445</div>
                                <div className='can-pct'>24.09%</div>
                            </tr>
                            <tr className='candidate-3'>
                                <div className='can-partycolor-ind'></div>
                                <div className='can-name3'>RocketLaws</div>
                                <div className='can-party'>Independent</div>
                                <div className='can-votes'>1,275</div>
                                <div className='can-pct'>21.52%</div>
                            </tr>
                        </table>
                        <div className='footer-table'>
                            <p className='footnote-title'>*Incumbent</p>
                            <p className='reported-title'>100% Reported</p>
                        </div>
                    </div>
                </div>
                <div className='statesenate-section'>
                    <h1 className='election-name'>General Assembly</h1>
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
                                <div className='can-body1-ind1a'>
                                    <div className='can-name-small'>Lusophone*</div>
                                    <div className='can-party-small'>Ind.</div>
                                    <div className='can-party-pct'>72%</div>
                                    <CheckIcon className="checkicon-small1a" style={{ fontSize: 12 }}></CheckIcon>
                                </div>
                                <div className='can-body2-ind1'>
                                    <div className='can-name-small1b'>JamesPawley</div>
                                    <div className='can-party-small'>Soc.</div>
                                    <div className='can-party-pct'>28%</div>
                                </div>
                                <div className='can-pct-small'>100%</div>
                            </tr>
                            <tr className='candidate-2'>
                                <div className='can-partycolor-small'></div>
                                <div className='can-district'>2</div>
                                <div className='can-body1-ind2a'>
                                    <div className='can-name-small'>CU64*</div>
                                    <div className='can-party-small'>Ind.</div>
                                    <div className='can-party-pct'>88%</div>
                                    <CheckIcon className="checkicon-small2a" style={{ fontSize: 12 }}></CheckIcon>
                                </div>
                                <div className='can-body2-ind2'>
                                    <div className='can-name-small2b'>Dominic8u</div>
                                    <div className='can-party-small'>Ind.</div>
                                    <div className='can-party-pct'>12%</div>
                                </div>
                                <div className='can-pct-small'>100%</div>
                            </tr>
                            <tr className='candidate-3'>
                                <div className='can-partycolor-small'></div>
                                <div className='can-district'>3</div>
                                <div className='can-body1-ind3a'>
                                    <div className='can-name-small'>Matt_f22*</div>
                                    <div className='can-party-small'>Lib.</div>
                                    <div className='can-party-pct'>61%</div>
                                    <CheckIcon className="checkicon-small3a" style={{ fontSize: 12 }}></CheckIcon>
                                </div>
                                <div className='can-body2-ind3'>
                                    <div className='can-name-small3b'>AviaDylan</div>
                                    <div className='can-party-small'>Ind.</div>
                                    <div className='can-party-pct'>39%</div>
                                </div>
                                <div className='can-pct-small'>100%</div>
                            </tr>
                            <tr className='candidate-3'>
                                <div className='can-partycolor-small'></div>
                                <div className='can-district'>4</div>
                                <div className='can-body1-ind4a'>
                                    <div className='can-name-small'>BillBobJ*</div>
                                    <div className='can-party-small'>Rep.</div>
                                    <div className='can-party-pct'>53%</div>
                                    <CheckIcon className="checkicon-small4a" style={{ fontSize: 12 }}></CheckIcon>
                                </div>
                                <div className='can-body2-ind4'>
                                    <div className='can-name-small4b'>LHVH</div>
                                    <div className='can-party-small'>Tin.</div>
                                    <div className='can-party-pct'>44%</div>
                                </div>
                                <div className='can-pct-small'>100%</div>
                            </tr>
                            <tr className='candidate-3'>
                                <div className='can-partycolor-small'></div>
                                <div className='can-district'>5</div>
                                <div className='can-body1-ind5a'>
                                    <div className='can-name-small'>Avia_JP</div>
                                    <div className='can-party-small'>Rep.</div>
                                    <div className='can-party-pct'></div>
                                    <CheckIcon className="checkicon-small5a" style={{ fontSize: 12 }}></CheckIcon>
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
                                <div className='can-body1-ind6a'>
                                    <div className='can-name-small'>R21M</div>
                                    <div className='can-party-small'>Ind.</div>
                                    <div className='can-party-pct'></div>
                                    <CheckIcon className="checkicon-small6a" style={{ fontSize: 12 }}></CheckIcon>
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
                                <div className='can-body1-ind7a'>
                                    <div className='can-name-small'>Sweet_Susie</div>
                                    <div className='can-party-small'>Lib.</div>
                                    <div className='can-party-pct'></div>
                                    <CheckIcon className="checkicon-small7a" style={{ fontSize: 12 }}></CheckIcon>
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
            </div>
        );
    }
}

export default AnchorageElectionFeed;