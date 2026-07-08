import Link from "next/link";

const links = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function MainNav() {
  return (
    <header className="fixed z-50 top-0 w-full border-b border-white/20 bg-black/30 backdrop-blur shadow-[0_0_15px_rgba(44,205,166,0.3)]">
      <div className="max-w-7xl px-4 md:px-16 mx-auto min-h-20 flex justify-between items-center">
        <Link
          href="/"
          className="font-atomicage tracking-tighter text-teal-300 hover:text-cyan-400 transition-colors duration-300 text-3xl font-bold flex gap-2 items-center"
        >
          <span className="material-symbols material-symbols-filled text-4xl -mt-1">
            rocket
          </span>
          P.E.A
        </Link>
        <nav className="flex gap-8 text-cyan-400 font-bold font-outfit">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-teal-300 transition-colors duration-300 p-3"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
