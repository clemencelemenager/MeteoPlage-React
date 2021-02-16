/** Import dependancies */
import React from 'react';
import { Route } from 'react-router-dom';

/** Import components */
import NavBar from 'src/components/NavBar/container';
import Footer from 'src/components/Footer';
import Home from 'src/pages/Home/container';
import About from 'src/pages/About';

/** Import assets */
import './styles.scss';

const App = () => (
  <>
    <NavBar />
    <div className="app">
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/about" exact>
        <About />
      </Route>
      <Footer />
    </div>
  </>
);

export default App;
