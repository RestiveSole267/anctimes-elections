import StandingHeader from '../standing-header';
import ElectionNavBar from '../election-navbar';
import RidgewayGovernor from './governor';
import React from 'react';

class RidgewayGovFeed extends React.Component{
    render(){
        return (
            <div className='App'>
                <StandingHeader></StandingHeader>
                <ElectionNavBar></ElectionNavBar>
                <RidgewayGovernor></RidgewayGovernor>
            </div>
        );
    }
}

export default RidgewayGovFeed;