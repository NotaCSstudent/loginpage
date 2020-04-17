import React, {Component} from 'react';
import app from './App.css';

class Login extends Component{
  

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
    
    <div>
      
      
      
      
    
      
      <h1>Login Page :)</h1>
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>

    );

  };
}

export default Login;
