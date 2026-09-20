import React from "react";
import projects from "./assets/Projects/manifest";

const projectTech = {
  "CabKit3D": ["React", "R3F", "Three.js"],
  "Shelter Sync": ["MERN", "JWT", "GridFS"],
  "Smart Job Tracker": ["Vue 3", "Supabase", "PWA"],
  "Brainy Box": ["Full Stack", "REST API", "JWT"],
  "Catholic School Website": ["React", "Responsive UI", "Vercel"],
  "Jeepney Streamlit Application": ["Python", "Streamlit", "Routing"]
};

const featuredCertificates = [
  "Search Engine Optimization Professional Certificate by Moz.jpg",
  "Technical SEO.jpg",
  "Coursera Meta Course.png",
  "JavaScript Essential Training.jpg",
  "HTML Essential Training.jpg",
  "CSS Essential Training 2023.jpg"
].map((file) => ({
  file,
  title: file.replace(/\.(png|jpe?g|webp)$/i, ""),
  src: require("./assets/Certificates/" + file)
}));

const socials = [
  { label: "Email", href: "mailto:carinotj19@gmail.com" },
  { label: "GitHub", href: "https://github.com/carinotj19" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/tj-carino/" },
  {
    label: "Resume",
    href: "https://drive.google.com/file/d/1yaNjr0aRmVPWCJqt2B0VZdWSLKg-4v5_/view?usp=sharing"
  }
];

function Gear({ size = "large", reverse = false, className = "" }) {
  return (
    <div
      className={"gear gear-" + size + (reverse ? " reverse" : "") + " " + className}
      aria-hidden="true"
    >
      <span />
    </div>
  );
}

function Rivets() {
  return (
    <>
      <span className="rivet rivet-tl" />
      <span className="rivet rivet-tr" />
      <span className="rivet rivet-bl" />
      <span className="rivet rivet-br" />
    </>
  );
}

function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children && <p className="section-copy">{children}</p>}
    </div>
  );
}

