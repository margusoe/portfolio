import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0 20px;
  background: linear-gradient(276.34deg, purple 10%, #003b59 100%);
  box-shadow: 0px -7px 20px #6c6c6c;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const Logo = styled.img`
  width: 100px;
  height: 100px;
  margin: 0 auto;
`;
export const ContactInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 95rem;
  margin: 20px 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 1024px) {
    margin: 20px 40px;
  }
`;

export const SocialInfo = styled.div`
  display: flex;
  flex-direction: row;
  border-top: 1px solid #000;
  padding-top: 20px;
  a {
    text-decoration: none;
  }
`;

export const CopyRight = styled.div`
  font-size: 24px;
  color: #ff8b3d;
  display: flex;
  flex-direction: row;
  border-top: 1px solid #000;
  font-family: "Philosopher", sans-serif;
  font-weight: 500;
  padding-top: 20px;
  a {
    text-decoration: none;
  }
`;

export const SocialSpan = styled.span`
  font-size: 24px;
  padding-right: 20px;
  text-decoration: none;
  color: #000;
  display: inline-block;
  transition: all 0.2s;
  font-family: "Philosopher", sans-serif;
  font-weight: 500;

  &:hover {
    transform: rotate(5deg) scale(1.5);
  }
`;

export const SiteBy = styled.span`
  font-size: 24px;
  padding-left: 20px;
  display: inline-block;
  color: #000;
  font-family: "Philosopher", sans-serif;
  font-weight: 500;
  transition: all 0.2s;
  &:hover {
    transform: rotate(-5deg) scale(1.5);
  }
`;
