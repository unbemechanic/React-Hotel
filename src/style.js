import styled from "styled-components";
import HomeImg from '..//src/assets/home-background.jpeg'
import { Link } from "react-router-dom";
import Bedroom from '..//src/assets/home-bed.jpeg'
import Beach from '..//src/assets/home-beach.jpeg'
import FacilityHome from '..//src/assets/facility-home.jpeg'
import Gym from '..//src/assets/gym.jpeg'
import Bar from '..//src/assets/pool-side.jpeg'
import Spa from '..//src/assets/spa.jpeg'
import Pool from '..//src/assets/swimming-pool.jpeg'
import Restaurant from '..//src/assets/restaurant.jpeg'
import Laundry from '..//src/assets/laundry.jpeg'
import RoomsHome from '..//src/assets/room-home.jpeg'
import Single from '..//src/assets/single.jpeg'
import Double from '..//src/assets/double.jpeg'
import Twin from '..//src/assets/twin.jpeg'

export const Container = styled.div`
    display: flex;
    margin: 20px;
    width: 80%;
    justify-content: space-between;
    margin-inline: auto;
    z-index: 9999;
    flex-shrink: 100;
    position: ${(props)=>props.$navMain ? 'absolute' : ''};

    div{
        color: #fff;
        font-family: Montserrat;
        font-size: 25px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-decoration: none;
    }
`
export const SLink = styled(Link)`
    text-decoration: none;
`

export const HomeMainDiv = styled.div`
    background: rgba(20, 39, 74, 0.50);
    background-size: cover;
    display: flex;
    background: url(${HomeImg})  0px 0px / 100% 100vh no-repeat;
    background: ${(props)=>props.$facility ? `url(${FacilityHome}) rgba(20, 39, 74, 0.50)  0px 0px / 100% 100vh no-repeat` : ``} ;
    background: ${(props)=>props.$rooms ? `url(${RoomsHome}) rgba(20, 39, 74, 0.50)  0px 0px / 100% 100vh no-repeat` : ``} ;
    flex-shrink: 0;
    background-color: rgba(20, 39, 74, 0.50);
    background-blend-mode: multiply;
    
    div{
        color: white;
        font-weight: 600;
    }

    
   
`
export const Main = styled.div`
    width: 80%;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    margin: auto;
    color: ${(props)=>props.$second ? 'black':''};
    margin-bottom: ${(props)=>props.$second ? '50px':(props)=>props.$fourth ?'50px':''};
    text-align: ${(props)=>props.$fourth ? 'center' : ''};
    display: ${(props)=>props.$contactBody ? 'grid' :''};
    grid-template-columns: repeat(auto-fit, minmax(300px 1fr));
    
`

export const Logo = styled.div`
    height: 149px;
    width: 256px;
    background-color: #E0B973;
    flex-shrink: 0;
    border-radius: 0 0 20px 20px;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`

export const LogoP = styled.p`
    color: #14274A;
    font-family: "Adobe Garamond Pro";
    font-size: ${(props)=>props.$luxury ? '40px' : '15pxpx'};
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: ${(props)=>props.$luxury ? '6px' : '9px'};
    
`
export const HomeP = styled.div`
    color: #FFF;
    font-family: ${(props)=>props.$luxuryH ? "Adobe Garamond Pro" : (props)=>props.$hotelsH ? "Adobe Garamond" : 'Montserrat'};
    font-size: ${(props)=>props.$luxuryH ? "154px" : (props)=>props.$hotelsH ? '60px' : (props)=>props.$welcome ? '50px' : '25px'};
    font-style: normal;
    font-weight: ${(props)=>props.$luxuryH ? "700" : (props)=>props.$hotelsH ? '700' : '400'};
    line-height: normal;
    letter-spacing: ${(props)=>props.$luxuryH ? "10.78px" : (props)=>props.$hotelsH ? '24px' : (props)=>props.$welcome ? '' : '2.5px'};
    margin: ${(props)=>props.$paragraphs ? '4% 0' : ''};
`
export const HomeBtn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    text-align: center;
    button{
        width: 268px;
        height: 78px;
        background-color: #E0B973;
        color: #fff;
        font-family: Montserrat;
        font-weight: 700;
        font-size: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 7%;
       margin-bottom: 30px;
       border: none;
    }
    div{
        color: #FFF;
        font-family: Montserrat;
        font-size: 25px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: 1.25px;
       
    }
