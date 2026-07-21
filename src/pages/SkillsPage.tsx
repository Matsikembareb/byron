import { Code2, Wrench, Database, Cpu, Star, Heart, Layers, Zap, Server } from 'lucide-react';
import { SKILLS } from '../data';
import { PageHeader } from '../components/PageHeader';

export function SkillsPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Technical Expertise"
        title="Skills & capabilities"
        subtitle="The tools and technologies I use to build production-grade applications — organized by where I'm strongest, what else I work with, and the human skills that tie it all together."
      />

      {/* ─── Philosophy ─── */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="reveal glass rounded-2xl p-8 border border-[#00d9b2]/15">
          <div className="flex items-center gap-2 mb-3">
            <Zap size={18} className="text-[#00d9b2]" />
            <span className="text-[#00d9b2] text-xs font-semibold uppercase tracking-[0.25em]">My approach to skills</span>
          </div>
          <p className="text-[#a8b3c7] leading-relaxed">
            I don't chase every new framework. I go deep on a core set of tools that let me ship complete systems, and I stay curious about the rest. The list below is honest — these are the technologies I've actually used to build real, working software, not a buzzword collection. I'd rather be excellent at a few things than mediocre at many.
          </p>
        </div>
      </section>

      {/* ─── Strong suites ─── */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="reveal text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Star size={20} className="text-[#00d9b2]" />
            <span className="text-[#00d9b2] text-xs font-semibold uppercase tracking-[0.25em]">Where I'm Strongest</span>
          </div>
          <h2 className="text-2xl font-bold text-white">Strong suites</h2>
          <p className="text-[#8896a8] mt-2 max-w-lg mx-auto">The technologies I reach for first and have shipped real systems with.</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {SKILLS.strong.map((skill, i) => (
            <div key={skill.name} className="reveal glass glass-hover rounded-2xl p-5 flex items-start gap-4" style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="w-11 h-11 rounded-xl bg-[#00d9b2]/10 border border-[#00d9b2]/20 flex items-center justify-center text-[#00d9b2] flex-shrink-0">
                <SkillIcon name={skill.name} />
              </div>
              <div>
                <h3 className="text-white font-semibold">{skill.name}</h3>
                <p className="text-[#8896a8] text-sm mt-1 leading-relaxed">{skill.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Other skills ─── */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="reveal text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Wrench size={20} className="text-[#38bdf8]" />
            <span className="text-[#38bdf8] text-xs font-semibold uppercase tracking-[0.25em]">Also Work With</span>
          </div>
          <h2 className="text-2xl font-bold text-white">Other technologies</h2>
          <p className="text-[#8896a8] mt-2 max-w-lg mx-auto">Tools I'm productive with and actively growing in.</p>
        </div>

        <div className="reveal flex flex-wrap gap-3 justify-center">
          {SKILLS.other.map(skill => (
            <span key={skill.name} className="px-4 py-2.5 glass glass-hover rounded-xl text-[#a8b3c7] text-sm font-medium hover:text-[#00d9b2]">
              {skill.name}
            </span>
          ))}
        </div>
      </section>

      {/* ─── How I use them (categories) ─── */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="reveal text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Layers size={20} className="text-[#38bdf8]" />
            <span className="text-[#38bdf8] text-xs font-semibold uppercase tracking-[0.25em]">How They Fit Together</span>
          </div>
          <h2 className="text-2xl font-bold text-white">My toolkit by layer</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {[
            { icon: <Server size={20} />, title: 'Backend', items: ['Python', 'Flask', 'SQLAlchemy', 'MySQL', 'REST APIs'], desc: 'Server logic, data modeling, and API design — the engine room of every system I build.' },
            { icon: <Code2 size={20} />, title: 'Frontend', items: ['JavaScript', 'HTML & CSS', 'Jinja2', 'React', 'Tailwind CSS'], desc: 'Server-rendered templates and client-side interactivity, always mobile-first and accessible.' },
            { icon: <Database size={20} />, title: 'Data & Tools', items: ['MySQL', 'MongoDB', 'Git & GitHub', 'Postman', 'Anaconda'], desc: 'Relational and document databases, version control, and the day-to-day tools that keep work moving.' },
          ].map((cat, i) => (
            <div key={cat.title} className="reveal glass glass-hover rounded-2xl p-6" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="w-12 h-12 rounded-xl bg-[#38bdf8]/10 border border-[#38bdf8]/20 flex items-center justify-center text-[#38bdf8] mb-4">
                {cat.icon}
              </div>
              <h3 className="text-white font-bold mb-2">{cat.title}</h3>
              <p className="text-[#8896a8] text-sm leading-relaxed mb-3">{cat.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {cat.items.map(item => (
                  <span key={item} className="px-2 py-0.5 bg-white/5 border border-white/8 text-[#8896a8] text-xs rounded-md">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Soft skills ─── */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="reveal text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Heart size={20} className="text-[#fb923c]" />
            <span className="text-[#fb923c] text-xs font-semibold uppercase tracking-[0.25em]">The Human Side</span>
          </div>
          <h2 className="text-2xl font-bold text-white">Soft skills</h2>
          <p className="text-[#8896a8] mt-2 max-w-lg mx-auto">What I bring to a team beyond the code.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SKILLS.soft.map((skill, i) => (
            <div key={skill.name} className="reveal glass glass-hover rounded-2xl p-5" style={{ transitionDelay: `${i * 70}ms` }}>
              <h3 className="text-white font-semibold mb-1.5">{skill.name}</h3>
              <p className="text-[#8896a8] text-sm leading-relaxed">{skill.note}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function SkillIcon({ name }: { name: string }) {
  const lower = name.toLowerCase();
  if (lower.includes('mysql') || lower.includes('sql')) return <Database size={18} />;
  if (lower.includes('python')) return <Code2 size={18} />;
  if (lower.includes('javascript') || lower.includes('html')) return <Code2 size={18} />;
  if (lower.includes('flask') || lower.includes('jinja')) return <Wrench size={18} />;
  return <Cpu size={18} />;
}
