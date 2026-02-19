export default function SkillsCard({ groups }) {
  return (
    <div className="rounded-2xl glass glass-hover p-6">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((g) => (
          <div
            key={g.title}
            className="rounded-2xl border border-white/10 bg-black/25 p-5"
          >
            <h3 className="text-sm font-semibold text-zinc-100">{g.title}</h3>

            <div className="mt-4 flex flex-wrap gap-3">
              {g.items.map((it) => {
                const item = typeof it === "string" ? { name: it } : it;

                return (
                  <span
                    key={item.name}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-zinc-100"
                  >
                    {item.icon ? (
                      <i className={`${item.icon} colored text-xl`} />
                    ) : null}
                    {item.name}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}