import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/portfolio")({
  component: Portfolio,
});

function Portfolio() {
  return (
    <div className="p-2">
      <h3>Portfolio</h3>
    </div>
  );
}
