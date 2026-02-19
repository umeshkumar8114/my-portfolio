export default function ProjectCard({ item }) {
  return (
    <a
      href={item.projectLink}
      target="_blank"
      rel="noreferrer"
      className="group block overflow-hidden rounded-2xl glass glass-hover"
    >
      <div className="relative">
        {/* Tag */}
        <div className="absolute left-4 top-4 z-10">
          <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-zinc-100">
            {item.tag}
          </span>
        </div>

        {/* Image */}
        <div className="aspect-[16/10] w-full overflow-hidden bg-black/30">
          {item.image ? (
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
            />
          ) : (
            <div className="h-full w-full bg-white/5" />
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-base font-semibold text-zinc-100">
          {item.title}
        </h3>

        <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
          {item.description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm text-zinc-200 transition group-hover:text-white">
            View Project →
          </span>
        </div>
      </div>
    </a>
  );
}