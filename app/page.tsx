const stories = [
  {
    category: "Culture",
    date: "Field Notes · 6 min read",
    title: "The new language of African design",
    excerpt: "A generation of creatives is drawing from local memory while refusing to be confined by it.",
    image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1200&q=85",
    alt: "Contemporary art installation with sculptural forms",
    number: "01"
  },
  {
    category: "Business",
    date: "The Brief · 4 min read",
    title: "Building businesses for the markets we actually have",
    excerpt: "The most interesting ideas may not be imported. They may be hiding in plain sight.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85",
    alt: "Entrepreneurs working together around a table",
    number: "02"
  },
  {
    category: "Perspectives",
    date: "Opinion · 7 min read",
    title: "Beyond the headlines: who gets to tell Africa’s story?",
    excerpt: "Representation is not only about who appears in the frame. It is also about who holds the camera.",
    image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=1000&q=85",
    alt: "A view across an African city",
    number: "03"
  }
];

const briefs = [
  { tag: "Technology", title: "The infrastructure question behind Africa’s digital ambitions", time: "3 min read" },
  { tag: "Society", title: "The city is changing. Are its public spaces keeping up?", time: "5 min read" },
  { tag: "The World", title: "A more complicated relationship with the global stage", time: "4 min read" }
];

function Arrow() {
  return <span aria-hidden="true" className="arrow">↗</span>;
}

export default function Home() {
  return (
    <main>
      <div className="topline">
        <span>Independent perspectives. African context.</span>
        <span className="topline-right">A publication for the curious <i>✳</i></span>
      </div>

      <header className="header">
        <a className="wordmark" href="#" aria-label="The Continent Edit home">
          <span>THE</span>
          <strong>CONTINENT</strong>
          <span className="wordmark-bottom">EDIT <i>—</i> JOURNAL</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#latest">Latest</a>
          <a href="#culture">Culture</a>
          <a href="#business">Business</a>
          <a href="#perspectives">Perspectives</a>
          <a href="#the-world">The World</a>
        </nav>
        <a className="subscribe-link" href="#newsletter">The Sunday Edit <Arrow /></a>
      </header>

      <section className="intro">
        <p className="eyebrow"><span className="eyebrow-line" /> VOL. 01 &nbsp; / &nbsp; THE CONTEMPORARY AFRICAN EDITION</p>
        <div className="intro-row">
          <h1>Africa, <em>in</em><br />perspective<span className="period">.</span></h1>
          <div className="intro-note">
            <span className="note-mark">✳</span>
            <p>An independent journal exploring the people, ideas and shifts shaping a continent — and its place in the world.</p>
            <a href="#about">A little about us <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="lead-story" aria-label="Featured story">
        <div className="lead-image">
          <div className="image-caption">NAIROBI, KENYA &nbsp; / &nbsp; A CONTINENT IN MOTION</div>
        </div>
        <div className="lead-copy">
          <div className="story-meta"><span className="category">THE BIG READ</span><span>01 — 08</span></div>
          <h2>The future is not<br />a place we arrive at.<br /><em>It is one we make.</em></h2>
          <p className="lead-description">Across Africa, a new generation is questioning old assumptions, building new institutions and imagining what comes next.</p>
          <div className="lead-footer">
            <span>IDEAS &amp; SOCIETY &nbsp; · &nbsp; 8 MIN READ</span>
            <a href="#latest" aria-label="Explore the latest stories">EXPLORE THE EDIT <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="latest-section" id="latest">
        <div className="section-heading">
          <div><p className="eyebrow">THE EDITOR&apos;S SELECTION</p><h2>Worth your <em>attention.</em></h2></div>
          <a href="#the-brief" className="text-link">VIEW ALL STORIES <Arrow /></a>
        </div>
        <div className="story-grid">
          {stories.map((story) => (
            <article className="story-card" key={story.number} id={story.category.toLowerCase()}>
              <a className="story-image" href="#the-brief" style={{ backgroundImage: `url("${story.image}")` }} aria-label={story.alt}>
                <span className="story-number">{story.number}</span>
                <span className="image-arrow"><Arrow /></span>
              </a>
              <div className="story-card-meta"><span>{story.category}</span><span>{story.date}</span></div>
              <h3><a href="#the-brief">{story.title}</a></h3>
              <p>{story.excerpt}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="brief-section" id="the-brief">
        <div className="brief-heading">
          <p className="eyebrow">A QUICKER READ</p>
          <h2>The <em>Brief.</em></h2>
          <p>Signals, shifts and stories worth keeping up with.</p>
        </div>
        <div className="brief-list">
          {briefs.map((brief, index) => (
            <a href="#newsletter" className="brief-item" key={brief.title}>
              <span className="brief-index">0{index + 1}</span>
              <span className="brief-content"><span className="category">{brief.tag}</span><strong>{brief.title}</strong></span>
              <span className="brief-time">{brief.time}</span>
              <Arrow />
            </a>
          ))}
        </div>
      </section>

      <section className="manifesto" id="about">
        <div className="manifesto-symbol">✳</div>
        <p className="eyebrow">A NOTE ON OUR POINT OF VIEW</p>
        <h2>Not another story <em>about</em> Africa.<br />A conversation <em>with</em> it.</h2>
        <p className="manifesto-copy">We believe the continent deserves journalism that is curious without being condescending, critical without being cynical, and ambitious without losing sight of the everyday.</p>
        <a href="#newsletter" className="manifesto-link">GET TO KNOW THE EDIT <Arrow /></a>
      </section>

      <section className="newsletter" id="newsletter">
        <div>
          <p className="eyebrow">A LETTER FROM THE CONTINENT</p>
          <h2>The Sunday <em>Edit.</em></h2>
          <p>A considered selection of stories and ideas, delivered when the week slows down.</p>
        </div>
        <form className="newsletter-form" action="mailto:hello@thecontinentedit.com" method="get">
          <label htmlFor="email">YOUR EMAIL ADDRESS</label>
          <div className="email-row"><input id="email" name="subject" type="email" placeholder="you@example.com" required /><button type="submit" aria-label="Subscribe">JOIN <Arrow /></button></div>
          <small>No noise. Just a good read. Newsletter sign-up is a design preview for now.</small>
        </form>
      </section>

      <footer className="footer" id="the-world">
        <a className="footer-wordmark" href="#">THE CONTINENT EDIT<span>®</span></a>
        <p>Independent perspectives. African context.</p>
        <div className="footer-bottom"><span>© 2026 THE CONTINENT EDIT</span><span>MADE WITH CURIOSITY, ON THE CONTINENT.</span><a href="#top">BACK TO TOP ↑</a></div>
      </footer>
    </main>
  );
}