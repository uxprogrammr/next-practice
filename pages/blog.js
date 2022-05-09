import posts from "../posts.json";

export default function Blog() {
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {Object.keys(posts).map((id, index) => {
          return (
            <div>
              <li key={index}>
                <h3>{posts[id].title}</h3>
                <p>{posts[id].content}</p>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
