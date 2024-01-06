import React from 'react';
import aboutImg from '../assets/images/about.png';

const AboutUsPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 bg-info p-3 rounded">
          <h3>About Us</h3>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-md-7 mt-3">
          Ex velit minim aute laboris in exercitation. Consequat est incididunt
          incididunt minim commodo esse fugiat sit dolor dolore amet. Id labore
          et quis cupidatat sint et voluptate magna nulla amet. Nostrud minim ea
          id dolor consectetur minim pariatur adipisicing reprehenderit dolore.
          Ex velit minim aute laboris in exercitation. Consequat est incididunt
          incididunt minim commodo esse fugiat sit dolor dolore amet. Id labore
          et quis cupidatat sint et voluptate magna nulla amet. Nostrud minim ea
          id dolor consectetur minim pariatur adipisicing reprehenderit dolore.
        </div>
        <div className="col-md-5 text-center">
          <img src={aboutImg} alt="about" className="img-fluid about-img" />
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
