import React, { Component } from 'react';
import PortfolioFixed from './components/PortfolioFixed';
import PortfolioContent from './components/PortfolioContent';

class App extends Component {
  render() {
    return(
      <React.Fragment>
      <PortfolioFixed />
      <PortfolioContent data = {this.props.data} dataEdu= {this.props.dataEdu} dataJob={this.props.dataJob} />
      </React.Fragment>
    );
  }
}

export default App;
