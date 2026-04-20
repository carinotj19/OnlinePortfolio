import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import "./App.css";
import projectShowcase from "./assets/Projects/manifest";
import socialLinks from "./components/Header/socialLinks.json";

const contactLabels = {
  email: "Email",
  github: "GitHub",
  linkedin: "LinkedIn",
  resume: "Resume"
};

const contactDetails = {
  email: {
    icon: "@",
    tooltip: "Copy email address",
    copiedTooltip: "Email copied"
  },
  github: {
    icon: "GH",
    tooltip: "View GitHub profile"
  },
  linkedin: {
    icon: "IN",
    tooltip: "View LinkedIn profile"
  },
  resume: {
    icon: "CV",
    tooltip: "View resume PDF"
  }
};

const navItems = [
  { id: "experience", label: "Experience" },
  { id: "demo", label: "Demo" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "approach", label: "How I Work" }
];

const trackedSectionIds = ["top", ...navItems.map((item) => item.id)];
const preferredProjectFilters = [
  "WordPress",
  "Frontend",
  "React",
  "Dashboard",
  "Games",
  "Mobile",
  "Full Stack",
  "PHP",
  "Backend",
  "Python",
  "Data",
  "3D",
  "Performance",
  "UI Cleanup",
  "Learning",
  "Fork"
];

const skillGroups = [
  {
    title: "WordPress",
    items: ["Theme updates", "Plugin troubleshooting", "Elementor builds", "WooCommerce support", "ACF content fields"]
  },
  {
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "Responsive UI", "Layout cleanup"]
  },
  {
    title: "Backend",
    items: ["PHP", "MySQL", "REST API work", "Bug fixing", "Performance tuning"]
  },
  {
    title: "Tools",
    items: ["Git", "cPanel", "WP-CLI", "Cloudflare", "Query Monitor"]
  }
];

const supportCards = [
  {
    title: "What I handle",
    copy:
      "Updates, break fixes, form issues, editor cleanup, and day-to-day requests across live client sites."
  },
  {
    title: "Working style",
    copy:
      "Careful edits, sensible staging, and fixes that reduce future maintenance instead of adding more."
  }
];

const triageStatuses = ["Intake", "In progress", "Ready to ship"];

const supportTickets = [
  {
    id: "form-failure",
    title: "Contact form stopped sending",
    source: "WordPress form",
    severity: "High",
    status: "Intake",
    signal: "Leads are blocked after a plugin update.",
    checks: ["Send a test submission", "Check SMTP logs", "Review plugin update history"],
    action: "Confirm the failing step, roll back the risky update if needed, then patch and retest the form."
  },
  {
    id: "mobile-crop",
    title: "Hero image breaks on mobile",
    source: "Frontend cleanup",
    severity: "Medium",
    status: "In progress",
    signal: "The page works, but the first impression is damaged on small screens.",
    checks: ["Compare 390px and desktop crops", "Check object-fit rules", "Confirm heading does not overlap"],
    action: "Adjust the image crop rules, test the main breakpoints, and keep the editor-side image field unchanged."
  },
  {
    id: "slow-page",
    title: "Landing page feels slow",
    source: "Performance pass",
    severity: "Medium",
    status: "Intake",
    signal: "The page loads, but the first screen takes too long to feel ready.",
    checks: ["Review image sizes", "Scan third-party scripts", "Check cache headers"],
    action: "Prioritize oversized media first, then remove avoidable scripts before touching layout code."
  },
  {
    id: "editor-layout",
    title: "Editor block is hard to update",
    source: "Admin usability",
    severity: "Low",
    status: "Ready to ship",
    signal: "The public layout is acceptable, but the admin workflow is fragile.",
    checks: ["Identify repeated manual edits", "Group related fields", "Check reusable section names"],
    action: "Turn fragile one-off fields into a clearer reusable section so future edits stay predictable."
  }
];

const workingPrinciples = [
  {
    title: "Performance before polish",
    copy:
      "Fast pages and stable templates come first. Visual refinement matters only when the site stays dependable."
  },
  {
    title: "Clear UI for editors",
    copy:
      "Page sections need to look clean in the browser and stay manageable in the admin."
  },
  {
    title: "Direct problem solving",
    copy:
      "The valuable work is tracing regressions, removing friction, and shipping practical fixes quickly."
  }
];

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return undefined;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", updatePreference);
      return () => mediaQuery.removeEventListener("change", updatePreference);
    }

    mediaQuery.addListener(updatePreference);
    return () => mediaQuery.removeListener(updatePreference);
  }, []);

  return prefersReducedMotion;
}

