import { Award, Building2, CheckCircle2, BookOpen } from 'lucide-react';
import { CERTIFICATIONS } from '../data';
import { PageHeader } from '../components/PageHeader';

export function QualificationsPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Certifications"
        title="Qualifications"
        subtitle="Professional certifications and qualifications I've earned — separate from my formal academic education."
      />

      {/* ─── Intro ─── */}
      <section className="max-w-3xl mx-auto px-6 pb-12">
        <div className="reveal glass rounded-2xl p-8 border border-[#fb923c]/15">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen size={18} className="text-[#fb923c]" />
            <span className="text-[#fb923c] text-xs font-semibold uppercase tracking-[0.25em]">Why I get certified</span>
          </div>
          <p className="text-[#a8b3c7] leading-relaxed">
            Certifications complement my degree by filling gaps and validating practical skills. A bootcamp sharpens my frontend craft; a regulatory certification grounds me in the fundamentals that matter in the Zimbabwean context. I treat them as targeted investments, not collection items — each one was earned because it filled a real knowledge need.
          </p>
        </div>
      </section>

      {/* ─── Certifications ─── */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="reveal text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Award size={20} className="text-[#fb923c]" />
            <span className="text-[#fb923c] text-xs font-semibold uppercase tracking-[0.25em]">Earned</span>
          </div>
          <h2 className="text-2xl font-bold text-white">Certifications</h2>
        </div>

        <div className="space-y-5">
          {CERTIFICATIONS.map((cert, i) => (
            <div
              key={cert.title}
              className="reveal glass glass-hover rounded-2xl p-6 flex items-start gap-5"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-[#fb923c]/10 border border-[#fb923c]/20 flex items-center justify-center text-[#fb923c] flex-shrink-0">
                <Award size={20} />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-lg mb-1">{cert.title}</h3>
                <div className="flex items-center gap-1.5 text-[#fb923c] text-sm font-medium mb-3">
                  <Building2 size={14} /> {cert.issuer}
                </div>
                <p className="text-[#8896a8] text-sm leading-relaxed">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── What each certification gave me ─── */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="reveal text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-2">
            <CheckCircle2 size={20} className="text-[#00d9b2]" />
            <span className="text-[#00d9b2] text-xs font-semibold uppercase tracking-[0.25em]">Takeaways</span>
          </div>
          <h2 className="text-2xl font-bold text-white">What I took away</h2>
        </div>

        <div className="space-y-4">
          {[
            { cert: 'Frontend Masters Bootcamp', points: ['Modern React component patterns and state management', 'Production-grade JavaScript fundamentals', 'UI architecture for real applications'] },
            { cert: 'POTRAZ Basic Computer Appreciation', points: ['Foundational digital literacy and computer operation', "Understanding of Zimbabwe's telecommunications landscape", 'Bridging the digital divide in local communities'] },
            { cert: 'HEXCO ICT Fundamentals', points: ['Standard office and productivity packages', 'ICT principles that underpin all later technical work', 'A certified baseline for more advanced study'] },
          ].map((item, i) => (
            <div key={item.cert} className="reveal glass glass-hover rounded-2xl p-6" style={{ transitionDelay: `${i * 100}ms` }}>
              <h3 className="text-white font-semibold mb-3">{item.cert}</h3>
              <ul className="space-y-2">
                {item.points.map(point => (
                  <li key={point} className="flex items-start gap-2.5 text-[#8896a8] text-sm">
                    <CheckCircle2 size={15} className="text-[#00d9b2] flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Always learning ─── */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="reveal glass rounded-2xl p-8">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen size={18} className="text-[#38bdf8]" />
            <span className="text-[#38bdf8] text-xs font-semibold uppercase tracking-[0.25em]">Ongoing</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Always learning</h3>
          <p className="text-[#a8b3c7] leading-relaxed mb-4">
            Certifications are milestones, not destinations. Between formal study and building real systems, I'm continuously sharpening my skills — currently exploring deeper React patterns, TypeScript, and scalable backend architecture.
          </p>
          <div className="flex flex-wrap gap-2">
            {['React Patterns', 'TypeScript', 'Scalable Architecture', 'API Design', 'System Design'].map(topic => (
              <span key={topic} className="px-3 py-1.5 bg-[#38bdf8]/8 border border-[#38bdf8]/20 text-[#38bdf8] text-xs rounded-lg font-medium">{topic}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Note pointing to education ─── */}
      <section className="max-w-3xl mx-auto px-6 pb-24">
        <div className="reveal glass rounded-2xl p-6 border border-[#00d9b2]/15 flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-[#00d9b2]/10 border border-[#00d9b2]/20 flex items-center justify-center text-[#00d9b2] flex-shrink-0">
            <Award size={18} />
          </div>
          <p className="text-[#a8b3c7] text-sm leading-relaxed">
            For my <span className="text-[#00d9b2] font-medium">formal academic education</span> — including my Computer Science degree at HIT — visit the Education page.
          </p>
        </div>
      </section>
    </div>
  );
}
