# TJ's Online Portfolio

A modern, responsive online portfolio showcasing my projects, certificates, and experience as a Software Developer.

## Features

- Full-page scrolling interface
- Project showcase with image carousel
- Certificates display
- Social media links with tooltips
- Responsive design for all devices
- Light/Dark theme with system preference + toggle

## Technologies Used

- React 18
- React Page Scroller for fullpage scrolling
- Slick JS for image carousels
- FontAwesome for icons
- GitHub Pages for deployment

## Project Structure

```
src/
├── assets/           # Images and static resources
├── components/       # React components
│   ├── Header/       # Header section with personal info
│   ├── Certificates/ # Certificates display
│   ├── Projects/     # Projects showcase
│   ├── Layout/       # Layout components
│   ├── Scroll/       # Scroll indicator
│   └── UI/           # Reusable UI components
├── App.js            # Main application component
└── index.js          # Entry point
```

## Setup and Installation

1. Clone the repository:
   ```
   git clone https://github.com/carinotj19/OnlinePortfolio.git
   cd OnlinePortfolio
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the development server:
   ```
   npm run dev
   ```
   or
   ```
   npm start
   ```

4. Open [http://localhost:3000/OnlinePortfolio](http://localhost:3000/OnlinePortfolio) to view it in your browser.

## Available Scripts

- `npm start` or `npm run dev` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm run deploy` - Deploys the app to GitHub Pages
- `npm run update-browserslist` - Updates the browserslist database
- `npm run audit-fix` - Runs npm audit fix to address vulnerabilities
- `npm run optimize-images` - Converts images to WebP and optimizes originals (requires dev dep `sharp`)

## Deployment

This portfolio is configured for deployment to GitHub Pages. To deploy:

```
npm run deploy
```

## License

This project is open source and available under the MIT License.
