import React from "react";
import {
  CardImage,
  CardItem,
  ContainerWithImage,
  GridCard,
  GridCardBack,
  Header,
  Items,
  Title,
  Tools,
} from "./Experience.style";

const tools = [
  {
    name: "Hibeauty",
    items: [
      { toolName: "ReactJS" },
      { toolName: "NextJS" },
      { toolName: "Sylius" },
      { toolName: "Symfony" },
      { toolName: "GraphQL" },
      { toolName: "ExpressJS" },
      { toolName: "OdooERP" },
    ],
  },
  {
    name: "Babystore",
    items: [
      { toolName: "ReactJS" },
      { toolName: "NextJS" },
      { toolName: "Sylius" },
      { toolName: "Symfony" },
      { toolName: "GraphQL" },
      { toolName: "ExpressJS" },
      { toolName: "OdooERP" },
    ],
  },
];
function Experience() {
  return (
    <>
      <ContainerWithImage>
        <section id="projects">
          <Header>Project Portfolio</Header>

          <GridCard>
            {tools &&
              tools.map((item) => (
                <a
                  href={
                    item.name == "Hibeauty"
                      ? "https://hibeauty.mn/"
                      : "https://babystore.mn/"
                  }
                >
                  <CardItem>
                    <Tools>
                      <Title>{item.name}</Title>
                      {item.items.map((toolname) => (
                        <Items>{toolname.toolName}</Items>
                      ))}
                    </Tools>
                  </CardItem>
                </a>
              ))}
          </GridCard>
        </section>
      </ContainerWithImage>
    </>
  );
}

export default Experience;
