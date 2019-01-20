import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import HeroBuilder from './containers/HeroBuilder/HeroBuilder';
import './App.css';

class App extends Component<{}, {}> {
  render() {
    return (
      <div className="App">
        <Layout>
          <HeroBuilder/>
          <button>This is not styled with any CSS module</button>
        </Layout>
      </div>
    );
  }
}

export default App;
