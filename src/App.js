import RidgewayFeed from './ridgeway/ridgeway-feed';
import AnchorageFeed from './anchorage/anchorage-feed';
import HarrisonFeed from './harrison/harrison-feed';
import StateResultsFeed from './state-results/state-results-feed';
import RidgewayGovFeed from './ridgeway/ridgeway-gov';
import './App.css';
import { Route, Routes } from "react-router-dom"


function App() {
  console.log(window.location)
  return (
    <div className="App">
      <Routes>
        <Route path='/anctimes-elections/' element={<RidgewayFeed></RidgewayFeed>}></Route>
        <Route path='/anctimes-elections/anchorage' element={<AnchorageFeed></AnchorageFeed>}></Route>
        <Route path='anctimes-elections/ridgeway' element={<RidgewayFeed></RidgewayFeed>}></Route>
        <Route path='anctimes-elections/harrison' element={<HarrisonFeed></HarrisonFeed>}></Route>
        <Route path='anctimes-elections/state-results' element={<StateResultsFeed></StateResultsFeed>}></Route>
      </Routes>
    </div>
  );
}

export default App;
