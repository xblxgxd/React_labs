import './slider.css';
export default function SliderComp(){
    return (
        <section id="product-container" class="nav_container-product">
        <button class="arrow arrow-left" onclick="moveSlide(-1)">&#10094;</button>
        <div class="product-container">
          <div class="product-item">
            <img
              src="./img/products/Rectangle.jpg"
              alt="Rev Tube"
              class="product-img"
            />
            <div class="product-title" id="tube">Rev Tube</div>
            <div class="product-price">
              $19.00<span class="product-old-price">$16.00</span>
            </div>
          </div>
          <div class="product-item">
            <img
              src="./img/products/Rectangle%20(1).jpg"
              alt="Boosted Rev Stem Catch"
              class="product-img"
            />
            <div class="product-title" id="stem">Boosted Rev Stem Catch</div>
            <div class="product-price">
              $29.00<span class="product-old-price">$19.00</span>
            </div>
          </div>
          <div class="product-item">
            <img
              src="./img/products/Rectangle%20(2).jpg"
              alt="Stomp Brake Fender"
              class="product-img"
            />
            <div class="product-title" id="stomp">Stomp Brake Fender</div>
            <div class="product-price">$29.00</div>
          </div>
          <div class="product-item">
            <img
              src="./img/products/Rectangle%20(3).jpg"
              alt="Boosted Belt Kit"
              class="product-img"
            />
            <div class="product-title" id="belt">Boosted Belt Kit</div>
            <div class="product-price">$29.00</div>
          </div>
          <div class="product-item">
            <img
              src="./img/products/Rectangle%20(4).jpg"
              alt="Bearing Service Kit"
              class="product-img"
            />
            <div class="product-title" id="kit">Bearing Service Kit</div>
            <div class="product-price">$19.00</div>
          </div>
          <div class="product-item">
            <img
              src="./img/products/Rectangle%20(5).jpg"
              alt="Boosted Pulley / Belt Upgrade Kit"
              class="product-img"
            />
            <div class="product-title" id="pulley">Boosted Pulley / Belt Upgrade Kit</div>
            <div class="product-price">$39.00</div>
          </div>
          <div class="product-item">
            <img
              src="/img/products/Rectangle%20(6).jpg"
              alt="Boosted Skid Plates"
              class="product-img"
            />
            <div class="product-title" id="plates">Boosted Skid Plates</div>
            <div class="product-price">$19.00</div>
          </div>
        </div>
        <button class="arrow arrow-right" onclick="moveSlide(1)">&#10095;</button>
      </section>
    )
}