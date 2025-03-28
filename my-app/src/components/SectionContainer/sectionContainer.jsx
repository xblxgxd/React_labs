import './sectionContainer.css';
import React from 'react';
class SectionContainerComp extends React.Component{
  render(){

    return(
        
    <section id="main-section-container"> 
      <section id="section-container" class="nav_container-section">
        <div class="section-container element">
          <div class="elem-container">
            <div class="element-1"></div>
            <div class="element-2"></div>
          </div>
          <div class="element-3">
            <div class="element-3-title" id="boosted">Boosted Rev</div>
            <div class="element-3-subtitle" id="description4">
              There's never been an electric scooter quite like <br />
              this. Speed past traffic at 24 mph. Go up to 22<br />
              miles on a single charge. You'll get there in no time<br />
              at all. Stop and go with the roll of your thumb. Its <br />intuitive
              design means there’s almost no learning <br />curve.
            </div>
            <div class="element-3-button">
              <a class="element-3-button-link" href="#"> Shop Now </a>
            </div>
          </div>
        </div>
      </section>
  
      <section class="cards__container">
        <div class="card__1">
          <a class="card-1-link" href="#">
            <div class="card__1__img">
              <div class="overlay-cards">
                <div class="card__1__title" id="Stealth">Shop Boosted Stealth</div>
                <div class="card__1__subtitle" id="stock3" >IN STOCK</div>
              </div>
            </div>
          </a>
        </div>
  
        <div class="card__2">
          <a class="card-2-link" href="#">
            <div class="card__2__img">
              <div class="overlay-cards">
                <div class="card__2__title" id="plus">Shop Boosted Plus</div>
                <div class="card__2__subtitle" id="stock3">IN STOCK</div>
              </div>
            </div>
          </a>
        </div>
  
        <div class="card__3">
          <a class="card-3-link" href="#">
            <div class="card__3__img">
              <div class="overlay-cards">
                <div class="card__3__title" id="mini">Shop Boosted Mini</div>
                <div class="card__3__subtitle" id="stock3">IN STOCK</div>
              </div>
            </div>
          </a>
        </div>
      </section>
    </section> 
    )
  }
}
export default SectionContainerComp