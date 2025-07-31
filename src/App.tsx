import { Post } from "./components/Post";

const posts = [{ title: "Post 1" }, { title: "Post 2" }, { title: "Post 3" }];

export function App() {
  return (
    <>
      <h1>Landing page</h1>
      <div>
        {posts.map((post, index) => (
          <div key={index}>
            <Post title={post.title} />
          </div>
        ))}
      </div>
    </>
  );
}
