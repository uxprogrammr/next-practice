import Link from "next/link";
// import DogImage from "./dog";
import DogImage from "./dog-server";

export default function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <DogImage />
      <Link href="/blog">
        <a>Blog</a>
      </Link>
    </div>
  );
}
