import React from 'react';
import { render } from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';
import Clock from './Clock';
class App extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         lat: null,
    //         errorMessage: ''
    //     };
    // }
    state = { lat: null, errorMessage: '' };
    componentDidMount() {
        console.log('component did mount');
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message }))
    }
    componentDidUpdate() {
        console.log('component did update');
    }
    renderContent(){
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error Error: {this.state.errorMessage}</div>
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}></SeasonDisplay>
        }
        return <Loader message="Please accept the location request"/>
    }
    render() {
        //return <div className="border red">{this.renderContent()}</div>
        return <Clock></Clock>
    }
}
render(<App></App>, document.querySelector('#root'));