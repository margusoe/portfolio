import React from "react";
import LogoIcon from "../../images/logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";
import {
  MainContainer,
  TopHeader,
  LogoContainer,
  HeaderContainer,
  NameContainer,
  MajorContainer,
  SeeMoreProjectButton,
} from "./Banner.style";

function Banner() {
  return (
    <MainContainer>
      <TopHeader>
        <LogoContainer src={LogoIcon} />
        <HeaderContainer>
          <NameContainer>Bayarsaikhan Otgonchuluu</NameContainer>
          <MajorContainer>Front End Engineer</MajorContainer>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <SeeMoreProjectButton>See Projects</SeeMoreProjectButton>
          </Link>
        </HeaderContainer>
      </TopHeader>
    </MainContainer>
  );
}

export default Banner;
