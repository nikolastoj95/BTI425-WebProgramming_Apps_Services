import {Card } from "react-bootstrap";

export default function PageHeader({text, subtext}){
    return (
      <>
         <Card style={{border: "none", textAlign: "center" }} className="bg-light">
          <Card.Body>
            {text}
            {subtext}
          </Card.Body>
          {/* <Card.Body>
           {subtext}
          </Card.Body> */}
        </Card>
        <br/>

      </>
    );
}