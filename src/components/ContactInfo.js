import React, { Component } from 'react';

class ContactInfo extends Component {
  render(){
    return (
      <div className="portfolio-content">
      <section>
          <div className="contactinfo">
            <a className="contactinfo__single" target="_blank">
              <i className="ion-ios-location-outline contactinfo__icon"></i>
              <span className="contactinfo__title">Mexico City</span>
            </a>
            <a href="#" className="contactinfo__single" target="_blank">
              <i className="ion-ios-email-outline contactinfo__icon"></i>
              <span className="contactinfo__title">anilu556@gmail.com</span>
            </a>
            <a href="#" className="contactinfo__single" target="_blank">
              <i className="ion-social-github-outline contactinfo__icon"></i>
              <span className="contactinfo__title">anilu556</span>
            </a>
            <a href="#" className="contactinfo__single" target="_blank">
              <i className="ion-social-linkedin-outline contactinfo__icon"></i>
              <span className="contactinfo__title">Ana González</span>
            </a>
          </div>
        </section>
        </div>
    )
  }
}

export default ContactInfo;
