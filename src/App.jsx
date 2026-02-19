import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SectionHeader from "./components/SectionHeader";
import ExperienceCard from "./components/ExperienceCard";
import EducationCard from "./components/EducationCard";
import ProjectCard from "./components/ProjectCard";
import ContactLinks from "./components/ContactLinks";
import SkillsCard from "./components/SkillsCard";
import { skills } from "./data/skills";
import { experiences } from "./data/experience";
import { education } from "./data/education";
import { projects } from "./data/projects";
import Reveal from "./components/Reveal";

export default function App() {
  return (
    <div className="min-h-screen text-zinc-100">
      {/* Background */}
      <div className="fixed inset-0 -z-10 bg-[#070A12]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.18),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(16,185,129,0.12),transparent_55%)]" />
        <div className="absolute inset-0 opacity-40 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <Navbar />

      <main className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <Hero />

        <section id="skills" className="scroll-mt-24 py-12">
          <Reveal>
            <SectionHeader
              title="Skills"
              subtitle="Tools I use to build and analyze software."
            />
            <SkillsCard groups={skills} />
          </Reveal>
        </section>

        <section id="experience" className="scroll-mt-24 py-12">
          <Reveal>
            <SectionHeader
              title="Experience"
              subtitle="Roles that shaped my technical skills and collaboration."
            />
            <div className="space-y-4">
              {experiences.map((exp) => (
                <ExperienceCard key={exp.title} item={exp} />
              ))}
            </div>
          </Reveal>
        </section>

        <section id="education" className="scroll-mt-24 py-12">
          <Reveal>
            <SectionHeader title="Education" />
            <EducationCard item={education} />
          </Reveal>
        </section>

        <section id="projects" className="scroll-mt-24 py-12">
          <Reveal>
            <SectionHeader title="Projects" subtitle="A few things I’ve built." />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((p) => (
                <ProjectCard key={p.title} item={p} />
              ))}
            </div>
          </Reveal>
        </section>

        <section id="contact" className="scroll-mt-24 py-12 pb-24">
          <Reveal>
            <SectionHeader
              title="Contact"
              subtitle="Reach out to me via LinkedIn, GitHub, or email."
            />
            <ContactLinks />
          </Reveal>
        </section>
      </main>
    </div>
  );
}