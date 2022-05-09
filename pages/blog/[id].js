import { useRouter } from "next/router";

export default function BlogPost() {
  const router = useRouter();

  const post = posts[router.query.id];

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </>
  );
}
