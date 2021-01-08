import React from "react";
import {
  CardImage,
  CardItem,
  ContainerWithImage,
  GridCard,
  Items,
  Title,
  Tools,
} from "./Projects.style";
import FrontLogo from "../../images/layers.svg";
import ServerLogo from "../../images/servers.svg";
import DbLogo from "../../images/server.svg";
import DeploymentLogo from "../../images/cloud.svg";

const tools = [
  {
    imageUrl: FrontLogo,
    name: "Front End",
    items: [
      { toolName: "HTML5" },
      { toolName: "CSS3 | SASS" },
      { toolName: "JavaScript" },
      { toolName: "React |Redux" },
    ],
  },
  {
    imageUrl: ServerLogo,
    name: "Server",
    items: [
      { toolName: "NodeJS" },
      { toolName: "Express" },
      { toolName: "Koa" },
      { toolName: "Python" },
    ],
  },
  {
    imageUrl: DbLogo,
    name: "Database",
    items: [
      { toolName: "PostgreSQL" },
      { toolName: "mySQL" },
      { toolName: "MongoDB" },
      { toolName: "Sylius" },
    ],
  },
  {
    imageUrl: DeploymentLogo,
    name: "Deployment",
    items: [
      { toolName: "System Design" },
      { toolName: "AWS ECS | SQS" },
      { toolName: "Docker" },
      { toolName: "Git" },
    ],
  },
];
function Projects() {
  return (
    <>
      <ContainerWithImage>
        <GridCard>
          {tools &&
            tools.map((item) => (
              <CardItem>
                <CardImage src={item.imageUrl} />
                <Tools>
                  <Title>{item.name}</Title>
                  {item.items.map((toolname) => (
                    <Items>{toolname.toolName}</Items>
                  ))}
                </Tools>
              </CardItem>
            ))}
        </GridCard>
      </ContainerWithImage>
    </>
  );
}

export default Projects;
