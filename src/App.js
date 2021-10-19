import {Switch,Route} from 'react-router-dom'

import './App.css';

import Header from './Components/Header/Header.component'
import Signin from './pages/Sigin/signin.component';
import HomePage from './pages/HomePage/homepage.component'


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/signin' component={Signin}/>
      </Switch>
    </div>
  );
}

export default App;
