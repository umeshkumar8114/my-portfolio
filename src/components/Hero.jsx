export default function Hero() {
  return (
    <section id="top" className="pt-12 sm:pt-16">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10 backdrop-blur">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          {/* Left text */}
          <div>
            <p className="text-sm font-semibold text-zinc-200">
              Software Engineer
            </p>

            <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
              Umesh Kumar
            </h1>

            <p className="mt-4 max-w-2xl text-zinc-300 leading-relaxed text-[15px] sm:text-base">
              I take ideas, break them down, and turn them into software that solves real-world problems with clean and reliable code.
            </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-xl bg-white text-black px-6 py-2.5 text-sm font-semibold tracking-wide hover:opacity-90 transition shadow-[0_8px_30px_rgba(255,255,255,0.1)]"
            >
              Contact Me
            </a>
          </div>
          </div>

          {/* Right image */}

          <div className="relative flex justify-center lg:justify-end">
            {/* glow background */}
            <div className="absolute -inset-10 blur-3xl bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.35),transparent_70%)]" />

            <div className="relative rounded-3xl border border-white/10 bg-black/20 p-6 backdrop-blur">
              <img
                src="/images/hero.png"
                alt="Software engineer illustration"
                className="h-56 w-56 sm:h-64 sm:w-64 lg:h-72 lg:w-72 object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
              />
            </div>
          </div>    
        </div>
      </div>
    </section>
  );
}