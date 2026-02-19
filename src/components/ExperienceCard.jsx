export default function ExperienceCard({ item }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl glass glass-hover p-5">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none bg-[radial-gradient(600px_circle_at_20%_0%,rgba(99,102,241,0.12),transparent_40%)]" />

      <div className="flex gap-4">
        <div className="h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-black/20 flex items-center justify-center">
          {/* Put image in public/images and use /images/... */}
          {item.logo ? (
            <img src={item.logo} alt="" className="h-10 w-10 object-contain" />
          ) : (
            <div className="h-10 w-10 rounded-lg bg-white/10" />
          )}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3 className="truncate text-base font-semibold text-zinc-100">{item.title}</h3>
              <p className="truncate text-sm text-zinc-400">
                {item.org}{item.location ? ` • ${item.location}` : ""}
              </p>
            </div>

            <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200">
              {item.dates}
            </span>
          </div>

          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-300 leading-relaxed">
            {item.bullets.map((b, idx) => (
              <li key={idx}>{b}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}