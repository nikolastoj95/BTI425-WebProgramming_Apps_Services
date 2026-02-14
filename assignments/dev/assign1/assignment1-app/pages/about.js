import BookDetails from "@/components/BookDetails";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import { Card } from "react-bootstrap";

// This function gets called at build time
export function getStaticProps() {
  // Call an external API endpoint to get posts
  return new Promise((resolve, reject) => {
    fetch("https://openlibrary.org/works/OL468431W.json")
      .then((res) => res.json())
      .then((data) => {
        resolve({ props: { book: data } });
        
      });
      
     
  });
  
}

export default function About({book}){
    console.log("here")
    

    return (
      <>
        <p>About</p>
        <PageHeader text=<strong>About the Developer: Nikola</strong> />
        {/* <Link></Link> */}
        {/* <Card></Card> */}
        <p>
          If the data that is coming back from the API is not likely to change,
          we may wish to include it in the pre-rendered HTML to speed up load
          times and provide greater SEO. Next.js provides this functionality via
          a mechanism called getStaticProps. This is essentially a function that
          Next.js runs on the server when the app is built in order to obtain
          data required to pre-render your pages. From our point of view, it is
          a function that we can export from any "page" component to provide
          data to any components on that page via "props".
        </p>
        <BookDetails book={book} />
      </>
    );
}