import { Link } from "@tanstack/react-router";

export function Header() {
  return (
    <div className="p-2 flex gap-2">
      <Link to="/home" className="[&.active]:font-bold">
        Home
      </Link>
      <Link to="/about" className="[&.active]:font-bold">
        About
      </Link>
      <Link to="/portfolio" className="[&.active]:font-bold">
        Portfolio
      </Link>
      <Link to="/contact" className="[&.active]:font-bold">
        Contact
      </Link>
    </div>
  );
}