`
export const HomeSecondP = styled.p`
    color: #14274A;
    font-family: ${(props)=>props.$redefined ? "Adobe Garamond Pro" : 'Montserrat'};
    font-size: ${(props)=>props.$redefined ? "60px" : (props)=>props.$title ? '36px' : (props)=>props.$quote ? '30px' : '25px'};
    font-style: normal;
    font-weight: ${(props)=>props.$redefined ? "700" : (props)=>props.$quote ? '500':'400'};
    line-height: normal;
    margin: ${(props)=>props.$title ? '100px' : '0 50px '};
    margin-bottom: ${(props)=>props.$redefined ? '50px' : (props)=>props.$quote ? '20px': (props)=>props.$owner ? '20px':''};
    text-align: ${(props)=>props.$title ? 'center' :''};
    margin-top: ${(props)=>props.$title ? '100px' :''};

    
`
export const HomeSecDes = styled.div`
   border-left: 1px solid #14274A;
   display: flex;
   flex-direction: column;
   
`
export const DesBtn = styled.button`
    background-color: #E0B973;
    width: 236px;
    height: 63px;
    flex-shrink: 0;
    color: white;
    border: none;
    margin: 50px;
`
 export const HomeBackgrounds = styled.div`
    background-image: ${(props)=>props.$bed ? `url(${Bedroom})` : (props)=>props.$beach ? `url(${Beach})` : ''};
    background-repeat: no-repeat;
    background-size: contain;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    flex-shrink: 0;
 `

export const FooterMainDiv = styled.div`
    background-color: #14274A;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* width: 100%; */
    margin-top: 50px;
`
export const FooterShape = styled.div`
  width: 0;
  height: 0;
  border-left: 80px solid transparent;
  border-right: 80px solid transparent;
  border-bottom: 70px solid #14274A; 
    margin-top: -50px;
    margin-inline: auto;
`
export const FooterInner = styled.div` 
    width: 80%;
    margin-inline: auto;
    display: flex;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    padding: 50px 0;
    color: white;
    justify-content: space-between;
    
`
export const FooterContainer = styled.div`
    gap: ${(props)=>props.$info ? '20px':''};
    display: flex;
    flex-direction: column;
    flex-direction: ${(props)=>props.$socials ? 'row' :''};
    column-gap: ${(props)=>props.$socials ? '30px' :''};
`
export const FooterP = styled.p`
    color: #FFF;
    font-family: ${(props)=>props.$fLuxury ? "Adobe Garamond Pro" : (props)=>props.$hotel ? "Adobe Garamond Pro" : 'Montserrat' };
    font-size: ${(props)=>props.$fLuxury ? "25px" : (props)=>props.$hotel ? "9px" : '14px' };
    font-style: normal;
    font-weight: ${(props)=>props.$fLuxury ? "700" : (props)=>props.$hotel ? "700" : '400x' };
    line-height: normal;
    letter-spacing: ${(props)=>props.$fLuxury ? "3.75px" : (props)=>props.$hotel ? "5.4px" : '' };
    margin-top: ${(props)=>props.$hotel ? '7px' : ''};
    margin-left: ${(props)=>props.$hotel ? '10%' : ''};
    margin-bottom: ${(props)=>props.$hotel ? '22px' : ''};
`

export const Info = styled.div`
    color: #F7F7F7;
    -webkit-text-stroke-width: 0.5;
    -webkit-text-stroke-color: #FFF;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`
export const Icon = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    
    gap: 20px;
`

export const Email = styled.div`
    background-color: #E0B973;
    height: 52px;
    display: flex;
    border-radius: 5px;
    color: #14274A;
    margin-top: 30px;
    div{
        width: 50px;
        text-align: center;
        padding: 15px;
    }
    input{
        border: 2px solid #E0B973;
        border-radius: 5px 0 0 5px;
        background-color: #14274A;
        padding-left: 20px;
        color: #FFF;
        -webkit-text-stroke-width: 0.5;
        -webkit-text-stroke-color: #FFF;
        font-family: Montserrat;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        

    }
`

export const FacilityD = styled.div`
    width: 80%;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    margin: auto;
    color: #14274A;
`
export const FacilityP = styled.p`
    color: #14274A;
    text-align: center;
    color: #14274A;
    font-family: ${(props)=>props.$title ? "Adobe Garamond Pro" : 'Montserrat' } ;
    font-size: ${(props)=>props.$title ? "60px" : '25px' };
    font-style: normal;
    font-weight: ${(props)=>props.$title ? "700" : '400' } ;
    line-height: normal;
    letter-spacing: ${(props)=>props.$title ? "3px" : '' } ;
    margin: ${(props)=>props.$paragraph ? '50px 0' :''};
