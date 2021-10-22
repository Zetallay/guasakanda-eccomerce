import React from 'react';

import {Switch,Route} from 'react-router-dom'

import './App.css';

import Header from './Components/Header/Header.component'
import Signin from './pages/Sigin/signin.component';
import HomePage from './pages/HomePage/homepage.component'

import axios from 'axios'

import categories from './categories'
import ProductDetail from './pages/ProductDetail/productDetail.component';

 class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      shopProducts:[{
        category:"",
        description: "",
        id: 0,
        image: "",
        price: 0,
        rating: {rate: 0, count: 0},
        title: "",
    }],
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
           <Route exact path='/' render={(props)=><HomePage {...props} categories={this.state.categories} shopProducts={this.state.shopProducts}/>}/>
           <Route exact path='/signin' component={Signin}/>
           <Route exact path='/pd/:productName/:id' component={ProductDetail}/>
         </Switch>
       </div>
     );
   }
}

export default App;
