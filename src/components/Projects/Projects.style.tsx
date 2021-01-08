import styled from "styled-components";
export const ContainerWithImage = styled.div`
  height: 95vh;
  margin: 40px;
  background-image: linear-gradient(
      to right bottom,
      rgba(30, 115, 172, 0.7),
      rgba(142, 57, 153, 0.6)
    ),
    url("https://i.pinimg.com/originals/6b/f5/1a/6bf51a5412f01287cd8f6e78f3e4045e.jpg");
  background-size: cover;
  background-position: top;
  margin-top: -30rem;
  clip-path: polygon(0 15vh, 100% 0, 100% 80vh, 0 100%);
  @media (max-width: 1024px) {
    height: 70vh;
    clip-path: polygon(0 15vh, 100% 0, 100% 50vh, 0 100%);
    margin: 20px;
  }
`;

export const GridCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 20rem;
`;

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
