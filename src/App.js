import {Switch,Route} from 'react-router-dom'

import './App.css';
import Signin from './pages/Sigin/signin.component';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/signin' component={Signin}/>
      </Switch>
    </div>
  );
}

export default App;
