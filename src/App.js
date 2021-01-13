import React from 'react'
import NavBar from './components/NavBar'
import "bootstrap/dist/css/bootstrap.min.css";
import {Switch,Route} from 'react-router-dom'
import Login from './pages/Login'
import List from './pages/List'
import Forms from './pages/Forms'
import Error from './pages/Error'
import Register from './pages/Register'



const App = () => {



 
  return (
    <>
    <NavBar/>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/list" component={List}/>
        <Route exact path="/form" component={Forms}/>
        <Route exact path="/register" component={Register}/>
        <Route  component={Error}/>
      </Switch>
    </>
  )
}

export default App

