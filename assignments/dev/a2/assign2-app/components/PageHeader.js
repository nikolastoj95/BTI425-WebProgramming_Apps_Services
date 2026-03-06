import {Card } from "react-bootstrap";

export default function PageHeader({text, subtext}){
    return (
      <>
        {/* <p>PageHeader</p> */}
        <Card className="bg-light">
          <Card.Body>
            {text}
          </Card.Body>
          
          <Card.Body>
           {subtext}
          </Card.Body>
        </Card>
        {/* <Card className="bg-light" style={{ width: "30rem" , textAlign: "center"}}>
          <Card.Body>
            <Card.Title>{text}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {subtext}
            </Card.Subtitle>
          </Card.Body>
        </Card> */}
        <br />
      </>
    );
}