import React, {Component} from 'react';
import './App.css';
import Navigation from "./components/navigation/Navigation";
import Logo from "./components/logo/Logo"
import ImageLinkForm from "./components/imageLinkForm/ImageLinkForm";
import Rank from "./components/rank/Rank";
import Particles from 'react-particles-js';


const particlesOptions = {
    particles: {
        line_linked: {
            shadow: {
                enable: true,
                color: "#3CA9D1",
                blur: 5
            }
        }
    }
};

class App extends Component {
    constructor() {
        super();
        this.state = {
            input: ''
        }
    }

    onInputChange = (event) => {
        console.log(event.target.value);
    };

    render() {
        return (
            <div className="App">
                <Particles className="particles" params={particlesOptions}/>
                <Navigation/>
                <Logo/>
                <Rank/>
                <ImageLinkForm onInputChange={this.onInputChange} />
            </div>
        );
    }
}

export default App;
