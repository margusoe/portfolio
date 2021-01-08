import styled from "styled-components";

export const MainWrapper = styled.div`
  background-color: #fff;
  padding: 20rem 0;
  margin: -35vh 0 10vh;

  @media (max-width: 1024px) {
    margin: -25vh 0 0vh;
    padding: 20rem 0 0;
  }
`;

export const MiddleHeader = styled.div`
  font-size: 3.5rem;
  font-weight: 700;
  color: #333;
  letter-spacing: 2px;
  transition: all 0.2s;
  font-family: "Lobster", sans-serif;
  text-align: center;
  width: 650px;
  margin: 0 auto 8rem;

  &:hover {
    transform: rotate(-5deg) scale(1.5);
    @media (max-width: 1024px) {
      transform: rotate(-8deg) scale(1.1);
    }
  }
  @media (max-width: 1024px) {
    font-size: 3rem;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 95rem;
  margin: 0 300px;
  @media (max-width: 1024px) {
    margin: 0 40px;
  }
`;
export const ParagraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 3rem;
`;

export const Header = styled.span`
  font-family: "Merriweather", sans-serif;
  font-size: 15px;
  font-weight: 700;
  color: #777;
`;
export const Paragraph = styled.span`
  font-family: "Merriweather", sans-serif;
  font-size: 15px;
  font-weight: 400;
  color: #777;
  padding: 20px 0;
  letter-spacing: 0.5px;
  line-height: 1.7;
  width: 100%;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const LogoImages = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 0 20px;
  filter: drop-shadow(1px 1px 2px #222);
  z-index: 10;
  transition: all 0.2s;

  @media (max-width: 1024px) {
    width: 120px;
    height: 120px;
  }

  &:hover {
    transform: scale(1.1) translateY(0.2rem);
    -webkit-filter: drop-shadow(1.5px 1.5px 4px #222);
    filter: drop-shadow(1.5px 1.5px 4px #222);
    z-index: 20;
    cursor: pointer;
  }
`;
