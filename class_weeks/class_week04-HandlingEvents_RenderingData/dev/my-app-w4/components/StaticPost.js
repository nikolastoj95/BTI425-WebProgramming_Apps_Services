export default function StaticPost({post}){
    return (
        <>
            <strong>User ID:</strong>{post.userId}<br />
            <strong>Title:</strong>{post.title}<br />
            <p><strong>Body:</strong>{post.body}</p>
        </>
    );
}