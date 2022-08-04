// import { useState } from 'react'
// import './App.css'
import { Navbar,Welcome,Footer,Services } from './components';
import DocsV from './components/DocsV';
import Time from './components/Time';
const App=()=> {
  // const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar/>
        <Welcome/>
        <DocsV/>
        <Time/>
        <Services/>
      </div>
      
      {/* <Transactions/> */}
        <div className="gradient-bg-welcome ">       
          <Footer/>
        </div>
      
    </div>
  )
}

export default App
