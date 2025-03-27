import './secondBanner.css';
export default function  SecondBannerComp(){
    return(
        <div class="second-banner">
      <div class="_container">
        <h2 class="second-banner-title" id="description2">
          Looking for Boosted Boards, or Boosted Revs?
        </h2>
        <p class="second-banner-subtitle" id="block">
          Boosted USA acquired all of the remaining inventory directly from
          Boosted. This means we have the <br />
          electric skateboards and scooter you all love and have been looking
          for. Get your hands on these <br />
          highly sought after products while supplies last.
        </p>
      </div>
      <div class="second-banner-divider-container">
        <div class="second-banner-divider"></div>
      </div>

      <div class="second-banner-blocks-container">
        <div class="second-banner-left">
          <div class="second-banner-left-img">
            <img
              class="second-banner-left-logo"
              src="img/second-banner/Vector.svg"
              alt=""
            />
          </div>
          <div class="second-banner-left-title" id="stock1">Shop Boosted Boards</div>
          <div class="second-banner-left-sub-title" id="stock2">In Stock</div>
        </div>

        <div class="second-banner-right">
          <div class="second-banner-right-img">
            <img
              class="second-banner-right-logo"
              src="img/second-banner/Vector.svg"
              alt=""
            />
          </div>

          <div class="second-banner-right-title">
            <p id="stock1">Shop Boosted Boards</p>
          </div>

          <div class="second-banner-right-sub-title" id="stock2">In Stock</div>
        </div>
      </div>
    </div>
    )
}