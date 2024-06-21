import StandingHeader from '../standing-header';
import ElectionNavBar from '../election-navbar';
import ErrorFeed from '../404';
import React from 'react';

class StateResultsFeed extends React.Component{
    render(){
        return (
            <div className='App'>
                <StandingHeader></StandingHeader>
                <ElectionNavBar></ElectionNavBar>
                <ErrorFeed></ErrorFeed>
            </div>
        );
    }
}

export default StateResultsFeed;