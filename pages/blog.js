import posts from "../posts.json";

export default function Blog() {
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {Object.keys(posts).map((id, index) => {
          return <li key={index}>{posts[id].title}</li>;
        })}
      </ul>
    </div>
  );
}
