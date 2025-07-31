import { Link } from "@tanstack/react-router";

export function Header() {
  return (
    <div className="flex gap-2 border-b border-gray-200">
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
