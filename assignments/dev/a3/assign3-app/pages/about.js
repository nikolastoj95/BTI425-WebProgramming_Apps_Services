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
    
    return (
      <>
        <PageHeader text={<h1 className="display-3">About the Developer</h1>}  subtext= {<p className="lead">Nikola Stojanovic</p>}/>
        <p>
          Hello there, welcome to my website. My name is Nikola, and I am a student in a computer programming
          program with a strong interest in developing websites and building
          creative digital projects. I enjoy solving problems through code and
          continuously improving my technical skills. In my free time, I like
          swimming, which helps me stay active and relaxed. For my reading
          selection, I chose The Great Gatsby, a well-known and engaging novel
          that many readers enjoy. I have also watched the movie adaptation,
          which made the story more interesting and helped me better understand
          its characters and themes.
        </p>
        <BookDetails book={book} workId={'OL468431W'} showFavouriteBtn={false} />
      </>
    );
}