import React,{Component} from 'react';
import app from './App.css';
import {Router, Route ,Switch} from "react-router-dom";
import Login from './enter';






class Main extends Component{
  render(){
    return(
      <Login />
      
      


    );
  }




}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);



export default Main;