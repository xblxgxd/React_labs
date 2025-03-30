import './thirdBanner.css';
import React from 'react';

const ThirdBannerComp = () => {
  return (
    <div className="third-banner-container">
      <div className="third-banner-sub-title-1" id="performance">High-performance</div>
      <div className="third-banner-title" id="skateboards">Electric Skateboards</div>
      <div className="third-banner-sub-title-2" id="description3">
        Cruising campus, going to work or getting through that long list <br />
        of errands has never been easier or more fun.
      </div>
      <div className="third-banner-button-container">
        <a className="third-banner-button" href="#" id="shop"> Shop Now </a>
      </div>
      <div className="middle-container-audio2">
        <figure>
          <figcaption>Music:</figcaption>
          <audio controls src="/audio/Ken_Carson_-_Nobody_75841999.mp3"></audio>
        </figure>
      </div>
    </div>
  );
};

export default ThirdBannerComp;