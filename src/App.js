import React ,{useState}from "react"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router,Route,Link,Switch} from "react-router-dom"

import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"
import firebase from "firebase/app"
import "firebase/auth"
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import PageNotFound from "./Pages/PageNotFound";
import UserContext from "./context/UserContext";
import Header from "./layout/Header";
import firebaseConfig from "./Config/firebaseConfig"

//intialise firebase
firebase.initializeApp(firebaseConfig)
const App=()=> {
const [user,setUser]=useState(null)

return(
  <Router>
  <ToastContainer/>
  <UserContext.Provider value={{user,setUser}}>
  <Header/>
  <Switch>
  <Route exact path="/" component={Home}/>
  <Route  path="/signin" component={SignIn}/>
  <Route  path="/signup" component={SignUp}/>
  <Route  path="*" component={PageNotFound}/>
  
  </Switch>
  
  </UserContext.Provider>
  </Router>
)
}


export default App
