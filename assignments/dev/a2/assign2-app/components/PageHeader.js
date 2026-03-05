import {Card } from "react-bootstrap";

export default function PageHeader({text}){
    return (
      <>
        {/* <p>PageHeader</p> */}
        <Card className="bg-light">
          <Card.Body>
            {text}
          </Card.Body>
        </Card>
        <br />
      </>
    );
}