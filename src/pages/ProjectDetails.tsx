import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { projects } from "../data/projects"

const captions: Record<string, string[]> = {
  fithub: ["Homepage", "Membership plans", "Class schedule", "Admin dashboard"],
  educycle: ["Marketplace", "Product details", "Messages", "Create a listing"],
  "feup-hero": ["Main menu", "Gameplay"],
}

export default function ProjectDetails() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)
  const [activeImage, setActiveImage] = useState<number | null>(null)
  const count = project?.images.length ?? 0

  useEffect(() => {
    if (activeImage === null || !count) return

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActiveImage(null)
      if (event.key === "ArrowRight") setActiveImage((i) => i === null ? null : (i + 1) % count)
      if (event.key === "ArrowLeft") setActiveImage((i) => i === null ? null : (i - 1 + count) % count)
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [activeImage, count])

  if (!project) {
    return (
      <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-3xl font-bold">Project not found</h1>
          <Link to="/" className="mt-6 inline-block text-cyan-400">← Back to portfolio</Link>
        </div>
      </main>
    )
  }

  const labels = captions[project.slug] ?? []
  const isMobile = project.slug === "educycle"
  const activeLabel = activeImage !== null ? (labels[activeImage] ?? `Screenshot ${activeImage + 1}`) : ""

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-6 sm:py-14">
        <Link to="/#projects" className="inline-flex items-center text-sm font-medium text-cyan-400 transition hover:text-cyan-300">
          ← Back to projects
        </Link>

        <header className="mt-12 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-400">{project.category}</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">{project.title}</h1>
          <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">{project.description}</p>
          <div className="mt-7 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1.5 text-sm text-cyan-200">{tech}</span>
            ))}
          </div>
        </header>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
            <h2 className="text-2xl font-bold">Key Features</h2>
            <ul className="mt-6 space-y-3 text-slate-300">
              {project.features.map((feature) => <li key={feature} className="flex gap-3"><span className="text-cyan-400">✓</span><span>{feature}</span></li>)}
            </ul>
          </section>
          <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
            <h2 className="text-2xl font-bold">My Contributions</h2>
            <p className="mt-6 leading-8 text-slate-300">{project.contribution}</p>
          </section>
        </div>

        <section className="mt-20" aria-labelledby="gallery-heading">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-400">Behind the build</p>
              <h2 id="gallery-heading" className="mt-2 text-3xl font-bold">Project Gallery</h2>
              <p className="mt-3 text-slate-400">Select any screenshot for a closer look.</p>
            </div>
            <p className="text-sm text-slate-500">{project.images.length} screenshots</p>
          </div>

          <div className={`mt-8 grid gap-5 ${isMobile ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" : "grid-cols-1 md:grid-cols-2"}`}>
            {project.images.map((image, index) => (
              <button
                type="button"
                key={image}
                onClick={() => setActiveImage(index)}
                aria-label={`Open ${labels[index] ?? `screenshot ${index + 1}`} image`}
                className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 text-left transition hover:-translate-y-1 hover:border-cyan-500/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
              >
                <div className={`flex items-center justify-center overflow-hidden bg-slate-800/70 ${isMobile ? "aspect-[3/5] p-3 sm:p-4" : "aspect-video p-3"}`}>
                  <img
                    src={image}
                    alt={`${project.title}: ${labels[index] ?? `Screenshot ${index + 1}`}`}
                    loading="lazy"
                    className={`h-full w-full object-contain transition duration-300 group-hover:scale-[1.03] ${isMobile ? "rounded-[1rem] shadow-lg" : "rounded-md"}`}
                  />
                </div>
                <div className="flex items-center justify-between gap-2 px-4 py-4 sm:px-5">
                  <span className="text-sm font-semibold text-slate-100">{labels[index] ?? `Screenshot ${index + 1}`}</span>
                  <span className="text-cyan-400" aria-hidden="true">↗</span>
                </div>
              </button>
            ))}
          </div>
        </section>

        {(project.github || project.demo) && (
          <div className="mt-14 flex flex-wrap gap-4">
            {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-slate-600 px-6 py-3 font-semibold hover:border-cyan-400">Source Code ↗</a>}
            {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300">Live Demo ↗</a>}
          </div>
        )}
        <footer className="mt-20 border-t border-slate-800 pt-8 text-sm text-slate-500">University project showcase · {project.title}</footer>
      </div>

      {activeImage !== null && (
        <div role="dialog" aria-modal="true" aria-label={`${project.title} image viewer`} className="fixed inset-0 z-50 flex flex-col bg-slate-950/95 p-4 backdrop-blur-md sm:p-6">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 pb-4">
            <div>
              <p className="font-semibold">{activeLabel}</p>
              <p className="text-xs text-slate-400">{activeImage + 1} of {count} · Arrow keys to navigate · Esc to close</p>
            </div>
            <button type="button" onClick={() => setActiveImage(null)} autoFocus className="rounded-lg border border-slate-600 px-4 py-2 text-sm font-medium hover:bg-slate-800" aria-label="Close image viewer">Close ✕</button>
          </div>
          <div className="mx-auto flex min-h-0 w-full max-w-6xl flex-1 items-center justify-center gap-2 sm:gap-5">
            <button type="button" onClick={() => setActiveImage((activeImage - 1 + count) % count)} className="shrink-0 rounded-full border border-slate-700 bg-slate-900 px-3 py-2 text-xl hover:bg-slate-800" aria-label="Previous screenshot">‹</button>
            <img src={project.images[activeImage]} alt={`${project.title}: ${activeLabel}`} className="min-h-0 min-w-0 max-h-full max-w-full flex-1 object-contain" />
            <button type="button" onClick={() => setActiveImage((activeImage + 1) % count)} className="shrink-0 rounded-full border border-slate-700 bg-slate-900 px-3 py-2 text-xl hover:bg-slate-800" aria-label="Next screenshot">›</button>
          </div>
        </div>
      )}
    </main>
  )
}
