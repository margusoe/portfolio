import React from "react";
import {
  Container,
  Header,
  LogoContainer,
  LogoImages,
  MainWrapper,
  MiddleHeader,
  Paragraph,
  ParagraphContainer,
} from "./Main.style";

import JSLogo from "../../images/jsLogo.png";
import NodeLogo from "../../images/nodejs.png";
import ReactLogo from "../../images/react.png";

function Main() {
  return (
    <MainWrapper>
      <MiddleHeader>Front end focused with full stack experience</MiddleHeader>
      <Container>
        <ParagraphContainer>
          <Header>MOTIVATED TO PRODUCE RESULTS</Header>
          <Paragraph>
            As a tenacious self-taught programmer, I use continuous iteration to
            produce results quickly and continuously improve products.
          </Paragraph>
          <Header>AN AGILE COLLABORATOR</Header>
          <Paragraph>
            I have contributed to open source projects, worked on engineering
            teams, and always stay attuned to the newest frameworks.
          </Paragraph>
        </ParagraphContainer>
        <LogoContainer>
          <LogoImages src={JSLogo} />
          <LogoImages src={NodeLogo} />
          <LogoImages src={ReactLogo} />
        </LogoContainer>
      </Container>
    </MainWrapper>
  );
}

export default Main;
