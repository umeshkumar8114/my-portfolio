import { useState } from "react";
import { Menu, X, FileText } from "lucide-react";

const links = [
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070A12]/70 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#top" className="font-semibold tracking-tight" onClick={close}>
          <span className="text-zinc-100">Umesh Kumar</span>

        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          {/* Resume */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-100 hover:bg-white/10 transition"
          >
            <FileText className="h-4 w-4" />
            Resume
          </a>

          {/* Mobile menu button */}
          <button
            className="inline-flex md:hidden items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-zinc-100 hover:bg-white/10 transition"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {open ? (
        <div className="md:hidden border-t border-white/10 bg-[#070A12]/80 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
            <div className="flex flex-col gap-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={close}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-100 hover:bg-white/10 transition"
                >
                  {l.label}
                </a>
              ))}

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                onClick={close}
                className="mt-1 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black hover:opacity-90 transition"
              >
                <FileText className="h-4 w-4" />
                Resume
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}