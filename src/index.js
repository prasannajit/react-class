import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            lat:null,
            errorMessage:''
        };
        window.navigator.geolocation.getCurrentPosition(
            (position)=>{
                this.setState({
                    lat: position.coords.latitude
                })
            },
            (err)=>{this.setState({
                errorMessage: err.message
            })}
        );
    }

    render(){ 
        if(this.state.errorMessage && !this.state.lat) {
            return <div>Error Error: {this.state.errorMessage}</div>
        }
        if(!this.state.errorMessage && this.state.lat) {
            return <div> My lat is {this.state.lat}</div>
        }
        return <div>Loading.....</div>
    }
}
render(<App></App>,document.querySelector('#root'));