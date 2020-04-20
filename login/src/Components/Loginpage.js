import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export class Loginpage extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };
    
    
    
    
    
    
    
    
    render() {
        
        const{values,handleChange} = this.props;
        return (
        
            <MuiThemeProvider >
            <React.Fragment>
              <Dialog 
                open="true"
                fullWidth="true"
                maxWidth='sm'
              >
                <AppBar title="Enter User Details" />
                <TextField
                  placeholder="Enter Your Name"
                  label="Name"
                  onChange={handleChange('Name')}
                  defaultValue={values.Name}
                  margin="normal"
                fullWidth="true"
                />
              
                <br />
                <Button
                  color="primary"
                  variant="contained"
                  onClick={this.continue}
                >Continue</Button>
              </Dialog>
            </React.Fragment>
          </MuiThemeProvider>


       
       
       
       
       
       
       
       
       
       )
    }
}

export default Loginpage;
