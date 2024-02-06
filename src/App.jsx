import {useState} from 'react'
import Navbar from './components/navbar'
import Landing from './section/Landing'
import About from './section/About'

function App() {

  const [homeLocation, sethomeLocation] = useState(0);

  return (
    <div>
      <Navbar homeLocation = {homeLocation}/>
      <Landing sethomeLocation = {sethomeLocation}/>
      <About />
    </div>
  )
}

export default App;