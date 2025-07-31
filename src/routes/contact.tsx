import { createFileRoute } from "@tanstack/react-router";
import { PageContainer } from "../components/PageContainer";
import { PageTitle } from "../components/PageTitle";

export const Route = createFileRoute("/contact")({
  component: Contact,
});

function Contact() {
  return (
    <PageContainer>
      <PageTitle>Contact</PageTitle>
    </PageContainer>
  );
}
