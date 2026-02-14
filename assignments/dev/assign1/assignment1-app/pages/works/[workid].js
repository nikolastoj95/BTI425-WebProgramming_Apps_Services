import BookDetails from "@/components/BookDetails";
import PageHeader from "@/components/PageHeader";
import Error from "next/error";
import { useRouter } from "next/router";
import useSWR from "swr";


export default function WorkId() {
    const router = useRouter();
    const {workid} = router.query;

    console.log(workid)

    const {data, error, isLoading } = useSWR(`https://openlibrary.org/works/${workid}.json`);

    if (isLoading) {
        return <> Loading... </>;
    } else {
        if (error) {
            return <Error statusCode={404} />
        } else {
            return (
                <>
                    <PageHeader text=<strong>{data.title}</strong> />
                    <BookDetails book={data} />
                </>
            )
        }
    } 

    // <Error
    return (
        <>
            
            {/* <BookDetails  /> */}
           <p>Work (Book) by WorkId  {workid}</p> 
           
        </>
    )
}