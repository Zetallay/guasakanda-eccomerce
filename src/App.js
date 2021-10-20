import React from 'react';

import {Switch,Route} from 'react-router-dom'

import './App.css';

import Header from './Components/Header/Header.component'
import Signin from './pages/Sigin/signin.component';
import HomePage from './pages/HomePage/homepage.component'

import axios from 'axios'

import categories from './categories'

 class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      shopProducts:[],
      categories:categories
    }
  }
  
  componentDidMount(){
    axios.get('https://fakestoreapi.com/products')
    .then(res=>this.setState({shopProducts:res.data}))
  }

   render(){
     return (
       <div className="App">
         <Header />
         <Switch>
           <Route exact path='/' render={(props)=><HomePage {...props} categories={categories}/>}/>
           <Route exact path='/signin' component={Signin}/>
         </Switch>
       </div>
     );
   }
}

export default App;
