import React, { Component } from 'react';
import Header from './Header';
import Summary from './Summary';
import ContactInfo from './ContactInfo';
import SkillsList from './SkillsList';
import EducationHistory from './EducationHistory';
import WorkHistory from './WorkHistory';

class App extends Component {
  render() {
    return(
      <React.Fragment>
      <Header />
      <Summary />
      <ContactInfo />
      <SkillsList data = {this.props.data} />
      <EducationHistory dataEdu= {this.props.dataEdu} />
      <WorkHistory dataJob={this.props.dataJob} />
      </React.Fragment>
    );
  }
}

export default App;
