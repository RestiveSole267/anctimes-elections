import StandingHeader from '../standing-header';
import ElectionNavBar from '../election-navbar';
import RidgewaySecofState from './secofstate';
import React from 'react';

class RidgewaySOSFeed extends React.Component{
    render(){
        return (
            <div className='App'>
                <StandingHeader></StandingHeader>
                <ElectionNavBar></ElectionNavBar>
                <RidgewaySecofState></RidgewaySecofState>
            </div>
        );
    }
}

export default RidgewaySOSFeed;