import React from 'react'
import NavBar from './components/NavBar/NavBar.js'
import "bootstrap/dist/css/bootstrap.min.css";
import {Switch,Route} from 'react-router-dom'
import Login from './pages/Login'
import List from './pages/List'
import Form from './pages/Form'
import Error from './pages/Error'
const App = () => {
  return (
    <>
    <NavBar/>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/list" component={List}/>
        <Route exact path="/form" component={Form}/>
        <Route  component={Error}/>
      </Switch>
    </>
  )
}

export default App

