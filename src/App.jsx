import {useState} from 'react'
import Landing from './section/Landing'
import Navbar from './components/navbar'
function App() {

  const [homeLocation, sethomeLocation] = useState(0);

  console.log(homeLocation);

  return (
    <div>
      <Navbar homeLocation = {homeLocation}/>
      <Landing sethomeLocation = {sethomeLocation}/>
    </div>
  )
}

export default App;