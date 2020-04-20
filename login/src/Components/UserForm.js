import React, { Component } from 'react';
import Loginpage from './Loginpage';
import Homepage from './Homepage.js';



export class userform extends Component {
    state = {
        step: 1,
        Name: ' '
    };
    /// This state below will take us to the next page
    nextStep = () => {
        const{step} = this.state;
        this.setState({
            step: step + 1
        });
    };
    ///This will take us to the page in the back/// 
    prevStep = () => {
        const{step} = this.state;
        this.setState({
            step: step + 1
        });
    };
    

    
    handleChange = input => e =>{
        //this will take all user inputs 
        this.setState({
            [input]: e.target.value
        });
    };
    render() {
        const {step} = this.state;
        const{Name} = this.state;
        const values = {Name};

        //Gonna do switch statements for button press

        switch(step){
            case 1:
                return(
                    <Loginpage
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                     />
                );
        
                case 2:
                    return(
                        <Homepage
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values} />
                    );
        
        }

    }
}

export default userform
