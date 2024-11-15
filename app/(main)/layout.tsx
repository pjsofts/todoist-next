import Link from "next/link";
import { ReactNode } from "react";

function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <header className="flex items-center px-4 gap-x-4 h-14 bg-blue-500 text-white border-b border-blue-900">
        <Link className="border border-white p-2 rounded" href="/about">
          About
        </Link>
        <Link className="border border-white p-2 rounded" href="/contact">
          Contact
        </Link>
        <Link className="border border-white p-2 rounded" href="/home">
          Home
        </Link>
      </header>
      {children}
      Salam
    </div>
  );
}

export default MainLayout;
