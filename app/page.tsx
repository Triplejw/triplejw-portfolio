const projects = [
  {
    number: "02",
    title: "Image Caption Generator",
    type: "Deep learning · Computer vision",
    description:
      "An encoder-decoder model with Bahdanau attention, ResNet-50 spatial features, and a Gradio interface for turning images into natural-language captions.",
    tags: ["PyTorch", "ResNet-50", "LSTM", "Gradio"],
    href: "https://github.com/Triplejw/image-caption-generator",
    metric: "0.208 BLEU-4",
  },
  {
    number: "03",
    title: "ConvoManage",
    type: "Full-stack product",
    description:
      "A multi-role conference platform for organisers, speakers, and attendees, with authentication, scheduling, real-time updates, and payment-ready workflows.",
    tags: ["React", "TypeScript", "Supabase", "PostgreSQL"],
    href: "https://github.com/Triplejw/ConvoManage",
    metric: "Multi-role SaaS",
  },
  {
    number: "04",
    title: "Smart Expense API",
    type: "Backend engineering",
    description:
      "A clean FastAPI service with strict Pydantic validation, interactive OpenAPI documentation, contract tests, and 100% line-coverage enforcement.",
    tags: ["Python", "FastAPI", "Pydantic", "Pytest"],
    href: "https://github.com/Triplejw/diligent-expense-tracker-api",
    metric: "100% coverage",
  },
];

const toolkit = [
  "Python",
  "TypeScript",
  "C++",
  "React",
  "React Native",
  "FastAPI",
  "PyTorch",
  "OpenCV",
  "PostgreSQL",
  "Docker",
  "Linux",
  "Git",
];

