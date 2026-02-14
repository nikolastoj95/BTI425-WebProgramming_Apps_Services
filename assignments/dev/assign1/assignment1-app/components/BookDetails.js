import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

export default function BookDetails({book}){
    const characters = book.subject_people;
    return (
      <>
        {/* <p>BookDetails</p> */}
        <Container>
          <Row>
            <Col lg={4}>
              <img
                onError={(event) => {
                  event.target.onerror = null; // Remove the event handler to prevent infinite loop
                  event.target.src =
                    "https://placehold.co/400x600?text=Cover+Not+Available";
                }}
                className="img-fluid w-100"
                src={`https://covers.openlibrary.org/b/id/${book?.covers?.[0]}-L.jpg`}
                alt="Cover Image"
              />
              <br />
              <br />
            </Col>
            {/*" image of book "*/}
            {/* left column */}
            <Col lg={8}>
              <h3><strong>{book?.title}</strong></h3>
              {book.description && (
                <p>{typeof book.description === "string" ? book.description : book.description.value}</p>
              )}
              {/* <p>{book?.description}</p> */}
              <br />
              <h5>Characters</h5>
               {book.subject_people?.join(", ") || "None"}
               {/* {book?.subject_people[0]} */}
                <br /><br />
                <h5>Settings</h5>
                 {book.subject_places?.join(", ") || "None"}
                <br /><br />
                <h5>More Infomation</h5>
                 {/* obtained by looping through the array stored in the <span><strong>links</strong></span> property */}
                 {book.links?.length && (
                   <span>
                        {book.links.map((link, i) =>(
                             
                                <a key={i} href={link.url} target="_blank" rel="noopener noreferrer"> {link.title}</a>
                             
                        ))}
                    </span>
                   
                 )}
                <span><a></a></span>
                


            </Col>
          </Row>
        </Container>
      </>
    );
}