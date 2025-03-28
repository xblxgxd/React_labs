import './advantages.css';
import React from 'react';
class AdvantagesComp extends React.Component{
  render(){

    return(
        <section id="advantages" class="nav_container-advantages">
      <div class="advantages">
        <div class="advantages-item-1">
          <div class="advantages-logo">
            <img src="img/advantages/01.png" alt="" />
          </div>
          <div class="advantages-title" id="fast">Go Fast</div>
          <div class="advantages-subtitle" id="description5">
            Boosted is known for its premium <br />
            performance boards offering a next-level experience.
          </div>
        </div>
        <div class="advantages-item-1">
          <div class="advantages-logo">
            <img src="img/advantages/02.png" alt="" />
          </div>
          <div class="advantages-title" id="far">Go Far</div>
          <div class="advantages-subtitle" id="description6">
            With optional extended battery life, you can <br />
            get wherever you need to go reliably.
          </div>
        </div>
        <div class="advantages-item-1">
          <div class="advantages-logo">
            <img src="img/advantages/03.png" alt="" />
          </div>
          <div class="advantages-title" id="safe">Go Safe</div>
          <div class="advantages-subtitle" id="description7">
            Safety is a #1 priority for Boosted, always <br />
            wear a helmet when riding.
          </div>
        </div>
        <div class="advantages-item-1">
          <div class="advantages-logo">
            <img src="img/advantages/04.png" alt="" />
          </div>
          <div class="advantages-title" id="built">Built to Last!</div>
          <div class="advantages-subtitle" id="description8">
            Boosted products are engineered to last <br />
            for years and are extremely reliable.
          </div>
        </div>
      </div>
    </section>
    )
  }
}
export default AdvantagesComp 