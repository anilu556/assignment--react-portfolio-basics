import React, {Component} from 'react'
import EduTitle from './EduTitle';
// import EduTitle component

class EducationHistory extends Component {
  render() {

    /* receive `eduList` array as props from App compnonent */

    return (
      <section>
        <h4>Education</h4>
        <div className="skills-list">

          {
            this.props.dataEdu.map(function(studies) {
            return  <EduTitle
                  institute={ studies.institute }
                  field = {studies.fieldOfStudy }
                  dates = {studies.dates }
                  />
            })
          }

        </div>
      </section>
    )
  }
}

export default EducationHistory;
