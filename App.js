import * as React from 'react';
import Navigation from './src/navigation';
import SplashScreen from './src/screens/SplashScreen';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoadingData: true
        }
    }

    componentDidMount = () => {
        setTimeout(() => {
            this.setState({
                isLoadingData: false
            })
        }, Math.floor((Math.random() * 1000) + 1000))
    }

    render() { 
        return this.state.isLoadingData ? <SplashScreen /> : <Navigation />;
    }
}

export default App;