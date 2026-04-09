import ClickCounter from "@/components/ClickCounter";
import Post from "@/components/Post";
import RenderPratice from "@/components/RenderPractice";
import StaticPost from "@/components/StaticPost";

export async function getStaticProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/20");
    const data = await (res.json());
    return {props: {staticPost: data}} 
}

export default function Home({staticPost}) {
  return (
    <>
    <RenderPratice /> <br />
    <hr />
    {/*{staticPost.title}<br />*/}
    <StaticPost post={staticPost}/>

    <Post /><br />
    <ClickCounter />
      
    </>
  );
}
