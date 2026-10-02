import React from "react";
import "./Profile.css";
import ProfileSection from "./ProfileSection";

const skillGroups = [
  {
    label: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "Python", "PHP", "HTML5", "CSS3", "SQL"]
  },
  {
    label: "Frontend",
    items: ["React", "Vite", "Three.js / React Three Fiber", "jQuery", "Tailwind CSS", "Responsive UI", "Figma-to-code"]
  },
  {
    label: "Backend / CMS",
    items: ["Node.js", "Express", "FastAPI", "Strapi", "WordPress / ACF", "REST APIs", "PostgreSQL", "MongoDB", "MySQL", "SQLAlchemy", "Alembic"]
  },
  {
    label: "Testing / Delivery",
    items: ["Playwright", "Vitest", "pytest", "Jest / Supertest", "Docker", "CapRover", "AWS S3 / SES", "Git / GitHub", "VPS deployment", "CI/CD basics"]
  }
];

function Skills() {
  return (
    <ProfileSection>
      <div className="profile-container">
        <p className="profile-eyebrow">Skills & Education</p>
        <h1 className="profile-title">A web stack that spans UI, APIs, data, testing, and delivery.</h1>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <section className="skill-card" key={group.label}>
              <h2>{group.label}</h2>
              <div className="skill-tags">
                {group.items.map((item) => (
                  <span className="skill-tag" key={item}>{item}</span>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="education-card">
          <p className="profile-eyebrow">Education</p>
          <h2>B.S. in Computer Science</h2>
          <p>University of the Cordilleras · Baguio City</p>
          <p className="education-meta">Graduated Aug 2025</p>
        </section>
      </div>
    </ProfileSection>
  );
}

export default Skills;
