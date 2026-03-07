/* eslint-disable @next/next/no-img-element */
import { favouritesAtom } from "@/store";
import { useAtom } from "jotai";
import Image from "next/image";
import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

export default function BookDetails({book, workId, showFavouriteBtn = true}){
  const  [favouritesList, setFavouritesList] = useAtom(favouritesAtom);

  
  const [showAdded, setShowAdded] = useState(
    favouritesList.includes(workId)
  );

  function favouritesClicked () {
    console.log('favourites clicked, adding...')
    if (showAdded) {
      setFavouritesList(current => current.filter(fav => fav != workId))
      setShowAdded(false)
      console.log("removing")
    } else {
      setFavouritesList(current =>[...current, workId])
      setShowAdded(true)
      console.log("adding")
    }
  }

    return (
      <>
        <Container>
          <Row>
            <Col lg={4}>
            {/*" image of book "*/} {/* left column */}
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
            <Col lg={8}>
            {/*" Details of book "*/} {/* right column */}
              <h3><strong>{book?.title}</strong></h3>
              {book.description && (
                <p>{typeof book.description === "string" ? book.description : book.description.value}</p>
              )}
              <br />
              <h5>Characters</h5>
               {book.subject_people?.join(", ") || "None"}
               {/* {book?.subject_people[0]} */}
                <br /><br />
                <h5>Settings</h5>
                 {book.subject_places?.join(", ") || "None"}
                <br /><br />
                <h5>More Infomation</h5>
                 {book.links?.length && (
                   <ul>
                        {book.links.map((link, i) =>(
                             <li key={i}>
                                <a  href={link.url} target="_blank" rel="noopener noreferrer"> {link.title}</a>
                             </li>
                        ))}
                    </ul>
                   
                 )}
                 {showFavouriteBtn && (
                    <Button variant={showAdded ? 'primary' : 'outline-primary'} 
                        onClick={favouritesClicked}>{showAdded ? "+ Favourite (added)" :  "+ Favourite"}   
                    </Button>
                 )}
                 
            </Col>
          </Row>
        </Container>
      </>
    );
}