function Brand() {
  return (
    <span className="brand-lockup">
      <span className="brand-mark" aria-hidden="true">
        <span>J</span><sup>3</sup><span>W</span>
      </span>
      <span className="brand-word">TRIPLE<span>JW</span></span>
    </span>
  );
}

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="TripleJW — back to top">
          <Brand />
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#research">Research</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="nav-resume" href="/Joshua-JJ-Wonder-Resume.pdf" download>
          Résumé <span aria-hidden="true">↘</span>
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <div className="status-line">
            <span className="status-dot" />
            Open to AI &amp; software engineering roles
          </div>
          <p className="hero-name">Joshua JJ Wonder</p>
          <h1 id="hero-title">
            Turning AI research into <em>practical products.</em>
          </h1>
          <p className="hero-intro">
            I&apos;m an ECE graduate and edge-AI/full-stack developer building
            intelligent systems across generative AI, computer vision, signal
            processing, APIs, and mobile applications.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              Explore my work <span aria-hidden="true">↓</span>
            </a>
            <a
              className="button button-secondary"
              href="https://github.com/Triplejw"
              target="_blank"
              rel="noreferrer"
            >
              GitHub profile <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <aside className="hero-console" aria-label="Engineering profile snapshot">
          <div className="console-topbar">
            <span>PROFILE.SYS</span>
            <span>CHENNAI / IN</span>
          </div>
          <div className="portrait-wrap">
            <img
              src="/triplejw-profile-v2.jpg"
              alt="Joshua JJ Wonder"
              width="460"
              height="460"
            />
            <div className="portrait-label">
              <span>01</span>
              <span>ENGINEER / RESEARCHER / BUILDER</span>
            </div>
          </div>
          <div className="signal-panel">
            <div className="signal-heading">
              <span>ENGAGEMENT SIGNAL</span>
              <strong>ρ 0.484</strong>
            </div>
            <div className="signal-bars" aria-hidden="true">
              {[26, 40, 34, 58, 45, 68, 54, 78, 64, 88, 72, 96, 82, 68, 90, 76].map(
                (height, index) => <span key={index} style={{ height: `${height}%` }} />
              )}
            </div>
          </div>
          <div className="console-stats">
            <div><strong>EDGE</strong><span>Privacy-first AI</span></div>
            <div><strong>FULL-STACK</strong><span>Idea to interface</span></div>
          </div>
        </aside>
      </section>

      <section className="proof-strip" aria-label="Professional highlights">
        <div><span>01</span><strong>IEEE-published</strong><small>AIMLA 2026</small></div>
        <div><span>02</span><strong>Edge deployed</strong><small>Local Llama-3 8B</small></div>
        <div><span>03</span><strong>Cross-disciplinary</strong><small>AI · DSP · Product</small></div>
        <div><span>04</span><strong>Production minded</strong><small>APIs · Tests · Deployment</small></div>
      </section>

      <section className="work-section section" id="work" aria-labelledby="work-title">
        <div className="section-heading">
          <p className="eyebrow">Selected work / 2023—2026</p>
          <h2 id="work-title">Systems with a reason to exist.</h2>
          <p>
            Research depth, product thinking, and engineering execution—shown
            through the problems I chose and the systems I shipped.
          </p>
        </div>

        <article className="featured-project">
          <div className="project-visual" aria-label="EduSync system overview">
            <div className="visual-topline"><span>EDUSYNC / SYSTEM MAP</span><span>01</span></div>
            <div className="architecture-map">
              <div className="arch-node mobile-node">
                <small>MOBILE CLIENT</small>
                <strong>React Native</strong>
                <span>Teacher + student workflows</span>
              </div>
              <div className="arch-link"><span>HTTP</span><i /></div>
              <div className="arch-node edge-node">
                <small>LOCAL EDGE NODE</small>
                <strong>FastAPI</strong>
                <span>Private inference + analytics</span>
              </div>
              <div className="pipeline-row">
                <span>OCR</span><i />
                <span>LLM</span><i />
                <span>DSP</span><i />
                <span>VISION</span>
              </div>
            </div>
            <div className="visual-metrics">
              <div><strong>8B</strong><span>Llama-3 / 4-bit</span></div>
              <div><strong>21</strong><span>Pilot participants</span></div>
              <div><strong>&lt;10ms</strong><span>Engagement analysis</span></div>
            </div>
          </div>

          <div className="featured-content">
            <div className="project-meta"><span>01 / FLAGSHIP</span><span>EDGE AI · EDTECH</span></div>
            <h3>EduSync</h3>
            <p className="project-lead">
              A privacy-conscious learning platform that generates educational
              content locally and models student engagement through DSP and
              computer vision.
            </p>
            <p>
              Built as my ECE capstone and developed into an IEEE AIMLA 2026
              paper, EduSync connects an Expo mobile client to a FastAPI edge
              node running OCR, a quantized LLM, head-pose estimation, and
              continuous scroll-signal analysis.
            </p>
            <ul className="project-tags" aria-label="EduSync technologies">
              {["React Native", "FastAPI", "Llama-3", "OpenCV", "DSP", "SQLite"].map(tag => <li key={tag}>{tag}</li>)}
            </ul>
            <div className="project-links">
              <a href="https://github.com/Triplejw/EduSync" target="_blank" rel="noreferrer">Explore repository <span aria-hidden="true">↗</span></a>
              <a href="https://doi.org/10.1109/AIMLA67915.2026.11522309" target="_blank" rel="noreferrer">Read IEEE paper <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </article>

        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="card-header">
                <span>{project.number}</span>
                <span>{project.type}</span>
              </div>
              <div className="card-metric">{project.metric}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="project-tags" aria-label={`${project.title} technologies`}>
                {project.tags.map(tag => <li key={tag}>{tag}</li>)}
              </ul>
              <a className="card-link" href={project.href} target="_blank" rel="noreferrer">
                View project <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>

        <a className="all-work-link" href="https://github.com/Triplejw?tab=repositories" target="_blank" rel="noreferrer">
          More experiments: PulseMix, Bible App, license-plate detection, and credit calculators <span aria-hidden="true">↗</span>
        </a>
      </section>

      <section className="about-section section" id="about" aria-labelledby="about-title">
        <div className="about-index" aria-hidden="true">05</div>
        <div className="about-copy">
          <p className="eyebrow">About / The crossover</p>
          <h2 id="about-title">Engineering, from the signal to the screen.</h2>
          <p className="about-lead">
            My ECE background taught me to think in systems: understand the
            signal, model the constraints, measure the result, and make the
            whole thing work.
          </p>
          <p>
            That mindset now shapes how I build software. I&apos;m most engaged
            when a project crosses boundaries—AI with product design, vision
            with edge hardware, or research with an interface that people can
            actually use.
          </p>
          <a href="/Joshua-JJ-Wonder-Resume.pdf" download>Download full résumé <span aria-hidden="true">↘</span></a>
        </div>
        <div className="toolkit-panel">
          <div className="toolkit-header"><span>ENGINEERING TOOLKIT</span><span>12 MODULES</span></div>
          <ul>
            {toolkit.map((tool, index) => (
              <li key={tool}><span>{String(index + 1).padStart(2, "0")}</span>{tool}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="research-section section" id="research" aria-labelledby="research-title">
        <div className="research-header">
          <p className="eyebrow">Research note / AIMLA 2026</p>
          <h2 id="research-title">Measure what matters. State what remains unknown.</h2>
        </div>
        <div className="research-grid">
          <div className="research-result">
            <span className="rho">ρ</span>
            <strong>0.484</strong>
            <p>Spearman correlation between the DSP engagement score and quiz performance in a 21-participant pilot.</p>
          </div>
          <div className="research-copy">
            <p>
              EduSync models scrolling as a discrete-time signal, then combines
              FIR smoothing, zero-crossing rate, frequency analysis, and
              vision-based attention estimates into interpretable learning analytics.
            </p>
            <p>
              The pilot produced promising positive associations, but its small
              sample and multiple-comparison limits matter. I present the work
              as a measured starting point—not a finished scientific claim.
            </p>
            <a href="https://doi.org/10.1109/AIMLA67915.2026.11522309" target="_blank" rel="noreferrer">Publication details <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>

      <section className="experience-section section" aria-labelledby="experience-title">
        <div className="section-heading compact">
          <p className="eyebrow">Experience</p>
          <h2 id="experience-title">Learning by shipping.</h2>
        </div>
        <div className="experience-list">
          <article>
            <span className="experience-date">DEC 2024 — JAN 2025</span>
            <div><h3>Web Development Intern</h3><p>Innovate Intern · Remote</p></div>
            <p>Built full-stack workflows for ConvoManage, improved SQL-backed data handling, and collaborated on debugging, deployment, and version control.</p>
          </article>
          <article>
            <span className="experience-date">MAY 2024 — JUN 2024</span>
            <div><h3>AI &amp; Machine Learning Intern</h3><p>Innovate Intern · Remote</p></div>
            <p>Developed a YOLO-based license-plate detection pipeline spanning preprocessing, annotation, training, tuning, and real-world edge-case testing.</p>
          </article>
          <article>
            <span className="experience-date">2022 — 2026</span>
            <div><h3>B.Tech, Electronics &amp; Communication</h3><p>Karunya Institute of Technology and Sciences</p></div>
            <p>Built a foundation in signal processing, electronics, programming, and systems engineering—then applied it to AI and product development.</p>
          </article>
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="contact-grid" aria-hidden="true" />
        <div>
          <p className="eyebrow">Now receiving signals</p>
          <h2 id="contact-title">Have an ambitious problem?</h2>
          <p>I&apos;m looking for engineering teams where curiosity, measurement, and thoughtful execution all matter.</p>
        </div>
        <a className="contact-button" href="mailto:wonderjj2017@gmail.com">
          <span>Start a conversation</span>
          <strong>wonderjj2017@gmail.com</strong>
          <i aria-hidden="true">↗</i>
        </a>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top" aria-label="TripleJW — back to top"><Brand /></a>
        <p>Joshua JJ Wonder · Edge AI &amp; Full-Stack Developer</p>
        <div>
          <a href="https://www.linkedin.com/in/joshuajjwonder" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/Triplejw" target="_blank" rel="noreferrer">GitHub</a>
          <a href="mailto:wonderjj2017@gmail.com">Email</a>
        </div>
      </footer>
    </main>
  );
}
