import React, {useState} from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Persons from './pages/Persons/Persons';
import Organizations from './pages/Organizations/Organizations';
import Projects from './pages/Projects/Projects';
import Publications from './pages/Publications/Publications';


function App() {
  const [selectLan, setSelectLan] = useState( false );

  const onSelectLan = newSelect => {
    setSelectLan( newSelect );
  };

  return (
    <div className="App">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"/>
      <BrowserRouter>
        <Header selectLan={selectLan} onSelectLan={onSelectLan}/>
        <Switch>
          <Route exact path="/" render={ routeProps => <Home selectLan={selectLan} {...routeProps} />}/>
          <Route exact path="/persons" render={ routeProps => <Persons selectLan={selectLan} {...routeProps} />}/>
          <Route exact path="/organizations" render={ routeProps => <Organizations selectLan={selectLan} {...routeProps} />}/>
          <Route exact path="/projects" render={ routeProps => <Projects selectLan={selectLan} {...routeProps} />}/>
          <Route exact path="/publications" render={ routeProps => <Publications selectLan={selectLan} {...routeProps} />}/>
        </Switch>
        <Footer selectLan={selectLan}/>
      </BrowserRouter>
    </div>
  );
}

export default App;