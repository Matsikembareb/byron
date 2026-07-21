import { ArrowRight, ExternalLink, ArrowLeft, Rocket, TrendingUp, Server, Smartphone, Database, Code2, Layers } from 'lucide-react';
import { PROJECTS } from '../data';
import type { Page } from '../data';
import { PageHeader } from '../components/PageHeader';

export function ProjectsPage({ onNavigate }: { onNavigate: (p: Page, slug?: string) => void }) {
  const live = PROJECTS.filter(p => p.live);
  const other = PROJECTS.filter(p => !p.live);

  return (
    <div>
      <PageHeader
        eyebrow="What I've Built"
        title="Projects"
        subtitle="From live production systems to collaborative builds — each project has a story. Click any project to read a detailed article about the challenge, approach, and outcome."
      />

      {/* ─── Stats row ─── */}
      <section className="max-w-5xl mx-auto px-6 pb-12">
        <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard icon={<Rocket size={18} />} value="3" label="Live Systems" color="#00d9b2" />
          <StatCard icon={<Code2 size={18} />} value="5" label="Projects Built" color="#38bdf8" />
          <StatCard icon={<Server size={18} />} value="2" label="Real-time Platforms" color="#fb923c" />
          <StatCard icon={<Database size={18} />} value="3" label="Flask Deployments" color="#8338ec" />
        </div>
      </section>

      {/* ─── How I build ─── */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="reveal text-center mb-10">
          <span className="text-[#00d9b2] text-xs font-semibold uppercase tracking-[0.25em]">Philosophy</span>
          <h2 className="text-2xl font-bold text-white mt-3">How I approach every build</h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-5">
          {[
            { icon: <Smartphone size={20} />, title: 'Mobile-first, always', body: 'Most users here are on phones with limited data. I design for that reality from the first line of code, not as an afterthought.' },
            { icon: <Layers size={20} />, title: 'Lean architecture', body: 'Server-rendered where it fits, client-side where it earns its weight. I pick the simplest stack that ships the job well.' },
            { icon: <TrendingUp size={20} />, title: 'Built to iterate', body: 'Real systems evolve. I structure code so feedback becomes the next release — not a rewrite.' },
          ].map((item, i) => (
            <div key={item.title} className="reveal glass glass-hover rounded-2xl p-6" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="w-12 h-12 rounded-xl bg-[#00d9b2]/10 border border-[#00d9b2]/20 flex items-center justify-center text-[#00d9b2] mb-4">
                {item.icon}
              </div>
              <h3 className="text-white font-bold mb-2">{item.title}</h3>
              <p className="text-[#8896a8] text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Live systems ─── */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="reveal flex items-center gap-2 mb-8">
          <div className="w-2 h-2 rounded-full bg-[#00d9b2] animate-pulse" />
          <span className="text-[#00d9b2] text-sm font-semibold">Live Systems I Helped Build</span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {live.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} onNavigate={onNavigate} />
          ))}
        </div>
      </section>

      {/* ─── Other projects ─── */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="reveal flex items-center gap-2 mb-8">
          <div className="w-2 h-2 rounded-full bg-[#fb923c]" />
          <span className="text-[#fb923c] text-sm font-semibold">Other Projects</span>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {other.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} onNavigate={onNavigate} />
          ))}
        </div>
      </section>
    </div>
  );
}