`
export const FacilityBackgrounds = styled.div`
    background-image: ${(props)=>props.$gym ? `url(${Gym})`: (props)=>props.$bar ? `url(${Bar})` :(props)=>props.$spa ? `url(${Spa})`: (props)=>props.$pool ? `url(${Pool})`:(props)=>props.$rest ? `url(${Restaurant})`:(props)=>props.$laundry ? `url(${Laundry})`:``} ;
    height: 80vh;
    background-repeat: no-repeat;
    background-size: cover;  
    background-position: center;
    flex-shrink: 100;
    background-color: rgba(20, 39, 74, 0.30);
    background-blend-mode: multiply;
    display: flex;
    align-items: flex-end;
    margin-bottom: 67px;
    p{
        color: #14274A;
        text-align: center;
        font-family: Montserrat;
        font-size: 48px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        background-color: white;
        width: auto;
        text-align: center;
        margin-inline: auto;
        padding-inline: 5%;
    }
`
export const RoomCondition = styled.div`
    background-color: #14274A;
    p{
        color: #FFF;
        font-family: Montserrat;
        font-size: 50px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-align: center;
        margin-bottom: 50px;
        padding: 18px 0;
    }
`
export const OfferRoom = styled.div`
    background-image: ${(props)=>props.$single ? `url(${Single})`:(props)=>props.$double ? `url(${Double})`:(props)=>props.$twin ? `url(${Twin})`: ``};
    height: 80vh;
    background-repeat: no-repeat;
    background-size: cover;  
    background-repeat: no-repeat;
    background-position: center;
    flex-shrink: 100;
    background-color: rgba(20, 39, 74, 0.30);
    background-blend-mode: multiply;
    display: flex;
    align-items: flex-end;
    /* margin-bottom: 67px; */
    

`
export const PlusIcon = styled.button`
    color: white;
    border-radius: 50%;
    background-color: #E0B973;
    border: none;
    font-size: 45px;
    font-weight: 700;
    text-align: center;
    justify-content: center;
    box-sizing: border-box;
    width: 51px;
    height: 51px;

`
export const RoomsP = styled.div`
    color: #14274A;
    text-align: center;
    font-family: Montserrat;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    display: flex;
    align-items: center;
    column-gap: 20px;
`
export const Control = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 50px;
`

export const FrameR = styled.div`
    border: 2px solid #14274A;
    border-radius: 0 0 10px 10px;
    margin-bottom: 50px;
`
export const PriceBtn =styled.div`
    color: #FFF;
        font-family: Montserrat;
        font-size: 25px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        background-color: #E0B973;
        border: none;
        border-radius: 5px;
        padding: 20px;
`

export const ContactCover = styled.div`
    background-color: #14274A;
    .contact{
        color: #FFF;
        font-family: Montserrat;
        font-size: 80px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin: auto;
        padding-bottom: 60px;
        
    }
`
export const ContactInfo = styled.div`
   display: flex;
   justify-content: space-between;
   column-gap: 150px;
`

export const ContactP = styled.div`
   color: #14274A;
   display: flex;
font-family: ${(props)=>props.$heading ? "Adobe Garamond Pro" :'Montserrat'} ;
font-size: ${(props)=>props.$heading ? "60px" : (props)=>props.$paragraph ? "30px" :'40px'};
font-style: normal;
font-weight: ${(props)=>props.$heading ? "700" :(props)=>props.$map ? '700' : '400'};
line-height: normal;
margin-bottom: ${(props)=>props.$heading ? "20px" :''};
margin: ${(props)=>props.$map ? "50px auto 50px auto" :'Montserrat'};
align-items: ${(props)=>props.$map ? "center" :'Montserrat'};
column-gap: ${(props)=>props.$map ? "30px" :'Montserrat'};
`

export const ContactMainDiv = styled.div`
width: 80%;
margin-inline: auto;
display: flex;
flex-direction: column;
margin-inline: auto;
margin-top: 200px;
margin-bottom: 200px;
row-gap: 100px;
`

export const FormControl = styled.form`
display: flex;
flex-direction: column;
align-items: flex-end;

.submit{
    color: #FFF;
font-family: Montserrat;
font-size: 25px;
font-style: normal;
font-weight: 700;
line-height: normal;
background-color: #E0B973;
width: 143px;
border: none;
padding: 10px;
border-radius: 3px;
}

fieldset{
    display: flex;
flex-direction: column;
border: none;

input{
    height: 58px;
    width: 270px;
    margin-bottom: 20px;
    font-weight: 400;
}
textarea{
    height: 300px;
    width: 270px;
    margin-bottom: 30px;
}
}
`
