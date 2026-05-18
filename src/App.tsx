function App() {
  return (
    <div className="app-shell">
      <header className="hero">
        <div>
          <p className="eyebrow">Portfolio</p>
          <h1>Hi, I’m [Your Name]</h1>
          <p className="hero-copy">
            I build digital experiences with clean design, engaging interactions,
            and thoughtful storytelling.
          </p>
        </div>
        <nav className="top-nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="about" className="section card">
          <h2>About</h2>
          <p>
            I’m a developer who enjoys turning ideas into polished websites and
            apps. I focus on user-friendly interfaces, responsive layouts, and
            modern front-end tooling.
          </p>
        </section>

        <section id="projects" className="section card">
          <h2>Projects</h2>
          <div className="grid">
            <article>
              <h3>Project One</h3>
              <p>Feature-rich landing page with interactive animations.</p>
            </article>
            <article>
              <h3>Project Two</h3>
              <p>Responsive app dashboard built with React and TypeScript.</p>
            </article>
            <article>
              <h3>Project Three</h3>
              <p>Personal blog platform with content management and SEO-ready design.</p>
            </article>
          </div>
        </section>

        <section id="blog" className="section card">
          <h2>Blog</h2>
          <div className="blog-list">
            <article>
              <h3>Designing Accessible Interfaces</h3>
              <p>Best practices for color, typography, and keyboard navigation.</p>
            </article>
            <article>
              <h3>React Patterns for Portfolios</h3>
              <p>How to structure components for maintainability and reuse.</p>
            </article>
          </div>
        </section>

        <section id="contact" className="section card contact-card">
          <h2>Contact</h2>
          <p>
            Interested in working together? Send me a message and let’s discuss
            your next project.
          </p>
          <a className="button" href="mailto:hello@example.com">Email Me</a>
        </section>
      </main>
    </div>
  );
}

export default App;
