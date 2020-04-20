import React,{Component} from 'react';
import app from './App.css';
import {Router, Route ,Switch} from "react-router-dom";
import Login from './enter';
import Home from './home'



class Main extends Component{
  render(){
    return(
      <Login />
      


    );
  }
}


export default Main;