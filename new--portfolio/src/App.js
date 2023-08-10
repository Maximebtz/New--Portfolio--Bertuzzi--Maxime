import Loading from './loading';
import './index.css';
import React, { Component } from 'react';
import Spline from '@splinetool/react-spline';


class App extends Component {
  state = {
   loading: true 
  }
  
  componentWillMount(){
    setTimeout(() => {
      this.setState({
        loading: false
      })
<<<<<<< HEAD
    }, 1000);
=======
    }, 5000);
>>>>>>> 722d719b73653d7789c79f90fdc2fd597afdefb2
  }
  
  render() {
    if(this.state.loading) {
      return <Loading />
    }
    return (
<<<<<<< HEAD
      <div className="app">
        <div className="spline-container">
          <Spline scene="https://prod.spline.design/5g3JN5JdHzWvYVEo/scene.splinecode" />
        </div>      
=======
      <div className="App">
            <Spline scene="https://prod.spline.design/5g3JN5JdHzWvYVEo/scene.splinecode" />
>>>>>>> 722d719b73653d7789c79f90fdc2fd597afdefb2
      </div>
    );
  }
  
  
}

export default App;
