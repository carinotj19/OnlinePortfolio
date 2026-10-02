import cabkit3D from "./CabKit3D.png";
import stockSage from "./Stock Sage.svg";
import shelterSync from "./shelter_sync.png";

const projects = [
  {
    src: cabkit3D,
    title: "CabKit3D",
    description: "Parametric 3D cabinet configurator with real-time pricing and validation, exploded and turntable views, local presets, deterministic SKU/BOM/GLB exports, shareable URLs, and Playwright/Vitest coverage.",
    tech: ["React", "Vite", "React Three Fiber", "Three.js", "Playwright", "Vitest"],
    repo: "https://github.com/carinotj19/CabKit3D",
    demo: "https://carinotj19.github.io/CabKit3D/"
  },
  {
    src: stockSage,
    title: "Stock Sage",
    description: "Inventory intelligence platform with forecasting and operations workflows, SQLAlchemy/Alembic migrations, reorder recommendations, competitor-price scraping, admin authentication, audit logging, and pytest/Vitest test suites.",
    tech: ["React", "TypeScript", "FastAPI", "PostgreSQL", "SQLAlchemy", "Alembic"],
    repo: "https://github.com/carinotj19/Stock-Sage",
    demo: "https://carinotj19.github.io/Stock-Sage/"
  },
  {
    src: shelterSync,
    title: "ShelterSync",
    description: "MERN pet adoption platform with JWT authentication, multi-role workflows, CRUD/search APIs, GridFS image uploads, validation, rate limiting, and service-layer backend structure.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "GridFS"],
    repo: "https://github.com/carinotj19/ShelterSync",
    demo: "https://carinotj19.github.io/ShelterSync/"
  }
];

export default projects;
