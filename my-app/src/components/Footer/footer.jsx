import './footer.css';
import React from 'react';
class FooterComp extends React.Component{
  render(){

    return(
        <footer>
        <div class="footer-container">
          <div class="footer-logo">
            <a href="#">
              <img src="img/footer/01.png" alt="" />
            </a>
          </div>
  
          <div class="middle">
            <div class="middle-title" id="explore">Explore</div>
            <div class="middle-list">
              <ul>
                <li class="middle-list-item">
                  <a class="footer-menu-item-link" href="#"
                    id="skateboards">Electric Skateboards</a
                  >
                </li>
                <li class="middle-list-item">
                  <a class="footer-menu-item-link" href="#" id="scooters">Electric Scooters</a>
                </li>
                <li class="middle-list-item">
                  <a class="footer-menu-item-link" href="#" id="accessories">Accessories</a>
                </li>
                <li class="middle-list-item">
                  <a class="footer-menu-item-link" href="#">FAQs</a>
                </li>
                <li class="middle-list-item">
                  <a class="footer-menu-item-link" href="#" id="warranty">Warranty</a>
                </li>
                <li class="middle-list-item">
                  <a class="footer-menu-item-link" href="#" id="quick">Quick Start Guide</a>
                </li>
                <li class="middle-list-item">
                  <a class="footer-menu-item-link" href="#" id="contact">Contact</a>
                </li>
                <li class="middle-list-item">
                  <a class="footer-menu-item-link" href="#" id="gift">Gift Card</a>
                </li>
                <li class="middle-list-item">
                  <a class="footer-menu-item-link" href="#"
                    id="accessibility">Accessibility Statement</a
                  >
                </li>
              </ul>
            </div>
          </div>
  
          <div class="right">
            <div class="right-title" id="about">About Boosted USA</div>
            <div class="right-subtitle-1">
              <p class="right-subtitle-text" id="description9">
                Boosted empowers people everywhere to commute across their cities,
                campuses, and communities in ways that were never before possible.
                Boosted is solving one of the biggest problems people face each
                day: transportation.
              </p>
            </div>
            <div class="right-subtitle-2">
              CaliRides LLC - DBA Boosted USA <br />
              1281 Andersen Drive Ste. K <br />
              San Rafael, CA 94901
            </div>
          </div>
        </div>
        <section class="footer-bottom-container">
          <div class="footer-bottom-left">
            © 2021 <a class="footer-bottom-link" href="#">Boosted USA</a>. All
            Rights Reserved.
            <a class="footer-bottom-link" href="#">Terms of Service</a>. Built by
            <a class="footer-bottom-link" href="#">BH</a>
          </div>
          <div class="footer-bottom-right"></div>
        </section>
      </footer>  
    )
  }
}
export default FooterComp 