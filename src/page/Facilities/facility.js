import React from 'react'
import { DesBtn, FacilityBackgrounds, FacilityD, FacilityP, HomeBackgrounds, HomeBtn, HomeMainDiv, HomeP, HomeSecDes, HomeSecondP, Logo, LogoP, Main } from '../../style'

const FacilityComponent = () => {
  return (
    <div>
      <HomeMainDiv $facility>
      <Main>
        <div>
            <Logo>
          <LogoP $luxury>LUXURY</LogoP> 
          <LogoP>HOTELS</LogoP> 
          </Logo>
        </div>
        <HomeP $paragraphs>
          <HomeP $welcome>WELCOME TO</HomeP>
          <HomeP $luxuryH>LUXURY</HomeP>
          <HomeP $hotelsH>HOTELS</HomeP>
          <HomeP>Book your stay and enjoy Luxury <br/> redefined at the most affordable rates.</HomeP>
        </HomeP>
        <HomeBtn>
          <button><svg xmlns="http://www.w3.org/2000/svg" width="28" height="26" viewBox="0 0 28 26" fill="none">
            <path d="M12.8333 0H15.1666V2.33333H12.8333V0Z" fill="white"/>
            <path d="M19.8333 0H22.1666V2.33333H19.8333V0Z" fill="white"/>
            <path d="M5.83325 0H8.16658V2.33333H5.83325V0Z" fill="white"/>
            <path d="M26.8333 2.33325H22.1667V5.83325H19.8333V2.33325H15.1667V5.83325H12.8333V2.33325H8.16667V5.83325H5.83333V2.33325H1.16667C0.857247 2.33325 0.560501 2.45617 0.341709 2.67496C0.122916 2.89375 0 3.1905 0 3.49992L0 24.4999C0 24.8093 0.122916 25.1061 0.341709 25.3249C0.560501 25.5437 0.857247 25.6666 1.16667 25.6666H26.8333C27.1427 25.6666 27.4395 25.5437 27.6583 25.3249C27.8771 25.1061 28 24.8093 28 24.4999V3.49992C28 3.1905 27.8771 2.89375 27.6583 2.67496C27.4395 2.45617 27.1427 2.33325 26.8333 2.33325ZM21.4887 17.2826L19.8333 16.0999V20.9999C19.8333 21.3093 19.7104 21.6061 19.4916 21.8249C19.2728 22.0437 18.9761 22.1666 18.6667 22.1666H15.75V17.4999C15.75 17.1905 15.6271 16.8938 15.4083 16.675C15.1895 16.4562 14.8927 16.3333 14.5833 16.3333H13.4167C13.1072 16.3333 12.8105 16.4562 12.5917 16.675C12.3729 16.8938 12.25 17.1905 12.25 17.4999V22.1666H9.33333C9.02391 22.1666 8.72717 22.0437 8.50837 21.8249C8.28958 21.6061 8.16667 21.3093 8.16667 20.9999V16.0999L6.51146 17.2826L5.15521 15.3839L13.3219 9.55054C13.5206 9.41124 13.7573 9.33651 14 9.33651C14.2427 9.33651 14.4794 9.41124 14.6781 9.55054L22.8448 15.3839L21.4887 17.2826Z" fill="white"/>
            </svg> BOOK NOW</button>
            <div>
              <div style={{marginBottom:'30%'}}>Scroll</div>
                <svg xmlns="http://www.w3.org/2000/svg" width="61" height="61" viewBox="0 0 61 61" fill="none">
                <path d="M30.6621 60.9999C23.627 60.9938 16.8102 58.5565 11.3661 54.1007C5.92196 49.6449 2.18505 43.4446 0.788163 36.5496C-0.608724 29.6546 0.420267 22.4887 3.70089 16.2653C6.98151 10.042 12.3121 5.14369 18.7901 2.3999C26.2181 -0.616122 34.5348 -0.587082 41.9416 2.48074C49.3484 5.54856 55.25 11.4086 58.3701 18.7935C61.4902 26.1785 61.5779 34.4948 58.6145 41.9439C55.651 49.3931 49.8745 55.3764 42.5341 58.5999C38.7786 60.1905 34.7406 61.0068 30.6621 60.9999ZM18.4391 20.7549L13.4221 25.6549L30.2621 42.0999L47.1031 25.6499L42.0861 20.7499L30.2621 32.2999L18.4391 20.7549Z" fill="white"/>
                 </svg>
            </div>
        </HomeBtn>
      </Main>
    </HomeMainDiv>
    <FacilityD>
        <FacilityP $title>FACILITIES</FacilityP>
        <FacilityP $paragraph>We want your stay at our lush hotel to be truly unforgettable.  That is why we give special attention to all of your needs so 
        ers the perfect setting with stunning views for leisure
         of all. </FacilityP>
        <FacilityBackgrounds $gym>
          <p>THE GYM</p>
        </FacilityBackgrounds>
        <FacilityBackgrounds $bar>
          <p>POOLSIDE BAR</p>
        </FacilityBackgrounds>
        <FacilityBackgrounds $spa>
          <p>THE SPA</p>
        </FacilityBackgrounds>
        <FacilityBackgrounds $pool>
          <p>SWIMMING POOL</p>
        </FacilityBackgrounds>
        <FacilityBackgrounds $rest>
          <p>RESTAURANT</p>
        </FacilityBackgrounds>
        <FacilityBackgrounds $laundry>
          <p>LAUNDRY</p>
        </FacilityBackgrounds>
    </FacilityD>
      <Main $fourth>
        <div>
          <HomeSecondP $redefined>Testimonials</HomeSecondP>
          <HomeSecondP $quote>"Calm, Serene, Retro – What a way to relax and enjoy"</HomeSecondP>
          <HomeSecondP $owner> Mr. and Mrs. Baxter, UK</HomeSecondP>
          <div><svg style={{marginBottom:'100px'}} xmlns="http://www.w3.org/2000/svg" width="121" height="50" viewBox="0 0 121 50" fill="none">
          <path d="M111 0H81C75.4772 0 71 4.47715 71 10V40C71 45.5228 75.4772 50 81 50H111C116.523 50 121 45.5228 121 40V10C121 4.47715 116.523 0 111 0Z" fill="#E0B973"/>
          <path d="M102.34 24.692L92.647 34.385L89.76 31.498L96.566 24.692L89.76 17.885L92.647 14.998L102.34 24.692Z" fill="white"/>
          <path d="M10 50L40 50C45.5228 50 50 45.5228 50 40L50 10C50 4.47715 45.5228 0 40 0L10 0C4.47715 0 0 4.47715 0 10L0 40C0 45.5228 4.47715 50 10 50Z" fill="#E0B973"/>
          <path d="M18.66 24.693L28.353 15L31.24 17.887L24.434 24.693L31.24 31.5L28.353 34.387L18.66 24.693Z" fill="white"/>
        </svg></div>
        </div>
      </Main>
    </div>
    
  )
}

export default FacilityComponent