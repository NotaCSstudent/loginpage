import React, {Component} from 'react';

import app from './App.css';

class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      value: "Name"
    };

  };
  
  
  
  
  render(){
    

        





    return( 
    
    <div>
      
      
      
      
    
      
      <h1>Login Page :)</h1>
      <form>
        <label>Name:
        <input type="text" name="name"/>
     </label>
     <input type="submit" value="Submit" />
     </form>
      </div>

    );

  };
}

export default Login;
