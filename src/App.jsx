import {useState} from 'react'
import Navbar from './components/navbar'
import Landing from './section/Landing'
import About from './section/About'
import Project from './section/Project'
import Contact from './section/Contact'

function App() {

  const [homeLocation, sethomeLocation] = useState(0);
  const [aboutLocation, setaboutLocation] = useState(0);
  const [projectLocation, setprojectLocation] = useState(0);
  const [contactLocation, setcontactLocation] = useState(0);

  return (
    <div>
      <Navbar homeLocation = {homeLocation} aboutLocation = {aboutLocation} contactLocation = {contactLocation} projectLocation = {projectLocation}/>
      <Landing sethomeLocation = {sethomeLocation}/>
      <About setaboutLocation = {setaboutLocation}/>
      <Project setprojectLocation = {setprojectLocation}/>
      <Contact setcontactLocation = {setcontactLocation}/>
    </div>
  )
}

export default App;