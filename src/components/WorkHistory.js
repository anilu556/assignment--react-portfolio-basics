import React, {Component} from 'react'
import Job from './Job';
// import Job components

class WorkHistory extends Component {
  render() {
    console.log('jobList');
    /* receive `jobsList` array as props from App compnonent */

    return (
      <section>
        <h4>Work Experience</h4>
        <div className="skills-list">
          {
            this.props.dataJob.map(function(works) {
              return  <Job
                title={ works.title }
                company= {works.company }
                desc= {works.description }
                years= {works.years}
                  start= {works.years.start}
                  end= {works.years.end}
                />
          })
          }
        </div>
      </section>
    )
  }
}

export default WorkHistory;
