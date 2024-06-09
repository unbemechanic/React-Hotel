import React from 'react'
import { ContactCover, ContactInfo, ContactMainDiv, ContactP, FormControl, HomeMainDiv, Logo, LogoP, Main } from '../../style'

const ContactComponent = () => {
  return (
    <div>
<ContactCover>
      <Main $contactHeader>
        <div>
            <Logo>
          <LogoP $luxury>LUXURY</LogoP> 
          <LogoP>HOTELS</LogoP> 
          </Logo>
        </div>
        <p className='contact'>CONTACT-US</p>
      </Main>
    </ContactCover>
    <ContactMainDiv $contactBody>
      <div>
          <ContactP $heading>WE ARE HERE FOR YOU</ContactP>
        <ContactP $paragraph>At Luxury Hotels, we take our customers seriously. Do you have any enquiries, compaints or requests, 
        please forward it to our support desk and we will get back to you as soon as possible.</ContactP>
      </div>
      <ContactInfo>
        <div>
          <ContactP>497 Evergreen Rd. Roseville, 
             CA 95673</ContactP>
          <ContactP $map>View map <svg xmlns="http://www.w3.org/2000/svg" width="84" height="38" viewBox="0 0 84 38" fill="none">
  <path d="M82.7678 20.7678C83.7441 19.7915 83.7441 18.2085 82.7678 17.2322L66.8579 1.32233C65.8816 0.34602 64.2986 0.34602 63.3223 1.32233C62.346 2.29864 62.346 3.88155 63.3223 4.85786L77.4645 19L63.3223 33.1421C62.346 34.1184 62.346 35.7014 63.3223 36.6777C64.2986 37.654 65.8816 37.654 66.8579 36.6777L82.7678 20.7678ZM0 21.5H81V16.5H0V21.5Z" fill="#14274A"/>
</svg></ContactP>
          <ContactP>Phone: +44 345 678 903 <br/>
           Email: luxury_hotels@gmail.com</ContactP>
        </div>
        <div>
          <FormControl method="post">
      <fieldset>
        <label for="first-name">Name <br/> <input id="first-name" name="first-name" type="text" required /></label>
        <label for="email">Enter Your Email: <br/> <input id="email" name="email" type="email" required /></label>
        <label for="new-password">Message <br/> <textarea id="new-password" name="new-password" type="password" pattern="[a-z0-5]{8,}" required></textarea></label>
      </fieldset>
      <input className='submit' type="submit" value="Submit" />
    </FormControl>
        </div>
      </ContactInfo>
    </ContactMainDiv>
    </div>
  )
}

export default ContactComponent