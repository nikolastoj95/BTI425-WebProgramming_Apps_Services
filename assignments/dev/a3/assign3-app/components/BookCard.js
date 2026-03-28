import Error from "next/error";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button, Card } from "react-bootstrap";
import useSWR from "swr"

export default function BookCard({workId}){

    const router = useRouter();

    const {data, isLoading, error} = useSWR(`https://openlibrary.org/works/${workId}.json`);

    if (isLoading) {
      return <>Loading...</>;
    } else {
      if (error) {
        return <Error statusCode={404} />;
      } else {
        return (
          <>
            {/* <h1>BookCard - {workId}</h1> */}
            <Card style={{ width: "18rem" }} >
              <Card.Img variant="top" 
                        onError={(event) => {
                        event.target.onerror = null; // Remove the event handler to prevent infinite loop
                        event.target.src =
                            "https://placehold.co/400x600?text=Cover+Not+Available";
                        }} 
                        className="img-fluid w-100"
                        src={`https://covers.openlibrary.org/b/id/${data?.covers?.[0]}-M.jpg`}
                        alt="Cover Image"
                />
              <Card.Body>
                <Card.Title>{data?.title}</Card.Title>
                <Card.Text>
                  {data.first_publish_date ?  data.first_publish_date : "N/A" }
                </Card.Text>
                <Button variant="btn btn-outline-primary" as={Link} href={`/works/${workId}`}>View Book</Button>
              </Card.Body>
            </Card>
          </>
        );
      };
    };
}
