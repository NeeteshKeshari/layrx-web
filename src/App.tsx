import { Navbar } from './components/Navbar.js';
import { Hero } from './components/Hero.js';
import { WhyLayrX } from './components/WhyLayrX.js';
import { Architecture } from './components/Architecture.js';
import { Features } from './components/Features.js';
import { Demo } from './components/Demo.js';
import { Installation } from './components/Installation.js';
import { Documentation } from './components/Documentation.js';
import { GitHubSection } from './components/GitHubSection.js';
import { Footer } from './components/Footer.js';

export function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyLayrX />
        <Architecture />
        <Features />
        <Demo />
        <Installation />
        <Documentation />
        <GitHubSection />
      </main>
      <Footer />
    </>
  );
}
