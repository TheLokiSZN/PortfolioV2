import React from "react";
import "./portfolio.css";
// import Card from "react-bootstrap/Card";
import {Card, CardText, CardBody, CardTitle, CardLink, CardImg, ListGroup, ListGroupItem} from 'reactstrap';

function Projects({ projects }) {
  const {
    name,
    // link,
    // description,
    // repoLink,
    img
    // Card,
    // ListGroup,
    // ListGroupItem,
  } = projects;
  return (
    // <div style={{display:"inline-block", padding: '5px'}}>
    //   <div className="projects" key={name}>
    //   <a href={link}>
    //     <img
    //       src={img}
    //       className="projectImg"
    //       alt={name}
    //     />
    //     </a>
    //     <div className="projectText">
    //       <h3>
    //         Project: {name}
    //       </h3>
    //       <p className="description">
    //         {description}
    //       </p>
    //       <p>
    //         <a href={repoLink}>Repo: {name}</a>
    //       </p>
    //     </div>
    //   </div>
    // </div>

    <Card style={{ width: "18rem" }}>
      <CardImg variant="top" src={img} />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardText>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </CardText>
      </CardBody>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Cras justo odio</ListGroupItem>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>Vestibulum at eros</ListGroupItem>
      </ListGroup>
      <CardBody>
        <CardLink href="#">Card Link</CardLink>
        <CardLink href="#">Another Link</CardLink>
      </CardBody>
    </Card>
  );
}

export default Projects;
