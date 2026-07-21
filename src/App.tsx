import { useState, useEffect } from 'react';
import { Navbar, Footer } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { SkillsPage } from './pages/SkillsPage';
import { ProjectsPage, ProjectDetailPage } from './pages/ProjectsPage';
import { EducationPage } from './pages/EducationPage';
import { QualificationsPage } from './pages/QualificationsPage';
import { ContactPage } from './pages/ContactPage';
import { useReveal, useScrollTop } from './hooks';
import type { Page } from './data';

export default function App() {
  const [page, setPage] = useState<Page>('home');
  const [projectSlug, setProjectSlug] = useState<string | undefined>();
  const [loaded, setLoaded] = useState(false);

  useReveal();
  useScrollTop(page);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const navigate = (p: Page, slug?: string) => {
    setPage(p);
    if (slug) setProjectSlug(slug);
  };

  return (
    <div className="min-h-screen bg-[#0b1120]">
      <Navbar current={page} onNavigate={navigate} />

      <main className={loaded ? 'animate-fade-in' : ''}>
        {page === 'home' && <HomePage onNavigate={navigate} />}
        {page === 'about' && <AboutPage onNavigate={navigate} />}
        {page === 'skills' && <SkillsPage />}
        {page === 'projects' && <ProjectsPage onNavigate={navigate} />}
        {page === 'project-detail' && projectSlug && <ProjectDetailPage slug={projectSlug} onNavigate={navigate} />}
        {page === 'education' && <EducationPage />}
        {page === 'qualifications' && <QualificationsPage />}
        {page === 'contact' && <ContactPage />}
      </main>

      <Footer onNavigate={navigate} />
    </div>
  );
}
