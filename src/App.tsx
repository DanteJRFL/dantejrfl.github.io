import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Menu, Moon, Sun, X, Copy, Check, Code2, Database, Smartphone, Sparkles } from 'lucide-react'
import { projects, technologies } from './data'
import ProjectVisual from './components/ProjectVisual'
import Reveal from './components/Reveal'

export default function App() {
  const [activeProject, setActiveProject] = useState(0)
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [language, setLanguage] = useState<'pt' | 'en'>('pt')
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  const isPt = language === 'pt'
  const email = 'dantejrflpro@gmail.com'
  const t = (pt: string, en: string) => isPt ? pt : en

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(max > 0 ? window.scrollY / max : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  const next = (direction: number) => setActiveProject((current) => (current + direction + projects.length) % projects.length)
  const copyEmail = async () => {
    await navigator.clipboard.writeText(email)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <div className="scroll-progress" style={{ transform: `scaleX(${scrollProgress})` }} />
      <header className="navbar">
        <a className="brand" href="#top" aria-label="Dante Junior home"><span className="brand-mark">DJ</span><span>DANTE JUNIOR<span className="brand-dot">.</span></span></a>
        <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'}>
          <a href="#projects" onClick={() => setMenuOpen(false)}>{t('Projetos', 'Projects')}</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>{t('Sobre', 'About')}</a>
          <a href="#stack" onClick={() => setMenuOpen(false)}>{t('Tecnologias', 'Stack')}</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>{t('Contato', 'Contact')}</a>
        </nav>
        <div className="nav-actions">
          <button className="language-toggle" onClick={() => setLanguage(isPt ? 'en' : 'pt')}>{isPt ? 'PT / EN' : 'EN / PT'}</button>
          <button className="icon-button" aria-label="Alternar tema" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>{theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}</button>
          <a className="nav-cta" href="#contact">{t('Vamos conversar', 'Let’s talk')} <ArrowUpRight size={15} /></a>
          <button className="icon-button mobile-menu" aria-label="Abrir menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={18} /> : <Menu size={18} />}</button>
        </div>
      </header>

      <main id="top">
        <section className="hero container">
          <div className="hero-meta"><span className="status-dot" /> {t('DISPONÍVEL PARA OPORTUNIDADES', 'OPEN TO OPPORTUNITIES')} <span className="meta-line" /> <span>ARACAJU, BR</span></div>
          <div className="hero-name-wrap" aria-label="Dante Junior">
            <motion.div className="hero-outline" initial={{ x: 60, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1.1, ease: 'easeOut' }}>DANTE JUNIOR</motion.div>
            <motion.div className="hero-name" initial={{ y: 45, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .9, delay: .15, ease: [0.22, 1, 0.36, 1] }}>DANTE JUNIOR<span>.</span></motion.div>
          </div>
          <div className="hero-bottom">
            <div className="hero-copy">
              <p className="eyebrow">{t('DESENVOLVEDOR FULL STACK', 'FULL STACK DEVELOPER')}</p>
              <h1>{t('Transformando ideias em', 'Turning ideas into')} <em>{t('experiências digitais.', 'digital experiences.')}</em></h1>
              <p className="hero-description">{t('Estudante de Sistemas de Informação e técnico em Desenvolvimento de Sistemas. Desenvolvo aplicações web e mobile, conectando interfaces, lógica e dados.', 'Information Systems student and Systems Development technician. I build web and mobile applications, connecting interfaces, logic and data.')}</p>
              <div className="hero-buttons"><a className="button button-primary" href="#projects">{t('Explorar projetos', 'Explore projects')} <ArrowDown size={16} /></a><a className="button button-ghost" href="#contact">{t('Entre em contato', 'Get in touch')} <ArrowUpRight size={16} /></a></div>
            </div>
            <div className="hero-index"><span>01 / 04</span><div className="index-line" /><span>{t('DESLIZE PARA DESCOBRIR', 'SCROLL TO DISCOVER')}</span></div>
          </div>
          <div className="hero-decoration"><span>PORTFOLIO — 2026</span><span>CREATIVE DEVELOPMENT / 001</span></div>
        </section>

        <section className="section container" id="projects">
          <Reveal><div className="section-heading"><div><p className="eyebrow">01 — {t('TRABALHOS SELECIONADOS', 'SELECTED WORK')}</p><h2>{t('Projetos em', 'Selected')} <em>{t('destaque.', 'projects.')}</em></h2></div><p className="section-aside">{t('Uma seleção de experimentos, aplicações e soluções que construí ao longo da minha jornada.', 'A selection of experiments, applications and solutions built throughout my journey.')}</p></div></Reveal>
          <div className="project-showcase">
            <div className="project-stage">
              <AnimatePresence mode="wait">
                <motion.div key={projects[activeProject].id} className="project-card"
                  initial={{ opacity: 0, y: 24, rotateX: 5, scale: .98 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -18, scale: .98 }}
                  transition={{ duration: .45, ease: [0.22, 1, 0.36, 1] }}>
                  <ProjectVisual project={projects[activeProject]} />
                </motion.div>
              </AnimatePresence>
              <div className="project-controls"><span className="project-count">{projects[activeProject].number}<i> / 05</i></span><div className="project-arrows"><button className="icon-button" onClick={() => next(-1)} aria-label="Projeto anterior"><ArrowLeft size={17} /></button><button className="icon-button" onClick={() => next(1)} aria-label="Próximo projeto"><ArrowRight size={17} /></button></div></div>
            </div>
            <AnimatePresence mode="wait">
              <motion.div className="project-info" key={projects[activeProject].id} initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -12 }} transition={{ duration: .3 }}>
                <p className="eyebrow">{projects[activeProject].category}</p>
                <h3>{projects[activeProject].title}<span>.</span></h3>
                <p className="project-description">{projects[activeProject].description}</p>
                <div className="project-tags">{projects[activeProject].stack.map(tag => <span key={tag}>{tag}</span>)}</div>
                <a className="text-link" href={projects[activeProject].url} target="_blank" rel="noreferrer">{t('VISUALIZAR PROJETO', 'VIEW PROJECT')} <ArrowUpRight size={16} /></a>
                <div className="project-dots">{projects.map((project, index) => <button key={project.id} aria-label={`Ir para ${project.title}`} className={index === activeProject ? 'active' : ''} onClick={() => setActiveProject(index)} />)}</div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        <section className="section container" id="about">
          <Reveal><div className="section-heading"><div><p className="eyebrow">02 — {t('QUEM SOU', 'WHO I AM')}</p><h2>{t('Código com', 'Code with')} <em>{t('propósito.', 'purpose.')}</em></h2></div><span className="big-index">02</span></div></Reveal>
          <div className="about-grid">
            <Reveal><div className="about-main"><p>{t('Sou estudante de', 'I am an')} <strong>Sistemas de Informação</strong> {t('na Universidade Tiradentes e técnico em', 'student at Universidade Tiradentes and a')} <strong>{t('Desenvolvimento de Sistemas', 'Systems Development')}</strong> {t('pelo SENAI. Gosto de transformar problemas em soluções digitais funcionais, intuitivas e bem construídas.', 'technician from SENAI. I enjoy turning problems into functional, intuitive and well-crafted digital solutions.')}</p><p>{t('Meu foco é evoluir como desenvolvedor Full Stack, aprofundando conhecimentos em aplicações web, mobile, APIs e bancos de dados. Também participo de projetos na', 'My focus is to grow as a Full Stack developer, deepening my knowledge of web and mobile applications, APIs and databases. I also take part in projects at')} <strong>Aureo Development</strong>.</p><div className="about-stats"><div><b>05<span>+</span></b><small>{t('PROJETOS', 'PROJECTS')}</small></div><div><b>03</b><small>{t('FORMAÇÕES', 'PROGRAMS')}</small></div><div><b>2030</b><small>{t('GRADUAÇÃO PREVISTA', 'EXPECTED GRADUATION')}</small></div></div></div></Reveal>
            <Reveal delay={.12}><aside className="currently-card"><div className="card-topline"><span>{t('NO RADAR', 'CURRENTLY')}</span><Sparkles size={16} /></div><div className="current-item"><span className="current-icon"><Code2 size={18} /></span><div><b>{t('Construindo', 'Building')}</b><small>React Native · Expo</small></div><span className="current-number">01</span></div><div className="current-item"><span className="current-icon"><Database size={18} /></span><div><b>{t('Estudando', 'Studying')}</b><small>{t('Sistemas de Informação · 2º período', 'Information Systems · 2nd semester')}</small></div><span className="current-number">02</span></div><div className="current-item"><span className="current-icon"><Smartphone size={18} /></span><div><b>{t('Desenvolvendo', 'Developing')}</b><small>{t('Aplicações web e mobile', 'Web and mobile applications')}</small></div><span className="current-number">03</span></div></aside></Reveal>
          </div>
        </section>

        <section className="section container" id="stack">
          <Reveal><div className="section-heading"><div><p className="eyebrow">03 — {t('FERRAMENTAS', 'TOOLKIT')}</p><h2>{t('Tecnologias que', 'Tools I')} <em>{t('utilizo.', 'work with.')}</em></h2></div><p className="section-aside">{t('Tecnologias e ferramentas que fazem parte dos meus estudos e projetos.', 'Technologies and tools that are part of my studies and projects.')}</p></div></Reveal>
          <div className="stack-grid">{technologies.map((tech, i) => <Reveal key={tech} delay={i * .025}><div className="stack-item"><span>{String(i + 1).padStart(2, '0')}</span><b>{tech}</b><ArrowUpRight size={14} /></div></Reveal>)}</div>
          <div className="capabilities"><div><span>01</span><b>{t('Web & Mobile', 'Web & Mobile')}</b><small>React · React Native · TypeScript · Expo</small></div><div><span>02</span><b>{t('Dados & Integrações', 'Data & Integrations')}</b><small>SQL · REST APIs · Supabase · PostgreSQL</small></div><div><span>03</span><b>{t('Método & Prototipação', 'Method & Prototyping')}</b><small>Git · GitHub · Kanban · Low-Code</small></div></div>
        </section>

        <section className="section container" id="education">
          <Reveal><div className="section-heading"><div><p className="eyebrow">04 — {t('FORMAÇÃO', 'EDUCATION')}</p><h2>{t('Aprendizado em', 'Always')} <em>{t('movimento.', 'learning.')}</em></h2></div></div></Reveal>
          <div className="timeline">
            <Reveal><div className="timeline-item"><span className="timeline-date">{t('EM ANDAMENTO', 'IN PROGRESS')}</span><div><h3>Sistemas de Informação</h3><p>Universidade Tiradentes · Aracaju/SE</p><small>{t('Cursando o 2º período. Conclusão prevista para 2030/2.', 'Currently in the 2nd semester. Expected graduation: 2030/2.')}</small></div></div></Reveal>
            <Reveal delay={.08}><div className="timeline-item"><span className="timeline-date">2025</span><div><h3>{t('Técnico em Desenvolvimento de Sistemas', 'Systems Development Technician')}</h3><p>SENAI · Aracaju/SE</p><small>{t('Formação técnica em programação, bancos de dados e desenvolvimento de aplicações.', 'Technical training in programming, databases and application development.')}</small></div></div></Reveal>
            <Reveal delay={.16}><div className="timeline-item"><span className="timeline-date">2026</span><div><h3>Jovem Tech</h3><p>InovaSE</p><small>{t('Formação complementar em tecnologia.', 'Complementary technology training.')}</small></div></div></Reveal>
          </div>
        </section>

        <section className="section container contact-section" id="contact">
          <Reveal><div className="contact-panel"><div className="contact-copy"><p className="eyebrow">05 — {t('CONTATO', 'CONTACT')}</p><h2>{t('Vamos criar algo', 'Let’s build something')} <em>{t('incrível?', 'great.')}</em></h2><p>{t('Estou aberto a oportunidades de estágio, vagas júnior e projetos que me desafiem a evoluir.', 'I am open to internship opportunities, junior roles and projects that challenge me to grow.')}</p><a className="button button-primary" href={`mailto:${email}`}>{t('Enviar um e-mail', 'Send an email')} <ArrowUpRight size={16} /></a></div><div className="contact-links"><button onClick={copyEmail} className="contact-link"><span><Mail size={18} /><small>E-MAIL</small><b>{email}</b></span>{copied ? <Check size={17} /> : <Copy size={17} />}</button><a className="contact-link" href="https://github.com/DanteJRFL" target="_blank" rel="noreferrer"><span><Github size={18} /><small>GITHUB</small><b>DanteJRFL</b></span><ArrowUpRight size={17} /></a><a className="contact-link" href="https://www.linkedin.com/in/dante-junior-ferreira-lima-17958b31a/" target="_blank" rel="noreferrer"><span><Linkedin size={18} /><small>LINKEDIN</small><b>Dante Junior Ferreira Lima</b></span><ArrowUpRight size={17} /></a></div></div></Reveal>
        </section>
      </main>
      <footer className="footer container"><a className="brand" href="#top"><span className="brand-mark">DJ</span><span>DANTE JUNIOR<span className="brand-dot">.</span></span></a><span>© {new Date().getFullYear()} DANTE JUNIOR FERREIRA LIMA</span><a href="#top">{t('VOLTAR AO TOPO ↑', 'BACK TO TOP ↑')}</a></footer>
    </div>
  )
}