function useInViewOnce(ref, threshold = 0.35, rootMargin = "0px 0px -10% 0px") {
  const [hasEnteredView, setHasEnteredView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || hasEnteredView) return undefined;

    if (typeof IntersectionObserver === "undefined") {
      setHasEnteredView(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEnteredView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [hasEnteredView, ref, rootMargin, threshold]);

  return hasEnteredView;
}

function useScrollReveals(prefersReducedMotion) {
  useEffect(() => {
    if (typeof document === "undefined") return undefined;

    const revealNodes = Array.from(document.querySelectorAll(".reveal-on-scroll"));
    if (!revealNodes.length) return undefined;

    if (prefersReducedMotion || typeof IntersectionObserver === "undefined") {
      revealNodes.forEach((node) => node.classList.add("revealed"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -12% 0px" }
    );

    revealNodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, [prefersReducedMotion]);
}

function useCountUp({ end, isActive, duration = 1100, prefersReducedMotion }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isActive) {
      setValue(0);
      return undefined;
    }

    if (
      prefersReducedMotion ||
      typeof window === "undefined" ||
      typeof IntersectionObserver === "undefined" ||
      typeof window.requestAnimationFrame !== "function"
    ) {
      setValue(end);
      return undefined;
    }

    let frameId = null;
    let startedAt = null;
    const scheduleFrame = window.requestAnimationFrame;
    const cancelFrame = window.cancelAnimationFrame || window.clearTimeout;

    const animate = (timestamp) => {
      if (startedAt === null) {
        startedAt = timestamp;
      }

      const progress = Math.min((timestamp - startedAt) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(end * easedProgress));

      if (progress < 1) {
        frameId = scheduleFrame(animate);
      }
    };

    frameId = scheduleFrame(animate);

    return () => {
      if (frameId !== null) {
        cancelFrame(frameId);
      }
    };
  }, [duration, end, isActive, prefersReducedMotion]);

  return value;
}

function BrowserMockup({ shot, className = "" }) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const closeButtonRef = useRef(null);
  const imageSrc = shot.src || shot.image;
  const imageAlt = shot.alt || shot.imageAlt;
  const browserLabel = shot.browserLabel || "Project screenshot";

  useEffect(() => {
    if (!isLightboxOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setIsLightboxOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isLightboxOpen]);

  return (
    <>
      <figure className={`browser-shot browser-shot-interactive ${className}`.trim()}>
        <button
          className={`browser-shot-trigger ${isImageLoaded ? "image-loaded" : ""}`.trim()}
          type="button"
          aria-label={`Inspect screenshot: ${browserLabel}`}
          onClick={() => setIsLightboxOpen(true)}
        >
          <span className="browser-shot-header">
            <span className="browser-shot-controls" aria-hidden="true">
              <span className="browser-shot-dot" />
              <span className="browser-shot-dot" />
              <span className="browser-shot-dot" />
            </span>
            <span className="browser-shot-label">{browserLabel}</span>
            <span className="browser-shot-inspect" aria-hidden="true">
              Inspect
            </span>
          </span>
          <span className="browser-shot-skeleton" aria-hidden="true" />
          <img
            src={imageSrc}
            alt={imageAlt}
            loading="eager"
            decoding="async"
            onLoad={() => setIsImageLoaded(true)}
          />
        </button>
      </figure>

      {isLightboxOpen &&
        createPortal(
          <div
            className="browser-lightbox"
            role="presentation"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setIsLightboxOpen(false);
              }
            }}
          >
            <div
              className="browser-lightbox-dialog"
              role="dialog"
              aria-modal="true"
              aria-label={`Screenshot preview: ${browserLabel}`}
            >
              <div className="browser-lightbox-header">
                <div>
                  <span className="browser-lightbox-kicker">Visual proof</span>
                  <h2>{browserLabel}</h2>
                </div>
                <button
                  className="browser-lightbox-close"
                  type="button"
                  ref={closeButtonRef}
                  onClick={() => setIsLightboxOpen(false)}
                >
                  Close
                </button>
              </div>
              <img
                className="browser-lightbox-image"
                src={imageSrc}
                alt={imageAlt}
              />
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

function RepoPreview({ project }) {
  const technologies = project.technologies || [];
  const visibleTechnologies = technologies.slice(0, 4);

  return (
    <div className="repo-preview" aria-label={`${project.title} repository summary`}>
      <div className="repo-preview-topline">
        <span className="repo-preview-kicker">
          {project.isFork ? "Forked repository" : "Public repository"}
        </span>
        {project.primaryLanguage && (
          <span className="repo-preview-language">
            <span className="repo-preview-language-dot" aria-hidden="true" />
            {project.primaryLanguage}
          </span>
        )}
      </div>

      <div className="repo-preview-main">
        <span className="repo-preview-name">{project.repositoryName || project.title}</span>
        <p>{project.description}</p>
      </div>

      {visibleTechnologies.length > 0 && (
        <div className="repo-preview-stack" aria-label={`${project.title} repository stack`}>
          {visibleTechnologies.map((technology) => (
            <span key={`${project.slug || project.title}-${technology}`}>
              {technology}
            </span>
          ))}
        </div>
      )}

      {project.updatedLabel && (
        <span className="repo-preview-updated">{project.updatedLabel}</span>
      )}
    </div>
  );
}

function SupportTriageDemo() {
  const initialStatuses = () =>
    Object.fromEntries(supportTickets.map((ticket) => [ticket.id, ticket.status]));
  const [selectedTicketId, setSelectedTicketId] = useState(supportTickets[0].id);
  const [ticketStatuses, setTicketStatuses] = useState(initialStatuses);
  const [reviewedTicketIds, setReviewedTicketIds] = useState([supportTickets[0].id]);
  const selectedTicket =
    supportTickets.find((ticket) => ticket.id === selectedTicketId) || supportTickets[0];
  const currentStatus = ticketStatuses[selectedTicket.id];
  const reviewedCount = reviewedTicketIds.length;
  const isDemoComplete = reviewedCount === supportTickets.length;
  const firstUnreviewedTicket = supportTickets.find((ticket) => !reviewedTicketIds.includes(ticket.id));
  const queueCounts = triageStatuses.map((status) => ({
    status,
    count: supportTickets.filter((ticket) => ticketStatuses[ticket.id] === status).length
  }));

  const markTicketReviewed = (ticketId) => {
    setReviewedTicketIds((current) =>
      current.includes(ticketId) ? current : [...current, ticketId]
    );
  };

  const selectTicket = (ticketId) => {
    setSelectedTicketId(ticketId);
    markTicketReviewed(ticketId);
  };

  const moveSelectedTicket = (status) => {
    setTicketStatuses((current) => ({
      ...current,
      [selectedTicket.id]: status
    }));
    markTicketReviewed(selectedTicket.id);
  };

  const resetBoard = () => {
    setSelectedTicketId(supportTickets[0].id);
    setTicketStatuses(initialStatuses());
    setReviewedTicketIds([supportTickets[0].id]);
  };

  return (
    <article
      className={`triage-demo ${isDemoComplete ? "complete" : ""}`.trim()}
      aria-label="Support triage working demo"
    >
      <div className="triage-demo-header">
        <div>
          <p className="triage-demo-kicker">Working Demo</p>
          <h3>Support Triage Desk</h3>
        </div>
        <button
          className="triage-reset"
          type="button"
          disabled={!isDemoComplete}
          onClick={resetBoard}
        >
          Reset demo
        </button>
      </div>

      <div className="triage-progress" aria-live="polite">
        <span>{reviewedCount} of {supportTickets.length} tickets reviewed</span>
        <span className="triage-progress-track" aria-hidden="true">
          <span style={{ transform: `scaleX(${reviewedCount / supportTickets.length})` }} />
        </span>
      </div>

      <div className="triage-queue-summary" aria-label="Ticket queue counts">
        {queueCounts.map((item) => (
          <div className="triage-queue-item" key={item.status}>
            <span className="triage-queue-label">{item.status}</span>
            <span className="triage-queue-count" aria-label={`${item.count} tickets in ${item.status}`}>
              {item.count}
            </span>
          </div>
        ))}
      </div>

      <div className="triage-demo-grid">
        <div className="triage-ticket-list" aria-label="Incoming support tickets">
          {supportTickets.map((ticket) => {
            const isSelected = ticket.id === selectedTicket.id;
            const hasStartHint = firstUnreviewedTicket?.id === ticket.id && !isSelected;

            return (
              <button
                className={`triage-ticket ${isSelected ? "active" : ""} ${hasStartHint ? "start-hint" : ""}`.trim()}
                type="button"
                key={ticket.id}
                aria-pressed={isSelected}
                onClick={() => selectTicket(ticket.id)}
              >
                <span className="triage-ticket-topline">
                  <span>{ticket.source}</span>
                  <span>{ticket.severity}</span>
                </span>
                <span className="triage-ticket-title">{ticket.title}</span>
                <span className="triage-ticket-footer">
                  <span className="triage-ticket-status">{ticketStatuses[ticket.id]}</span>
                  {hasStartHint && <span className="triage-start-hint">Start here</span>}
                </span>
              </button>
            );
          })}
        </div>

        <div className="triage-ticket-detail">
          <div className="triage-ticket-detail-header">
            <div>
              <span className="triage-detail-source">{selectedTicket.source}</span>
              <h4>{selectedTicket.title}</h4>
            </div>
            <span className="triage-severity">{selectedTicket.severity}</span>
          </div>

          <p className="triage-signal">{selectedTicket.signal}</p>
          <p className="triage-current-status" aria-live="polite">
            Selected ticket: {currentStatus}
          </p>

          <div className="triage-status-actions" role="group" aria-label="Move selected ticket">
            {triageStatuses.map((status) => {
              const isActive = status === currentStatus;

              return (
                <button
                  className={`triage-status-action ${isActive ? "active" : ""}`.trim()}
                  type="button"
                  key={status}
                  aria-pressed={isActive}
                  onClick={() => moveSelectedTicket(status)}
                >
                  Move to {status}
                </button>
              );
            })}
          </div>

          <div className="triage-detail-columns">
            <section className="triage-detail-block" aria-label={`${selectedTicket.title} first checks`}>
              <span className="triage-detail-kicker">First checks</span>
              <ul>
                {selectedTicket.checks.map((check) => (
                  <li key={check}>{check}</li>
                ))}
              </ul>
            </section>

            <section className="triage-detail-block" aria-label={`${selectedTicket.title} next action`}>
              <span className="triage-detail-kicker">Next action</span>
              <p>{selectedTicket.action}</p>
            </section>
          </div>
        </div>
      </div>
    </article>
  );
}

function ProjectCard({ project, index, isExpanded, onToggle }) {
  const projectId = project.slug || project.title.toLowerCase().replace(/\W+/g, "-");
  const detailsId = `${projectId}-details`;
  const tags = project.tags || [];
  const technologies = project.technologies || [];
  const workedOn = project.workedOn || [];
  const problemsSolved = project.problemsSolved || [];
  const results = project.results || [];
  const detailViews = project.detailViews || [];
  const hasImage = Boolean(project.image);

  return (
    <article className={`project-card ${isExpanded ? "expanded" : ""}`.trim()}>
      {hasImage ? (
        <BrowserMockup
          shot={{
            src: project.image,
            alt: project.imageAlt,
            browserLabel: project.browserLabel
          }}
        />
      ) : (
        <RepoPreview project={project} />
      )}
      <div className="project-card-body">
        <span className="project-context">{project.context}</span>
        {tags.length > 0 && (
          <div className="project-tag-list" aria-label={`${project.title} tags`}>
            {tags.map((tag) => (
              <span className="project-tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        )}
        <div className="project-card-header">
          <h3 className="project-title">{project.title}</h3>
          <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
        </div>
        <p className="project-description">{project.description}</p>
        <div className="project-footer">
          {technologies.length > 0 && (
            <div className="tech-list" aria-label={`${project.title} technologies`}>
              {technologies.map((technology) => (
                <span className="tech-pill" key={technology}>
                  {technology}
                </span>
              ))}
            </div>
          )}
          <div className="project-actions">
            <button
              className="project-toggle"
              type="button"
              aria-expanded={isExpanded}
              aria-controls={detailsId}
              onClick={() => onToggle(projectId)}
            >
              <span>{isExpanded ? "Hide details" : "Show details"}</span>
              <span className="project-toggle-icon" aria-hidden="true">
                {isExpanded ? "-" : "+"}
              </span>
            </button>
            {project.href && (
              <a
                className="proof-link"
                href={project.href}
                target="_blank"
                rel="noreferrer"
              >
                {project.linkLabel}
              </a>
            )}
          </div>
        </div>

        <div
          className="project-details"
          id={detailsId}
          role="region"
          aria-label={`${project.title} details`}
          aria-hidden={!isExpanded}
        >
          <p className="project-detail-summary">{project.detailSummary}</p>

          {(workedOn.length > 0 || problemsSolved.length > 0) && (
            <div className="project-detail-columns">
              {workedOn.length > 0 && (
                <section className="project-detail-block" aria-label={`${project.title} work completed`}>
                  <span className="project-detail-kicker">What I worked on</span>
                  <ul className="project-detail-list">
                    {workedOn.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
              )}

              {problemsSolved.length > 0 && (
                <section className="project-detail-block" aria-label={`${project.title} problems solved`}>
                  <span className="project-detail-kicker">Problems solved</span>
                  <ul className="project-detail-list">
                    {problemsSolved.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
              )}
            </div>
          )}

          {technologies.length > 0 && (
            <section className="project-detail-stack" aria-label={`${project.title} stack used`}>
              <span className="project-detail-kicker">Stack used</span>
              <div className="tech-list">
                {technologies.map((technology) => (
                  <span className="tech-pill" key={`${projectId}-${technology}`}>
                    {technology}
                  </span>
                ))}
              </div>
            </section>
          )}

          {results.length > 0 && (
            <div className="project-result-grid" aria-label={`${project.title} results`}>
              {results.map((result) => (
                <div className="project-result" key={result.label}>
                  <span className="project-result-label">{result.label}</span>
                  <span className="project-result-value">{result.value}</span>
                </div>
              ))}
            </div>
          )}

          {hasImage && detailViews.length > 0 && (
            <div className="project-extra-views" aria-label={`${project.title} extra views`}>
              {detailViews.map((view) => (
                <figure className="project-detail-shot" key={view.label}>
                  <img
                    src={project.image}
                    alt={`${project.title} ${view.label.toLowerCase()} view`}
                    loading="lazy"
                    decoding="async"
                    style={{ objectPosition: view.imagePosition }}
                  />
                  <figcaption>
                    <span className="project-detail-shot-title">{view.label}</span>
                    <span>{view.caption}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

function AboutDisclosure({ isOpen, onToggle }) {
  return (
    <section className={`about-disclosure ${isOpen ? "expanded" : ""}`.trim()} aria-label="About TJ Carino">
      <button
        className="about-disclosure-toggle"
        type="button"
        aria-expanded={isOpen}
        aria-controls="about-disclosure-content"
        onClick={onToggle}
      >
        <span className="about-disclosure-icon" aria-hidden="true">
          {isOpen ? "-" : "+"}
        </span>
        <span>A bit about how I got here</span>
      </button>
      <div
        className="about-disclosure-content"
        id="about-disclosure-content"
        aria-hidden={!isOpen}
      >
        <p>
          I started with practical web builds and grew into production support, where the work is less about novelty and more about keeping live sites dependable.
        </p>
        <p>
          I like the mix of frontend cleanup, WordPress problem solving, and small backend fixes because each task has a visible effect on the people using or maintaining the site.
        </p>
      </div>
    </section>
  );
}

function ContactCard({ link, isCopied, onCopyEmail }) {
  const detail = contactDetails[link.key] || {};
  const label = contactLabels[link.key] || link.tooltip;
  const tooltip = isCopied ? detail.copiedTooltip : detail.tooltip || link.tooltip;

  if (link.key === "email") {
    return (
      <button
        className={`contact-card ${isCopied ? "copied" : ""}`.trim()}
        type="button"
        data-tooltip={tooltip}
        aria-label="Copy email address"
        onClick={() => onCopyEmail(link.href)}
      >
        <span className="contact-card-icon" aria-hidden="true">{detail.icon}</span>
        <span className="contact-card-copy">
          <span>{label}</span>
          <span>{isCopied ? "Copied" : "Copy address"}</span>
        </span>
      </button>
    );
  }

  return (
    <a
      className="contact-card"
      href={link.href}
      target="_blank"
      rel="noreferrer"
      data-tooltip={tooltip}
      aria-label={link.ariaLabel}
    >
      <span className="contact-card-icon" aria-hidden="true">{detail.icon}</span>
      <span className="contact-card-copy">
        <span>{label}</span>
        <span>{tooltip}</span>
      </span>
    </a>
  );
}

function App() {
  const { featured, projects } = projectShowcase;
  const heroMetricsRef = useRef(null);
  const copyResetTimerRef = useRef(null);
  const [activeSection, setActiveSection] = useState("top");
  const [activeProjectFilter, setActiveProjectFilter] = useState("All");
  const [expandedProjectId, setExpandedProjectId] = useState(null);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [copiedContactKey, setCopiedContactKey] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [heroPanelShift, setHeroPanelShift] = useState(0);
  const prefersReducedMotion = usePrefersReducedMotion();
  const metricsAreVisible = useInViewOnce(heroMetricsRef);
  const maintainedSitesCount = useCountUp({
    end: 300,
    isActive: metricsAreVisible,
    prefersReducedMotion
  });
  const projectTagSet = new Set(projects.flatMap((project) => project.tags || []));
  const projectFilters = [
    "All",
    ...preferredProjectFilters.filter((filter) => projectTagSet.has(filter)),
    ...Array.from(projectTagSet)
      .filter((tag) => !preferredProjectFilters.includes(tag))
      .sort()
  ];
  const filteredProjects =
    activeProjectFilter === "All"
      ? projects
      : projects.filter((project) => (project.tags || []).includes(activeProjectFilter));

  useScrollReveals(prefersReducedMotion);

  const toggleProject = (projectId) => {
    setExpandedProjectId((current) => (current === projectId ? null : projectId));
  };

  const copyEmailAddress = async (href) => {
    const emailAddress = href.replace(/^mailto:/, "");

    if (typeof navigator === "undefined" || !navigator.clipboard?.writeText) {
      window.location.href = href;
      return;
    }

    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopiedContactKey("email");

      if (copyResetTimerRef.current) {
        window.clearTimeout(copyResetTimerRef.current);
      }

      copyResetTimerRef.current = window.setTimeout(() => {
        setCopiedContactKey(null);
      }, 1800);
    } catch {
      window.location.href = href;
    }
  };

  useEffect(() => {
    document.title = "TJ Carino | WordPress Developer";
  }, []);

  useEffect(() => () => {
    if (copyResetTimerRef.current) {
      window.clearTimeout(copyResetTimerRef.current);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    let frameId = null;
    const scheduleFrame = window.requestAnimationFrame || ((callback) => window.setTimeout(callback, 16));
    const cancelFrame = window.cancelAnimationFrame || window.clearTimeout;

    const updateScrollState = () => {
      frameId = null;

      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
      setScrollProgress(Math.min(Math.max(nextProgress, 0), 1));

      const nextHeroPanelShift = prefersReducedMotion
        ? 0
        : Math.max(-18, Math.min(0, window.scrollY * -0.035));
      setHeroPanelShift((current) =>
        Math.abs(current - nextHeroPanelShift) < 0.1 ? current : nextHeroPanelShift
      );

      const sectionNodes = trackedSectionIds
        .map((id) => document.getElementById(id))
        .filter(Boolean);

      if (!sectionNodes.length) return;

      const anchorY = Math.min(window.innerHeight * 0.38, 360);
      const currentSection =
        sectionNodes.find((section) => {
          const rect = section.getBoundingClientRect();
          return rect.top <= anchorY && rect.bottom > anchorY;
        }) ||
        [...sectionNodes].reverse().find((section) => section.getBoundingClientRect().top <= anchorY) ||
        sectionNodes[0];

      setActiveSection((current) => (current === currentSection.id ? current : currentSection.id));
    };

    const requestUpdate = () => {
      if (frameId === null) {
        frameId = scheduleFrame(updateScrollState);
      }
    };

    requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frameId !== null) {
        cancelFrame(frameId);
      }
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [prefersReducedMotion]);

  return (
    <div className="app-shell">
      <div className="portfolio-shell">
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <header className="site-header">
          <div className="site-header-progress" aria-hidden="true">
            <span style={{ transform: `scaleX(${scrollProgress})` }} />
          </div>
          <div className="brand-lockup">
            <a
              className={`brand-name ${activeSection === "top" ? "active" : ""}`}
              href="#top"
              onClick={() => setActiveSection("top")}
            >
              TJ Carino
            </a>
            <span className="brand-role">WordPress Developer</span>
          </div>
          <nav className="site-nav" aria-label="Section navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.id}
                  className={isActive ? "active" : undefined}
                  href={`#${item.id}`}
                  aria-current={isActive ? "location" : undefined}
                  onClick={() => setActiveSection(item.id)}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        </header>

        <main id="main-content">
          <AboutDisclosure
            isOpen={isAboutOpen}
            onToggle={() => setIsAboutOpen((current) => !current)}
          />

          <section className="hero-section" id="top">
            <div>
              <p className="section-label">WordPress Developer</p>
              <h1 className="hero-title">Production WordPress work for teams that need sites to stay fast, stable, and easy to maintain.</h1>
              <p className="hero-summary">
                I maintain large batches of live WordPress websites and handle the fixes, cleanup, and frontend work that keep them stable after launch.
              </p>
              <div className="hero-actions">
                <a className="hero-link primary" href="#projects" onClick={() => setActiveSection("projects")}>
                  View projects
                </a>
                <a className="hero-link secondary" href="#experience" onClick={() => setActiveSection("experience")}>
                  See production experience
                </a>
              </div>
            </div>

            <aside
              className={`hero-panel ${metricsAreVisible ? "metrics-visible" : ""}`.trim()}
              aria-label="Production summary"
              ref={heroMetricsRef}
              style={{ "--hero-panel-shift": `${heroPanelShift}px` }}
            >
              <div className="hero-panel-card primary metric-reveal" style={{ "--metric-delay": "0ms" }}>
                <span className="metric-value" aria-label="More than 300 WordPress websites maintained">
                  {maintainedSitesCount}+
                </span>
                <span className="metric-label">WordPress websites maintained in production.</span>
              </div>
              <div className="hero-metric-grid">
                <div className="hero-panel-card metric-reveal" style={{ "--metric-delay": "110ms" }}>
                  <span className="metric-title">Frontend + backend fixes</span>
                  <span className="metric-copy">Layout issues, broken pages, plugin conflicts, forms, and targeted improvements.</span>
                </div>
                <div className="hero-panel-card metric-reveal" style={{ "--metric-delay": "220ms" }}>
                  <span className="metric-title">Practical maintenance</span>
                  <span className="metric-copy">Updates, support work, cleanup, and careful edits on sites that are already live.</span>
                </div>
              </div>
            </aside>
          </section>

          <section className="content-section" id="experience">
            <div className="section-heading reveal-on-scroll">
              <p className="section-label">Experience</p>
              <h2>Real production support, not just portfolio builds.</h2>
              <p>
                The core of the work is keeping WordPress websites healthy after launch through steady fixes, careful updates, and practical improvements.
              </p>
            </div>

            <div className="experience-stack">
              <article className="experience-card primary">
                <div className="experience-meta">
                  <span className="experience-role">Web Developer at Pixel Motion</span>
                  <span className="experience-date">Current Role</span>
                </div>
                <p className="experience-summary">
                  Maintain and improve more than 300 WordPress websites, handling the issues that directly affect content, usability, and trust.
                </p>
                <ul className="detail-list">
                  <li>Deploy plugin, theme, and content changes with production risk in mind.</li>
                  <li>Resolve layout regressions, styling issues, and editor-side page problems.</li>
                  <li>Troubleshoot forms, plugin conflicts, minor PHP issues, and site behavior.</li>
                  <li>Ship maintenance, UI cleanup, and performance improvements without unnecessary complexity.</li>
                </ul>
              </article>

              <div className="experience-support-grid">
                {supportCards.map((card) => (
                  <article className="experience-card" key={card.title}>
                    <span className="support-title">{card.title}</span>
                    <p className="support-copy">{card.copy}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="content-section demo-section" id="demo">
            <div className="section-heading reveal-on-scroll">
              <p className="section-label">Working Demo</p>
              <h2>A small look at how support work gets organized.</h2>
              <p>
                Pick a sample ticket, move it through the queue, and see how practical checks turn messy requests into clear next actions.
              </p>
            </div>

            <SupportTriageDemo />
          </section>

          <section className="content-section projects-section" id="projects">
            <div className="section-heading reveal-on-scroll">
              <p className="section-label">Projects</p>
              <h2>All projects, with deeper proof where it matters.</h2>
              <p>
                The curated public project archive is here, with richer screenshots and case-study notes where there is stronger visual context.
              </p>
            </div>

            <aside className="projects-intro-card">
              <span className="support-title">What to look for</span>
              <p className="support-copy">
                Start with the WordPress build, CabKit3D, ShelterSync, and Job Tracker for the strongest examples; the rest shows range and progression.
              </p>
            </aside>

            <article className="featured-case-study">
              <div className="featured-case-copy">
                <p className="featured-case-label">Featured Case Study</p>
                <div className="project-card-header featured-case-header">
                  <h3 className="featured-case-title">{featured.title}</h3>
                  <span className="project-index">00</span>
                </div>
                <p className="project-description featured-case-description">{featured.description}</p>
                <ul className="detail-list featured-detail-list">
                  {featured.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <div className="featured-stat-grid" aria-label="Featured case study stats">
                  {featured.stats.map((stat) => (
                    <div className="featured-stat" key={stat.label}>
                      <span className="featured-stat-value">{stat.value}</span>
                      <span className="featured-stat-label">{stat.label}</span>
                    </div>
                  ))}
                </div>
                <div className="tech-list featured-tech-list" aria-label="Featured case study technologies">
                  {featured.technologies.map((technology) => (
                    <span className="tech-pill" key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <div className="featured-case-visual" aria-label="Representative website screenshots">
                <BrowserMockup shot={featured.gallery[0]} className="browser-shot-primary" />
                <BrowserMockup shot={featured.gallery[1]} className="browser-shot-float" />
              </div>
            </article>

            <div className="project-filter-panel">
              <div>
                <span className="project-filter-label">Filter by project type</span>
                <p className="project-filter-status" aria-live="polite">
                  Showing {filteredProjects.length} of {projects.length} projects
                </p>
              </div>
              <div className="project-filter-list" role="group" aria-label="Filter projects by work type">
                {projectFilters.map((filter) => {
                  const isActive = activeProjectFilter === filter;

                  return (
                    <button
                      className={`project-filter ${isActive ? "active" : ""}`.trim()}
                      type="button"
                      key={filter}
                      aria-pressed={isActive}
                      onClick={() => {
                        setActiveProjectFilter(filter);
                        setExpandedProjectId(null);
                      }}
                    >
                      {filter}
                    </button>
                  );
                })}
              </div>
            </div>

            {filteredProjects.length > 0 ? (
              <div className="projects-grid">
                {filteredProjects.map((project) => {
                  const projectId = project.slug || project.title.toLowerCase().replace(/\W+/g, "-");

                  return (
                    <ProjectCard
                      project={project}
                      index={projects.findIndex((item) => item === project)}
                      isExpanded={expandedProjectId === projectId}
                      onToggle={toggleProject}
                      key={project.slug || project.title}
                    />
                  );
                })}
              </div>
            ) : (
              <div className="project-empty" role="status">
                No {activeProjectFilter} projects yet. Try another category.
              </div>
            )}
          </section>

          <section className="content-section" id="skills">
            <div className="section-heading reveal-on-scroll">
              <p className="section-label">Skills</p>
              <h2>Practical tools grouped by the work they support.</h2>
              <p>
                Straightforward tools for WordPress maintenance, cleaner frontend work, and stable backend adjustments.
              </p>
            </div>

            <div className="skills-grid">
              {skillGroups.map((group, index) => (
                <article
                  className="skill-card reveal-on-scroll"
                  key={group.title}
                  tabIndex="0"
                  style={{ "--reveal-delay": `${index * 50}ms` }}
                >
                  <div className="skill-card-header">
                    <h3>{group.title}</h3>
                    <span>{group.items.length} skills</span>
                  </div>
                  <ul className="skill-list">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="content-section" id="approach">
            <div className="section-heading reveal-on-scroll">
              <p className="section-label">How I Work</p>
              <h2>Clear priorities when the site is already live.</h2>
              <p>
                Production websites come with constraints. The job is to improve them without creating more maintenance than the site can support.
              </p>
            </div>

            <div className="approach-grid">
              {workingPrinciples.map((principle) => (
                <article className="approach-card" key={principle.title}>
                  <h3>{principle.title}</h3>
                  <p>{principle.copy}</p>
                </article>
              ))}
            </div>
          </section>
        </main>

        <footer className="footer-note">
          <span>Based in Baguio City, Philippines. Focused on dependable WordPress work for live websites.</span>
          <div className="contact-links">
            {socialLinks.map((link) => (
              <ContactCard
                key={link.key}
                link={link}
                isCopied={copiedContactKey === link.key}
                onCopyEmail={copyEmailAddress}
              />
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
