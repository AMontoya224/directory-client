import React, {useState } from 'react';
import { Switch, Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const [selectLan, setSelectLan] = useState( false );

  const onSelectLan = newSelect => {
    setSelectLan( newSelect );
  };

  return (
    <div className="App">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,1,0"/>
      <BrowserRouter>
        <Header selectLan={selectLan} onSelectLan={onSelectLan}/>
        <Switch>
          <Route exact path="/" render={ routeProps => <Home selectLan={selectLan} {...routeProps} />}/>
        </Switch>
        <Footer selectLan={selectLan}/>
      </BrowserRouter>
    </div>
  );
}

export default App;