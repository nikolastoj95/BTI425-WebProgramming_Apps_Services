/*********************************************************************************
* BTI425 – Assignment 1
*
* I declare that this assignment is my own work in accordance with Seneca's
* Academic Integrity Policy:
*
* https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html
*
* Name: Nikola Stojanovic Student ID: 027 369 127 Date: Thursday Feb 12, 2026
*
********************************************************************************/
import PageHeader from "@/components/PageHeader";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Pagination, Table } from "react-bootstrap";
import useSWR from "swr";


export default function Home() {

   const [page, setPage ] = useState(1);
   const [pageData, setPageData] = useState([]);

  // useEffect();
  const router = useRouter();

  const author = 'F. Scott Fitzgerald';

   const {data, error} = useSWR( `https://openlibrary.org/search.json?author=${encodeURIComponent(author)}&page=${page}&limit=10`);
    // `https://openlibrary.org/search.json?author=f.+scott+fitzgerald&page=1&limit=10`
    //`https://openlibrary.org/search.json?author=${encodeURIComponent(author)}&page=${page}&limit=10`

    useEffect(() => {
      if (data) {
        setPageData(data);
      }
    }, [data]);
    console.log(data)

    function previous () {
      if (page > 1) {
        setPage(prev => prev -1);
      };
    };

    function next () {
      setPage(prev => prev +1);
    };
   
  return (
    <>
     
      {/* <p>Books</p> */}
      <PageHeader text={<strong>Novels by {author} </strong>} />
      <p>{/*some thing here a p tag*/}</p>
      <p>{/*some thing here a p tag*/}</p>
      {/* <Pagination></Pagination> */}
      <Table striped className="table-hover">
      
        <thead>
          <tr>
            <th>Title</th>
            <th>Published</th>
          </tr>
        </thead>
        <tbody>
          {pageData?.docs?.map(book => (
            <tr key={book.key}  onClick={event => router.push(`${book.key}`)} >
                <td>{book.title}</td>
                <td>{book.first_publish_year || "N/A" }</td>

            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination>
        <Pagination.Prev onClick={previous} />
        <Pagination.Item>{page}</Pagination.Item>
        <Pagination.Next onClick={next} />    
    </Pagination>


    </>
  );
}
