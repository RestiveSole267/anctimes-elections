import StandingHeader from '../standing-header';
import ElectionNavBar from '../election-navbar';
import RidgewayElectionFeed from './ridgeway';
import React from 'react';

class RidgewayFeed extends React.Component{
    render(){
        return (
            <div className='App'>
                <StandingHeader></StandingHeader>
                <ElectionNavBar></ElectionNavBar>
                <RidgewayElectionFeed></RidgewayElectionFeed>
            </div>
        );
    }
}

export default RidgewayFeed;