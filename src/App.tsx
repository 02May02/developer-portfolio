import { profile } from "./data/profile"
import { Routes, Route, Link } from "react-router-dom"
import { projectsEn, projectsPt } from "./data/projects"
import { useLanguage, LanguageSwitch } from "./i18n/LanguageContext"
import ProjectDetails from "./pages/ProjectDetails"

function Home() {
  const { language } = useLanguage()
  const pt = language === "pt"
  const projects = pt ? projectsPt : projectsEn
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[550px] bg-[radial-gradient(ellipse_at_50%_0%,rgba(8,145,178,0.12),transparent_65%)]" />
      <nav className="relative mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-6 sm:px-8 lg:px-10">
        <Link to="/" className="text-xl font-bold tracking-tight">Portfolio<span className="text-cyan-400">.</span></Link>
        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300 sm:gap-6">
          <a href="#projects" className="hover:text-cyan-400">{pt ? 'Projetos' : 'Projects'}</a>
          <a href="#about" className="hover:text-cyan-400">{pt ? 'Sobre' : 'About'}</a>
          <a href="#services" className="hover:text-cyan-400">{pt ? 'Serviços' : 'Services'}</a>
          <a href="#contact" className="hover:text-cyan-400">{pt ? 'Contacto' : 'Contact'}</a>
          <LanguageSwitch />
        </div>
      </nav>

      <main className="relative">
        <header className="mx-auto w-full max-w-7xl px-5 pb-20 pt-20 sm:px-8 md:pt-28 lg:px-10">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-400">{pt ? 'Programador · Estudante na FEUP' : 'Software Developer · FEUP Student'}</p>
            <h1 className="max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">{pt ? 'A desenvolver ' : 'Building practical '}<span className="text-cyan-400">{pt ? 'soluções de software úteis.' : 'software solutions.'}</span></h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">{pt ? 'Desenvolvo websites, aplicações e ferramentas digitais, transformando ideias em soluções funcionais.' : 'I develop websites, applications, and useful digital tools, helping turn ideas into working software.'}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#projects" className="rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300">{pt ? 'Explorar projetos →' : 'Explore my work →'}</a>
              <a href="#contact" className="rounded-lg border border-slate-700 px-6 py-3 font-semibold text-slate-100 transition hover:border-cyan-400">{pt ? 'Entrar em contacto' : 'Get in touch'}</a>
            </div>
          </div>
        </header>

        <section id="projects" className="mx-auto w-full max-w-7xl scroll-mt-16 px-5 py-14 sm:px-8 lg:px-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-cyan-400">{pt ? 'Projetos selecionados' : 'Selected work'}</p>
          <h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">{pt ? 'Projetos em destaque' : 'Featured Projects'}</h2>
          <p className="mb-9 max-w-2xl text-slate-400">{pt ? 'Alguns exemplos de software em que colaborei, desde plataformas web a aplicações móveis e jogos.' : "A few examples of the software I've helped build, from web platforms to mobile apps and games."}</p>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <Link to={`/projects/${project.slug}`} key={project.slug} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 transition duration-300 hover:-translate-y-1 hover:border-cyan-500/60 hover:shadow-xl hover:shadow-cyan-950/20">
                <div className="flex h-56 items-center justify-center overflow-hidden bg-slate-800/70 p-4 sm:h-64">
                  <img src={project.images[0]} alt={`Preview of ${project.title}`} className="h-full w-full object-contain transition duration-300 group-hover:scale-[1.03]" loading="lazy" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-cyan-400">{project.category}</p>
                  <h3 className="mt-2 text-2xl font-bold">{project.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">{project.technologies.slice(0, 3).map((tech) => <span key={tech} className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">{tech}</span>)}</div>
                  <p className="mt-6 font-semibold text-cyan-400 group-hover:text-cyan-300">{pt ? 'Ver projeto →' : 'Explore project →'}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section id="about" className="mx-auto w-full max-w-7xl scroll-mt-16 px-5 py-16 sm:px-8 lg:px-10">
          <div className="grid gap-8 rounded-2xl border border-slate-800 bg-slate-900/60 p-7 md:grid-cols-[1fr_1.5fr] md:p-10">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-cyan-400">{pt ? 'Sobre mim' : 'About me'}</p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{pt ? 'Programador focado em soluções práticas.' : 'Developer with a practical mindset.'}</h2>
            </div>
            <div>
              <p className="leading-8 text-slate-300">{pt ? 'Sou estudante de Engenharia Informática e Computação na FEUP, com experiência prática no desenvolvimento de aplicações web, aplicações móveis e projetos de software. Gosto de transformar ideias em interfaces funcionais e resolver problemas em várias áreas do desenvolvimento.' : "I'm a Computer Engineering student at FEUP with hands-on experience building web applications, mobile apps, and software projects. I enjoy turning ideas into functional interfaces and solving problems across the stack."}</p>
              <p className="mt-4 leading-8 text-slate-400">{pt ? 'Tenho interesse em pequenos projetos freelance, como websites para empresas, novas funcionalidades e correções de software existente.' : "I'm interested in small freelance projects such as business websites, application features, and fixing existing software."}</p>
              {(profile.github || profile.linkedin) && (
                <div className="mt-6 flex flex-wrap gap-3">
                  {profile.github && <a href={profile.github} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-slate-700 px-4 py-2 font-medium text-cyan-300 hover:border-cyan-400">GitHub ↗</a>}
                  {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-slate-700 px-4 py-2 font-medium text-cyan-300 hover:border-cyan-400">LinkedIn ↗</a>}
                </div>
              )}
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto w-full max-w-7xl scroll-mt-16 px-5 py-20 sm:px-8 lg:px-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-cyan-400">{pt ? 'Como posso ajudar' : 'How I can help'}</p>
          <h2 className="text-3xl font-bold sm:text-4xl">{pt ? 'O que posso fazer' : 'What I Can Do'}</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {(pt ? [
              { title: "Desenvolvimento de Websites", body: "Websites responsivos e fáceis de usar para particulares e pequenas empresas." },
              { title: "Desenvolvimento de Aplicações Web", body: "Ferramentas interativas, painéis de gestão e funcionalidades para aplicações." },
              { title: "Correções e Melhorias", body: "Correção de erros, otimização de desempenho e atualizações de projetos existentes." },
            ] : [
              { title: "Website Development", body: "Responsive, easy-to-use websites for individuals and small businesses." },
              { title: "Web Application Development", body: "Interactive tools, dashboards, and application features." },
              { title: "Bug Fixes & Improvements", body: "Debugging, performance improvements, and updates to existing projects." },
            ]).map((service) => <div key={service.title} className="rounded-xl border border-slate-800 bg-slate-900/60 p-6"><h3 className="text-lg font-semibold">{service.title}</h3><p className="mt-3 text-sm leading-7 text-slate-400">{service.body}</p></div>)}
          </div>
        </section>

        <section id="contact" className="mx-auto w-full max-w-7xl scroll-mt-16 px-5 pb-28 pt-12 sm:px-8 lg:px-10">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 px-6 py-14 text-center sm:px-12">
            <h2 className="text-3xl font-bold sm:text-4xl">{pt ? 'Vamos trabalhar juntos' : "Let's Work Together"}</h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-400">{pt ? 'Tem um projeto em mente ou precisa de ajuda com uma aplicação existente? Entre em contacto.' : 'Have a project in mind or need help with an existing one? Get in touch.'}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href={`mailto:${profile.email}`} className="inline-block rounded-lg bg-cyan-400 px-8 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300">{pt ? 'Enviar email →' : 'Email Me →'}</a>
              {profile.github && <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-block rounded-lg border border-slate-600 px-6 py-3 font-semibold text-white hover:border-cyan-400">GitHub ↗</a>}
              {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-block rounded-lg border border-slate-600 px-6 py-3 font-semibold text-white hover:border-cyan-400">LinkedIn ↗</a>}
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-slate-800 py-7 text-center text-sm text-slate-500">© {new Date().getFullYear()} · {pt ? "Portefólio de desenvolvimento de software" : "Software Developer Portfolio"}</footer>
    </div>
  )
}

function App() {
  return <Routes><Route path="/" element={<Home />} /><Route path="/projects/:slug" element={<ProjectDetails />} /></Routes>
}

export default App
