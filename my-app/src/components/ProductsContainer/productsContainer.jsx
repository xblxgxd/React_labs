import './productsContainer.css';
import React from 'react';
const ProductsContainerComp = () => {
  

    return(
        <section id="products-container" class="nav_section-products">
      <div class="products-container">
        <div class="img-for-card-1" >
          <h3 class="first-text-block-for-card_1" id="dual">NEW V2 DUAL</h3>
          <div class="second-text-block-for-card_1" id="pro">
            V2 Dual Pro.<br />Oh. So. Pro.
          </div>
          <div class="third-text-block--price-for-card_1" id="price">
            From $999.00 or <br />$41.62 /mo. <br />
            for 24 mo. before trade-in *
          </div>
        </div>
        <div class="img-for-card-2" >
          <h3 class="first-text-block-for-card_2" id="x">BOOSTED MINI X</h3>
          <div class="second-text-block-for-card_2" id="power">
            Mega power. Mini sized.
          </div>
          <div class="third-text-block--price-for-card_2" id="price2">
            From $499 or $41.58/mo. for 12 mo.
          </div>
        </div>
        <div class="img-for-card-3" >
          <h3 class="first-text-block-for-card_3" id="stealth">BOOSTED STEALTH</h3>
          <div class="second-text-block-for-card_3" id="pro2">
            STEALTH Pro.<br />Your new superpower.
          </div>
          <div class="third-text-block--price-for-card_3" id="price3">
            From $999.00 or $41.62 /mo. for 24 mo. <br />
            before trade-in *
          </div>
        </div>
      </div>
    </section>
    )

}
export default ProductsContainerComp 