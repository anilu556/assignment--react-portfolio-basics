import React, {Component} from 'react';
import Skill from './Skill';
// import Skill component

class SkillsList extends Component {
  render() {
    return (
      /* receive `skills` array as props from App compnonent */
      <section>
        <h4>Skills</h4>
        <div className="skills-list">


          {
            this.props.data.map(function(skill) {
            return  <Skill
                  info={ skill }
                  />
            }) }

        </div>
      </section>
    )
  }
}

export default SkillsList;
