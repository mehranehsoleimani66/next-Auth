async function getPost() {
  const res = await fetch("http://localhost:8000/api/posts", {
    method: "GET",
    cache: "no-store",
    headers: { Accept: "application/json" },
  });
  if (res.ok) {
    const data = await res.json();
    return data.posts;
  } else {
    throw new Error(res.status);
  }
}

export default async function Posts() {
  const posts = await getPost();

  return (
    <>
      {posts?.map((post) => (
        <div key={post.id}>
          <h5>{post.title}</h5>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  );
}
