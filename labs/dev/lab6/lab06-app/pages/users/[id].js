import { useRouter } from "next/router";

export default function UserID() {

    const router = useRouter();
    const {id} = router.query;
    return(
        <>
            TODO: One User By there ID -  ID = {id}
        </>
    )
}