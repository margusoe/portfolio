import styled from "styled-components";
export const ContainerWithImage = styled.div`
  margin: 0;
`;
export const Header = styled.div`
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
      transform: rotate(-14deg) scale(1.1);
    }
  }
  @media (max-width: 1024px) {
    font-size: 3rem;
    margin-top: -3rem;
  }
`;
export const GridCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-bottom: 10rem;

  a {
    text-decoration: none;
    color: #333;
  }
  a:visited {
    text-decoration: none;
  }
`;

export const GridCardBack = styled.div``;

export const CardItem = styled.div`
  width: 200px;
  height: 300px;
  background-color: #ededed;
  opacity: 0.4;
  border: 1px solid #ededed;
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
  border-radius: 10px;
  transition: all 0.5s;
  &:hover {
    transform: scale(1) translateY(-8px);
    opacity: 0.7;
    cursor: pointer;
  }
`;

export const CardImage = styled.img`
  width: 50px;
  height: 50px;
`;

export const Title = styled.span`
  font-size: 20px;
  font-family: "Lobster", sans-serif;
  padding: 20px;
`;

export const Tools = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Items = styled.span`
  font-family: "Philosopher", sans-serif;
  font-size: 15px;
  color: #333;
  padding: 2px;
`;
