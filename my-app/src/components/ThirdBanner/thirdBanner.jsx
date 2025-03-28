import './thirdBanner.css';
import React from 'react';
class ThirdBannerComp extends React.Component{
  render(){

    return(
        <div class="third-banner-container">
      <div class="third-banner-sub-title-1" id="performance">High-performance</div>
      <div class="third-banner-title" id="skateboards">Electric Skateboards</div>
      <div class="third-banner-sub-title-2" id="description3">
        Cruising campus, going to work or getting through that long list <br />
        of errands has never been easier or more fun.
      </div>
      <div class="third-banner-button-container">
        <a class="third-banner-button" href="#" id="shop"> Shop Now </a>
      </div>
      <div class="middle-conatiner-audio2">
        <figure>
          <figcaption>Music:</figcaption>
          <audio controls src="/audio/Ken_Carson_-_Nobody_75841999.mp3"></audio>
        </figure>
      </div>
    </div>
    )
  }
}
export default ThirdBannerComp