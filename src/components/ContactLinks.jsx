import { Github, Linkedin, Mail } from "lucide-react";

const iconClass =
  "h-5 w-5 text-zinc-200 group-hover:text-white transition";

const cardClass =
  "group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur hover:bg-white/[0.07] transition";

export default function ContactLinks() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <a
        className={cardClass}
        href="https://www.linkedin.com/in/umesh-kumar-1831b1216/"
        target="_blank"
        rel="noreferrer"
      >
        <Linkedin className={iconClass} />
        <span className="text-sm text-zinc-200">LinkedIn</span>
      </a>

      <a
        className={cardClass}
        href="https://github.com/umeshkumar8114"
        target="_blank"
        rel="noreferrer"
      >
        <Github className={iconClass} />
        <span className="text-sm text-zinc-200">GitHub</span>
      </a>

      <a className={cardClass} href="mailto:umeshkumar8114@gmail.com">
        <Mail className={iconClass} />
        <span className="text-sm text-zinc-200">Email</span>
      </a>
    </div>
  );
}