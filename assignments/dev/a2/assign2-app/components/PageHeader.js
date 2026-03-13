import {Card } from "react-bootstrap";

export default function PageHeader({text, subtext}){
    return (
      <>
        {/* <p>PageHeader</p> */}
        {/* <div class="card border-light mb-3" style="max-width: 20rem;">
          <div class="card-header">Header</div>
          <div class="card-body">
            <h4 class="card-title">Light card title</h4>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div> */}
        <Card style={{border: "none", textAlign: "center"}} className="bg-light">
          <Card.Body>
            {text}<br/>{subtext}
          </Card.Body>
          {/* <Card.Body>
           {subtext}
          </Card.Body> */}
        </Card>


        <br />
        {/* <Card className="bg-light" style={{ width: "30rem" , textAlign: "center"}}>
          <Card.Body>
            <Card.Title>{text}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {subtext}
            </Card.Subtitle>
          </Card.Body>
        </Card> */}
      </>
    );
}