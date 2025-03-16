import React from "react";
import "./../styles/Testimonials.css";

const Testimonials = () => {
  return (
    <div className="responsive-container-block big-container">
      <div className="responsive-container-block bg">
        <p className="text-blk title">What Our Clients Say</p>
        <p className="text-blk desc">
          See how our services have helped businesses grow and succeed!
        </p>
        <div className="responsive-container-block blocks">
          <div className="slider">
            <div className="responsive-cell-block content">
              <p className="text-blk info-block">
                "Amazing experience! The team was professional and delivered beyond expectations."
              </p>
              <div className="responsive-container-block person">
                <div className="responsive-cell-block icon-block">
                  <img className="profile-img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/eourInstructors1.svg" alt="John Doe" />
                </div>
                <div className="responsive-cell-block text-block">
                  <p className="text-blk name">John Doe</p>
                  <p className="text-blk desig">CEO, ABC Corp</p>
                </div>
              </div>
            </div>

            <div className="responsive-cell-block content">
              <p className="text-blk info-block">
                "Great support and amazing service. Highly recommended!"
              </p>
              <div className="responsive-container-block person">
                <div className="responsive-cell-block icon-block">
                  <img className="profile-img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/eourInstructors1.svg" alt="Sarah Smith" />
                </div>
                <div className="responsive-cell-block text-block">
                  <p className="text-blk name">Sarah Smith</p>
                  <p className="text-blk desig">Marketing Head</p>
                </div>
              </div>
            </div>

            <div className="responsive-cell-block content">
              <p className="text-blk info-block">
                "The quality and attention to detail were outstanding!"
              </p>
              <div className="responsive-container-block person">
                <div className="responsive-cell-block icon-block">
                  <img className="profile-img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/eourInstructors1.svg" alt="Michael Lee" />
                </div>
                <div className="responsive-cell-block text-block">
                  <p className="text-blk name">Michael Lee</p>
                  <p className="text-blk desig">CTO, Tech Solutions</p>
                </div>
              </div>
            </div>

            <div className="responsive-cell-block content">
              <p className="text-blk info-block">
                "They understood our needs perfectly. Great collaboration!"
              </p>
              <div className="responsive-container-block person">
                <div className="responsive-cell-block icon-block">
                  <img className="profile-img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/eourInstructors1.svg" alt="Emily Brown" />
                </div>
                <div className="responsive-cell-block text-block">
                  <p className="text-blk name">Emily Brown</p>
                  <p className="text-blk desig">Founder, Startup X</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
