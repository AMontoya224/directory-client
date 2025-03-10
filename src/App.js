import React, {useEffect, useState} from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Persons from './pages/Persons/Persons';
import PersonID from './pages/Persons/PersonID';
import Projects from './pages/Projects/Projects';
import ProjectID from './pages/Projects/ProjectID';
import Organizations from './pages/Organizations/Organizations';
import Publications from './pages/Publications/Publications';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';


function App() {
  const [selectLan, setSelectLan] = useState(false);
  const [active, setActive] = useState(false);
  const [theme, setTheme] = useState(false);
  const [y, setY] = useState(window.scrollY);

  useEffect(() => {
    const handleNavigation = () => {
        setY(window.scrollY);
        if(active){
            setActive(false);
        }
    };
    window.addEventListener("scroll", handleNavigation);
    return () => window.removeEventListener("scroll", handleNavigation);
  }, [y, active]);

  return (
    <div className='App'>
      <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200'/>
      <BrowserRouter>
        <Header selectLan={selectLan} setSelectLan={setSelectLan} active={active} setActive={setActive} y={y} theme={theme} setTheme={setTheme}/>
        <Switch>
          <Route exact path='/' render={ routeProps => <Home selectLan={selectLan} setTheme={setTheme} {...routeProps}/>}/>
          <Route exact path='/persons' render={ routeProps => <Persons selectLan={selectLan} setTheme={setTheme} {...routeProps}/>}/>
          <Route exact path='/persons/:_name' render={ routeProps => <PersonID selectLan={selectLan} setTheme={setTheme} {...routeProps}/>}/>
          <Route exact path='/projects' render={ routeProps => <Projects selectLan={selectLan} setTheme={setTheme} {...routeProps}/>}/>
          <Route exact path='/projects/:_name' render={ routeProps => <ProjectID selectLan={selectLan} setTheme={setTheme} {...routeProps}/>}/>
          <Route exact path='/organizations' render={ routeProps => <Organizations selectLan={selectLan} {...routeProps}/>}/>
          <Route exact path='/publications' render={ routeProps => <Publications selectLan={selectLan} {...routeProps}/>}/>
          <Route exact path='/login' render={ routeProps => <Login selectLan={selectLan} {...routeProps}/>}/>
          <Route exact path='/register' render={ routeProps => <Register selectLan={selectLan} {...routeProps}/>}/>
        </Switch>
        <Footer selectLan={selectLan}/>
      </BrowserRouter>
    </div>
  );
}

export default App;