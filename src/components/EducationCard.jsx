export default function EducationCard({ item }) {
  return (
    <div className="rounded-2xl glass glass-hover p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex gap-4">
          <div className="h-12 w-12 overflow-hidden rounded-xl border border-white/10 bg-black/20 flex items-center justify-center">
            {item.logo ? (
              <img src={item.logo} alt="" className="h-10 w-10 object-contain" />
            ) : (
              <div className="h-10 w-10 rounded-lg bg-white/10" />
            )}
          </div>

          <div>
            <h3 className="text-base font-semibold">{item.degree}</h3>
            <p className="text-sm text-zinc-400">{item.school}</p>
            {item.dates ? (
              <p className="mt-1 text-xs text-zinc-400">{item.dates}</p>
            ) : null}
          </div>
        </div>

        {item.coursework?.length ? (
          <div className="sm:max-w-xl">
            <p className="text-sm font-medium text-zinc-200">Relevant Coursework</p>
            <p className="mt-1 text-sm text-zinc-300">
              {item.coursework.join(" • ")}
            </p>

            {item.certifications?.length ? (
              <>
                <p className="mt-4 text-sm font-medium text-zinc-200">Certifications</p>
                <ul className="mt-1 space-y-1 text-sm text-zinc-300">
                  {item.certifications.map((c, idx) => (
                    <li key={idx}>
                      <span className="text-zinc-100">{c.name}</span>{" "}
                      <span className="text-zinc-400">— {c.status}</span>
                      {c.link ? (
                        <>
                          {" "}
                          <a
                            href={c.link}
                            target="_blank"
                            rel="noreferrer"
                            className="text-zinc-200 underline underline-offset-4 hover:text-white"
                          >
                            Certificate
                          </a>
                        </>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
}