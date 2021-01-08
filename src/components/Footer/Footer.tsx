import React from "react";
import {
  ContactInfo,
  CopyRight,
  FooterContainer,
  Logo,
  SocialInfo,
  SocialSpan,
  SiteBy,
} from "./Footer.style";
import FooterLogo from "../../images/logo.svg";
function Footer() {
  return (
    <FooterContainer>
      <Logo src={FooterLogo} />
      <ContactInfo>
        <SocialInfo>
          <a href="https://github.com/margusoe">
            <SocialSpan>GitHub</SocialSpan>
          </a>

          <a href="https://www.linkedin.com/in/otgonchuluu-bayarsaikhan/">
            <SocialSpan>LinkedIn</SocialSpan>
          </a>
        </SocialInfo>
        <CopyRight>
          Site By :
          <a href="https://www.instagram.com/margusoe/">
            <SiteBy>Otgonchuluu</SiteBy>
          </a>
        </CopyRight>
      </ContactInfo>
    </FooterContainer>
  );
}

export default Footer;
