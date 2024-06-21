import StandingHeader from '../standing-header';
import ElectionNavBar from '../election-navbar';
import AnchorageElectionFeed from './anchorage';
import React from 'react';

class AnchorageFeed extends React.Component{
    render(){
        return (
            <div className='App'>
                <StandingHeader></StandingHeader>
                <ElectionNavBar></ElectionNavBar>
                <AnchorageElectionFeed></AnchorageElectionFeed>
            </div>
        );
    }
}

export default AnchorageFeed;