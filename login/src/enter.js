import React, {Component} from 'react';
import Home from './home';
import {BrowserRouter as Router, Switch, Route,Redirect} from  'react-router-dom';

class Login extends Component{
    persay = () => {
        return <Route path = "/home" component ={Home}/>;
    };

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert(this.state.value);
    event.preventDefault();
  }


  
  
  render(){
  

        





    return( 
    <Router>
    <div>
      
      
      
      
    
      
      <h1>Login Page :)</h1>
      <form action="{this.persay}">
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit"  />
      </form>
      <Route path = "/home" component ={Home}/>
      
      </div>
      </Router>

    );

  };
}

export default Login;
