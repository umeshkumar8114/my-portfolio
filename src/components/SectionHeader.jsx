export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="mb-5">
      <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">{title}</h2>
      {subtitle ? <p className="mt-1 text-zinc-400">{subtitle}</p> : null}
    </div>
  );
}