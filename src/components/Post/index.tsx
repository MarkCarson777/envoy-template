export function Post({ title, content }: { title: string; content: string }) {
  return (
    <>
      <span>{title}</span>
      <p>{content}</p>
    </>
  );
}
