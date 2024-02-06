import {useState} from 'react'
import Navbar from './components/navbar'
import Landing from './section/Landing'
import About from './section/About'
import Project from './section/Project'

function App() {

  const [homeLocation, sethomeLocation] = useState(0);
  const [aboutLocation, setaboutLocation] = useState(0);
  const [projectLocation, setprojectLocation] = useState(0);
  const [contactLocation, setcontactLocation] = useState(0);

  return (
    <div>
      <Navbar homeLocation = {homeLocation} aboutLocation = {aboutLocation} projectLocation = {projectLocation}/>
      <Landing sethomeLocation = {sethomeLocation}/>
      <About setaboutLocation = {setaboutLocation}/>
      <Project setprojectLocation = {setprojectLocation}/>
    </div>
  )
}

export default App;