function App() {
  const featuredProjects = projects.slice(0, 6);

  return (
    <div className="workshop-shell">
      <header className="topbar">
        <a className="brand-plate" href="#workshop" aria-label="TJ Cariño workshop home">
          <span className="brand-mark">TJ</span>
          <span>
            <strong>CARIÑO WORKS</strong>
            <small>KINETIC SYSTEMS / WEB DEVELOPMENT</small>
          </span>
        </a>

        <nav className="workshop-nav" aria-label="Primary navigation">
          <a href="#contraptions">Contraptions</a>
          <a href="#worklog">Work Log</a>
          <a href="#advancements">Advancements</a>
          <a href="#signal">Signal Box</a>
        </nav>
      </header>

      <main>
        <section id="workshop" className="hero-section">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="status-chip">
                <span className="status-lamp" />
                KINETIC NETWORK ONLINE
              </div>

              <p className="hero-kicker">WORKSHOP FOREMAN / WEB DEVELOPER</p>
              <h1>
                TJ CARIÑO
                <span>Software Developer in Baguio City, Philippines.</span>
              </h1>

              <p className="hero-intro">
                I build production websites, interactive applications, automation,
                and developer tools — assembled one system at a time.
              </p>

              <div className="hero-actions">
                <a className="create-button primary" href="#contraptions">
                  <span>Inspect Contraptions</span>
                </a>
                <a
                  className="create-button"
                  href="https://github.com/carinotj19"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Open Workshop Repo</span>
                </a>
              </div>

              <div className="instrument-row" aria-label="Developer status">
                <div className="instrument">
                  <small>CURRENT STATION</small>
                  <strong>Pixel Motion</strong>
                </div>
                <div className="instrument">
                  <small>ROLE</small>
                  <strong>Web Developer</strong>
                </div>
                <div className="instrument">
                  <small>STRESS UNITS</small>
                  <strong>STABLE</strong>
                </div>
              </div>
            </div>

            <div className="contraption-stage" aria-label="Animated Create-inspired developer contraption">
              <Rivets />
              <div className="machine-label">KINETIC ASSEMBLY // TJ-01</div>
              <div className="vertical-shaft" />
              <Gear size="large" className="gear-one" />
              <Gear size="medium" reverse className="gear-two" />
              <Gear size="small" className="gear-three" />

              <div className="belt">
                <div className="belt-track" />
                <span className="belt-item item-one">JS</span>
                <span className="belt-item item-two">REACT</span>
                <span className="belt-item item-three">WEB</span>
              </div>

              <div className="gauge-panel">
                <span className="panel-title">ROTATIONAL OUTPUT</span>
                <div className="gauge">
                  <span className="gauge-needle" />
                </div>
                <div className="gauge-readout">
                  <span>RPM</span>
                  <strong>256</strong>
                </div>
              </div>

              <div className="machine-output">
                <span className="lamp red" />
                <span className="lamp amber" />
                <span className="lamp green active" />
                <strong>BUILD SUCCESSFUL</strong>
              </div>
            </div>
          </div>

          <div className="shaft-divider" aria-hidden="true">
            <span className="shaft-cap" />
            <span className="shaft-line" />
            <Gear size="small" className="divider-gear" />
            <span className="shaft-line" />
            <span className="shaft-cap" />
          </div>
        </section>

        <section id="contraptions" className="content-section projects-section">
          <SectionHeading eyebrow="ASSEMBLY FLOOR / 01" title="Featured Contraptions">
            Selected builds from the workshop. The newer systems stay up front; smaller
            experiments can live in the archive.
          </SectionHeading>

          <div className="project-grid">
            {featuredProjects.map((project, index) => (
              <article className="project-machine" key={project.title}>
                <Rivets />
                <div className="project-index">
                  <span>CONTRAPTION</span>
                  <strong>{String(index + 1).padStart(2, "0")}</strong>
                </div>

                <div className="project-screen">
                  <img src={project.src} alt={project.title + " preview"} loading="lazy" />
                  <div className="screen-scanline" />
                </div>

                <div className="project-body">
                  <div className="project-status">
                    <span className="status-lamp" />
                    OPERATIONAL
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="component-tags" aria-label={project.title + " technologies"}>
                    {(projectTech[project.title] || ["Web", "Development"]).map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noreferrer">
                        Inspect
                      </a>
                    )}
                    {project.repo && (
                      <a href={project.repo} target="_blank" rel="noreferrer">
                        Source
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="worklog" className="content-section worklog-section">
          <SectionHeading eyebrow="ENGINEER'S LOG / 02" title="Workshop Log">
            Production work is less glamorous than a showcase build. It is also where
            reliability, debugging, and careful implementation matter most.
          </SectionHeading>

          <div className="logbook">
            <Rivets />
            <div className="logbook-spine" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>

            <div className="log-entry">
              <div className="log-date">
                <span>2026</span>
                <strong>NOW</strong>
              </div>
              <div className="log-content">
                <p className="log-company">PIXEL MOTION</p>
                <h3>Web Developer</h3>
                <p>
                  Building and maintaining responsive production websites, implementing
                  custom front-end changes, integrating third-party tools, and tracing
                  issues across analytics, structured data, CMS content, and client-facing UI.
                </p>
                <div className="log-tags">
                  <span>WordPress / CMS</span>
                  <span>HTML / CSS / JS</span>
                  <span>GA4 / GTM</span>
                  <span>Technical SEO</span>
                  <span>Debugging</span>
                </div>
              </div>
            </div>
          </div>

          <div className="processing-line" aria-label="Capabilities">
            <div className="processor">
              <span className="processor-number">01</span>
              <strong>BUILD</strong>
              <small>React · JavaScript · WordPress</small>
            </div>
            <div className="line-arrow">→</div>
            <div className="processor">
              <span className="processor-number">02</span>
              <strong>MEASURE</strong>
              <small>GA4 · GTM · SEO · Schema</small>
            </div>
            <div className="line-arrow">→</div>
            <div className="processor">
              <span className="processor-number">03</span>
              <strong>DEBUG</strong>
              <small>Production issues · Integrations</small>
            </div>
            <div className="line-arrow">→</div>
            <div className="processor">
              <span className="processor-number">04</span>
              <strong>SHIP</strong>
              <small>Git · Deployments · Iteration</small>
            </div>
          </div>
        </section>

        <section id="advancements" className="content-section advancements-section">
          <SectionHeading eyebrow="ADVANCEMENT TREE / 03" title="Unlocked Advancements">
            A smaller selection of certifications supporting the work above.
          </SectionHeading>

          <div className="advancement-tree">
            <div className="tree-line" aria-hidden="true" />
            {featuredCertificates.map((certificate, index) => (
              <article className="advancement" key={certificate.file}>
                <div className="advancement-icon">
                  <img src={certificate.src} alt="" loading="lazy" />
                </div>
                <div>
                  <small>ADVANCEMENT MADE!</small>
                  <h3>{certificate.title}</h3>
                  <span>{index < 3 ? "Professional Track" : "Core Web Track"}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="signal" className="signal-section">
          <div className="station-board">
            <Rivets />
            <p className="eyebrow">SIGNAL BOX / FINAL STOP</p>
            <h2>Send a Signal</h2>
            <p>
              Want to talk about a build, a role, or a strange machine that probably
              needs more gears?
            </p>

            <div className="departure-board">
              {socials.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={social.href.startsWith("mailto:") ? undefined : "noreferrer"}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{social.label}</strong>
                  <small>READY</small>
                </a>
              ))}
            </div>

            <div className="station-status">
              <span className="status-lamp" />
              SYSTEM READY — AVAILABLE FOR CONTACT
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>CARIÑO WORKS // KINETIC NETWORK</span>
        <span>Powered by excessive rotational force.</span>
      </footer>
    </div>
  );
}

export default App;
