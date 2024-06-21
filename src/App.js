import RidgewayFeed from './ridgeway/ridgeway-feed';
import AnchorageFeed from './anchorage/anchorage-feed';
import HarrisonFeed from './harrison/harrison-feed';
import StateResultsFeed from './state-results/state-results-feed';
import './App.css';
import { Route, Routes } from "react-router-dom"


function App() {
  console.log(window.location)
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<AnchorageFeed></AnchorageFeed>}></Route>
        <Route path='/anchorage' element={<AnchorageFeed></AnchorageFeed>}></Route>
        <Route path='/ridgeway' element={<RidgewayFeed></RidgewayFeed>}></Route>
        <Route path='/harrison' element={<HarrisonFeed></HarrisonFeed>}></Route>
        <Route path='/state-results' element={<StateResultsFeed></StateResultsFeed>}></Route>
      </Routes>
    </div>
  );
}

export default App;
