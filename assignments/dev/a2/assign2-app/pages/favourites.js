import BookCard from "@/components/BookCard";
import PageHeader from "@/components/PageHeader";
import { favouritesAtom } from "@/store";
import { useAtom } from "jotai"
import { Col, Container, Row } from "react-bootstrap";


export default function Favourites(){
    const [favouritesList, setFavouritesList] = useAtom(favouritesAtom);
    console.log(favouritesList)
    // storing workIds

    return (
        <>
            
            {favouritesList.length > 0 ?(<PageHeader text={<h1>Favourites</h1>}  subtext={<p>All Your favourite books, in one place</p>}/> 
            ):(
            <PageHeader text={<h1>Nothing Here</h1>} subtext={<p>Try adding a book to the list</p>}/>)}

            {favouritesList.length >0 && (
                <Row className="gy-4">
                    {favouritesList.map((workId)=> (
                        <Col  lg={3} md={6} key={workId} className="m-3">
                            <p>{workId}</p> 
                            <BookCard workId={workId}/><br/>
                        </Col>

                    ))}
                    
                </Row>

            )}


            

        </>
    )
}