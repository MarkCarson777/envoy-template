import { createFileRoute } from "@tanstack/react-router";
import { Post } from "../components/Post";

export const Route = createFileRoute("/home")({
  component: Home,
});

const posts = [
  {
    id: "1",
    title: "First Post",
    content: "This is the content of the first post.",
  },
  {
    id: "2",
    title: "Second Post",
    content: "This is the content of the second post.",
  },
  {
    id: "3",
    title: "Third Post",
    content: "This is the content of the third post.",
  },
];

function Home() {
  return (
    <>
      <h3>Home</h3>
      <div className="flex flex-col gap-2">
        {posts.map((post) => (
          <Post key={post.id} title={post.title} content={post.content} />
        ))}
      </div>
    </>
  );
}
