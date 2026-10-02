import React from "react";
import "./Profile.css";

const roles = [
  {
    title: "Frontend Developer",
    company: "Pixel Motion",
    period: "Apr 2024 - Present",
    location: "Costa Mesa, CA (Remote)",
    bullets: [
      "Ship responsive pages and maintain production web experiences across 300+ WordPress client sites using HTML, CSS, JavaScript, jQuery, ACF, and Figma-to-code workflows.",
      "Resolve high-volume production issues involving layout, responsiveness, CMS configuration, plugin conflicts, and browser inconsistencies using DevTools and structured debugging.",
      "Build reusable ACF-powered content structures and UI patterns that speed recurring page builds while keeping client sites maintainable."
    ]
  },
  {
    title: "Junior Software Developer",
    company: "Atis Software",
    period: "Dec 2022 - Dec 2023",
    location: "Amsterdam, Netherlands (Remote)",
    bullets: [
      "Designed and shipped a production web platform using React and Strapi, with dynamic frontend features backed by REST APIs and structured CMS content models.",
      "Managed VPS deployment with CapRover and Docker, including containerized builds and reverse proxy configuration for stable releases.",
      "Integrated AWS S3 for file storage and AWS SES for transactional email, supporting the application from feature delivery through production troubleshooting."
    ]
  },
  {
    title: "WordPress Developer",
    company: "CriminTech",
    period: "Mar 2020 - Nov 2021",
    location: "Baguio City, Philippines",
    bullets: [
      "Developed a responsive WordPress e-learning platform supporting courses, quizzes, student progress tracking, and remote criminology education workflows.",
      "Customized themes and integrated third-party services for video delivery, document sharing, and grading across desktop and mobile."
    ]
  }
];

function Experience() {
  return (
    <div className="profile-section">
      <div className="profile-scroll-area">
        <div className="profile-container">
          <p className="profile-eyebrow">Professional Experience</p>
          <h1 className="profile-title">Building and supporting production web experiences.</h1>
          <p className="profile-lead">
            Frontend delivery, CMS platforms, API-backed applications, deployment, and production debugging across remote teams.
          </p>

          <div className="experience-list">
            {roles.map((role) => (
              <article className="experience-card" key={`${role.company}-${role.title}`}>
                <div className="experience-heading">
                  <div>
                    <h2>{role.title}</h2>
                    <p className="experience-company">{role.company}</p>
                  </div>
                  <div className="experience-meta">
                    <span>{role.period}</span>
                    <span>{role.location}</span>
                  </div>
                </div>
                <ul>
                  {role.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
