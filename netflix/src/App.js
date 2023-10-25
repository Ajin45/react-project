
import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import Rowpost from "./components/Rowpost"
import {url,new_url} from "./components/Constants"
import "./App.css"

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Rowpost url={url} head="Upcoming-Movie"/>
      <Rowpost url={new_url} head="Action" isRow islarge isnew />
    </div>
  );
}

export default App;
