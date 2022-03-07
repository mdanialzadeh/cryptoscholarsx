import React, { useEffect, useState } from "react";
import NavBar from "./Nav"
import Roadmap from './RoadMap'
import Home from './Home';
import Nft from './Nft';
import News from './News'
import ParticlesBg from 'particles-bg';
import About from './About'
import Contact from './Contacts'
import CSSReset from "./globalStyles";

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";



function App() {

  if (History.scrollRestoration) {
    History.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}

const [windowDimension, setWindowDimension] = useState(null);

useEffect(() => {
  setWindowDimension(window.innerWidth);
}, []);

useEffect(() => {
  function handleResize() {
    setWindowDimension(window.innerWidth);
  }

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

const isMobile = windowDimension <= 800;




  return (
<Router>
<CSSReset />

<NavBar/>

    <div className="app">

    <Switch>

    <Route path="/news">     
          <News/>
    </Route>

    <Route path="/about">     
          <About/>
    </Route>

    <Route path="/roadmap">     
          <Roadmap/>
    </Route>

    <Route path="/nft">     
           <Nft/>
    </Route>
    
    <Route path="/">     
            <Home/>
           
    </Route>

    </Switch>
    <ParticlesBg color= {"#cacaca"} num={isMobile ? (20) : (100)} type="cobweb" bg={true} />
    </div>
<Contact/>
</Router>
  
  );
}



export default App;

