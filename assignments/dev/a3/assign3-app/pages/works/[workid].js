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
                    {/* Returns the clicked book and shows the details and title of it  */}
                    <PageHeader text={ <h1 className="display-3">{data.title}</h1> }/>
                    <BookDetails book={data} workId={workid} />
                </>
            )
        }
    } 
}