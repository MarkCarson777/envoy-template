import { createFileRoute } from "@tanstack/react-router";
import { Post } from "../components/Post";
import { PageContainer } from "../components/PageContainer";
import posts from "../assets/posts.json";
import { PageTitle } from "../components/PageTitle";

export const Route = createFileRoute("/home")({
  component: Home,
});

function Home() {
  return (
    <PageContainer>
      <PageTitle>Home</PageTitle>
      <div className="flex flex-col gap-2">
        {posts.map((post, index) => (
          <Post key={index} title={post.title} content={post.content} />
        ))}
      </div>
    </PageContainer>
  );
}
