import './firstBanner.css';
import React from 'react';
const FirstBannerComp = () =>{ 
    

        return(
          <div class="first-banner _container">
            <h1 class="first-banner-title" id="description">Welcome to Boosted USA</h1>
            <p class="first-banner-subtitle" id="grail">
                The Holy Grail of Electric Skateboards and One REVolutionary Scooter
            </p>
            <div class="first-banner-buttons-container">
                <div>
                    <a class="first-banner-button-link" href="https://boostedusa.com" id="revs">
                        BOOSTED REVS
                    </a>
                    <a class="first-banner-button-link" href="https://boostedusa.com" id="boards">
                        BOOSTED BOARDS
                    </a>
                </div>
            </div>
            <div class="middle-conatiner-audio">
                <figure>
                    <figcaption>Music:</figcaption>
                    <audio controls src="/audio/Drake_Playboi_Carti_-_Pain_1993_69536635.mp3"></audio>
                </figure>
            </div>
        </div>
          )
    
}
export default FirstBannerComp 