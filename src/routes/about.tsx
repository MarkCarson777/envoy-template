import { createFileRoute } from "@tanstack/react-router";
import { PageContainer } from "../components/PageContainer";
import { PageTitle } from "../components/PageTitle";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <PageContainer>
      <PageTitle>About</PageTitle>
    </PageContainer>
  );
}