function StatCard({ icon, value, label, color }: { icon: React.ReactNode; value: string; label: string; color: string }) {
  return (
    <div className="reveal glass glass-hover rounded-2xl p-5 flex items-center gap-4">
      <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${color}15`, border: `1px solid ${color}30`, color }}>
        {icon}
      </div>
      <div>
        <div className="text-2xl font-bold text-white leading-none">{value}</div>
        <div className="text-[#8896a8] text-xs mt-1">{label}</div>
      </div>
    </div>
  );
}

function ProjectCard({ project, index, onNavigate }: { project: typeof PROJECTS[0]; index: number; onNavigate: (p: Page, slug?: string) => void }) {
  return (
    <button
      onClick={() => onNavigate('project-detail', project.slug)}
      className="reveal group text-left rounded-2xl overflow-hidden glass glass-hover"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="relative h-56 overflow-hidden">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-[#0b1120]/40 to-transparent" />
        {project.live && (
          <div className="absolute top-4 left-4 px-2.5 py-1 rounded-full text-xs font-medium backdrop-blur-sm flex items-center gap-1.5" style={{ background: `${project.accent}25`, color: project.accent, border: `1px solid ${project.accent}40` }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: project.accent }} /> Live
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00d9b2] transition-colors">{project.title}</h3>
        <p className="text-[#8896a8] text-sm leading-relaxed mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="px-2 py-0.5 bg-white/5 border border-white/8 text-[#8896a8] text-xs rounded-md">{tag}</span>
          ))}
        </div>
        <div className="flex items-center gap-1 text-[#00d9b2] text-sm font-medium">
          Read article <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </button>
  );
}

// ─── Project Detail Article ──────────────────────────────────────────────────

export function ProjectDetailPage({ slug, onNavigate }: { slug: string; onNavigate: (p: Page, slug?: string) => void }) {
  const project = PROJECTS.find(p => p.slug === slug);
  const moreProjects = PROJECTS.filter(p => p.slug !== slug).slice(0, 3);

  if (!project) {
    return (
      <div className="pt-32 px-6 text-center">
        <p className="text-[#8896a8]">Project not found.</p>
        <button onClick={() => onNavigate('projects')} className="mt-4 text-[#00d9b2]">Back to projects</button>
      </div>
    );
  }

  return (
    <div>
      {/* Hero image */}
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-[#0b1120]/70 to-[#0b1120]/40" />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-10">
          <div className="max-w-4xl mx-auto">
            <button onClick={() => onNavigate('projects')} className="inline-flex items-center gap-2 text-[#8896a8] hover:text-white text-sm mb-6 transition-colors">
              <ArrowLeft size={16} /> All projects
            </button>
            {project.live && (
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium mb-4" style={{ background: `${project.accent}25`, color: project.accent, border: `1px solid ${project.accent}40` }}>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: project.accent }} /> Live System
              </div>
            )}
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 leading-tight">{project.title}</h1>
            <p className="text-lg text-[#a8b3c7] max-w-2xl">{project.tagline}</p>
          </div>
        </div>
      </div>

      {/* Meta bar */}
      <div className="border-y border-white/5 bg-[#080d18]">
        <div className="max-w-4xl mx-auto px-6 py-5 flex flex-wrap gap-6 text-sm">
          <MetaItem label="Role" value={project.role} />
          <MetaItem label="Timeline" value={project.timeline} />
          <div>
            <div className="text-[#8896a8] text-xs mb-1">Tech Stack</div>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map(s => (
                <span key={s} className="text-white">{s}</span>
              )).reduce<React.ReactNode[]>((acc, el, i) => i === 0 ? [el] : [...acc, <span key={`sep-${i}`} className="text-[#8896a8]">·</span>, el], [])}
            </div>
          </div>
          {project.url && (
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="ml-auto flex items-center gap-1.5 text-[#00d9b2] hover:underline font-medium">
              Visit site <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>

      {/* Article body */}
      <article className="max-w-3xl mx-auto px-6 py-16 prose-custom">
        <h3>Overview</h3>
        <p>{project.overview}</p>

        <h3>The Challenge</h3>
        <p>{project.challenge}</p>

        <h3>Approach</h3>
        <p>{project.approach}</p>

        <h3>Key Features</h3>
        <ul className="space-y-3 mt-4 mb-6">
          {project.features.map(feature => (
            <li key={feature} className="flex items-start gap-3 text-[#c2cad8]">
              <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: project.accent }} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <h3>Outcome</h3>
        <p>{project.outcome}</p>
      </article>

      {/* Tags */}
      <div className="max-w-3xl mx-auto px-6 pb-12">
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="px-3 py-1.5 bg-white/5 border border-white/8 text-[#8896a8] text-sm rounded-lg">{tag}</span>
          ))}
        </div>
      </div>

      {/* More projects */}
      <section className="bg-[#080d18] py-16 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-xl font-bold text-white mb-8">More projects</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {moreProjects.map(p => (
              <button
                key={p.slug}
                onClick={() => onNavigate('project-detail', p.slug)}
                className="group text-left rounded-xl overflow-hidden glass glass-hover"
              >
                <div className="relative h-32 overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] to-transparent" />
                </div>
                <div className="p-4">
                  <div className="text-white font-semibold text-sm group-hover:text-[#00d9b2] transition-colors">{p.title}</div>
                  <div className="text-[#8896a8] text-xs mt-1 line-clamp-1">{p.tagline}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[#8896a8] text-xs mb-1">{label}</div>
      <div className="text-white">{value}</div>
    </div>
  );
}
