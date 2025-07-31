import { createFileRoute } from "@tanstack/react-router";
import { PageContainer } from "../components/PageContainer";
import { PageTitle } from "../components/PageTitle";

export const Route = createFileRoute("/portfolio")({
  component: Portfolio,
});

function Portfolio() {
  return (
    <PageContainer>
      <PageTitle>Portfolio</PageTitle>
    </PageContainer>
  );
}
