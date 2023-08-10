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
    }, 5000);
  }
  
  render() {
    if(this.state.loading) {
      return <Loading />
    }
    return (
      <div className="App">
            <Spline scene="https://prod.spline.design/5g3JN5JdHzWvYVEo/scene.splinecode" />
      </div>
    );
  }
  
  
}

export default App;
