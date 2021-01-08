import styled from "styled-components";
export const MainContainer = styled.div``;
export const NameContainer = styled.div`
  font-size: 60px;
  font-weight: 700;
  font-family: "Lobster", sans-serif;
  color: #fff;
`;
export const MajorContainer = styled.div`
  font-size: 34px;
  font-weight: 400;
  font-family: "Lobster", sans-serif;
  padding: 20px;
  color: #fff;
`;
export const SeeMoreProjectButton = styled.button`
  height: 40px;
  width: 150px;
  border-radius: 50px;
  border: none;
  background-color: #fff;
  font-size: 15px;
  text-transform: uppercase;
  font-weight: 500;
  color: #333;

  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;
export const TopHeader = styled.div`
  height: 95vh;
  margin: 40px;
  background-image: linear-gradient(
      to right bottom,
      rgba(30, 115, 172, 0.7),
      rgba(142, 57, 153, 0.6)
    ),
    url("https://acegif.com/wp-content/uploads/moon.gif");
  background-size: cover;
  background-position: top;
  clip-path: polygon(0 0, 100% 0, 100% 80vh, 0 100%);

  @media (max-width: 1024px) {
    height: 45vh;
    clip-path: polygon(0 0, 100% 0, 100% 35vh, 0 100%);
    margin: 20px;
  }
`;
export const HeaderContainer = styled.div`
  text-align: center;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 1024px) {
    top: 20%;
    left: 50%;
  }
`;
export const LogoContainer = styled.img`
  position: absolute;
  top: 4rem;
  left: 4.5rem;
  width: 40px;
  height: 40px;
`;
