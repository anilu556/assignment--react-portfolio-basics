import React, { Component } from 'react';
import Header from './Header';
import Summary from './Summary';
import ContactInfo from './ContactInfo';

class App extends Component {
  render() {
    return(
      <React.Fragment>
      <Header />
      <Summary />
      <ContactInfo />
      </React.Fragment>
    );
  }
}

export default App;
