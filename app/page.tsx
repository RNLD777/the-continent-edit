import RotatingLeadImage from "./RotatingLeadImage";
import { editorialStories } from "../lib/stories";

const stories = editorialStories.filter((story) =>
  ["the-new-language-of-african-design", "building-businesses-for-the-markets-we-have", "who-gets-to-tell-africas-story"].includes(story.slug)
);
const briefs = editorialStories.filter((story) =>
  ["the-infrastructure-question", "the-city-and-its-public-spaces", "a-complicated-global-relationship"].includes(story.slug)
);
const leadStory = editorialStories.find((story) => story.slug === "the-future-is-one-we-make")!;

function Arrow() {
  return <span aria-hidden="true" className="arrow">↗</span>;
}

export default function Home() {
  return (
    <main id="top">
      <div className="topline">
        <span>Independent perspectives. African context.</span>
        <span className="topline-right">A publication for the curious <i>✳</i></span>
      </div>

      <header className="header">
        <a className="wordmark" href="#top" aria-label="The Continent Edit home">
          <span>THE</span>
          <strong>CONTINENT</strong>
          <span className="wordmark-bottom">EDIT <i>—</i> JOURNAL</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="/latest">Latest</a>
          <a href="/culture">Culture</a>
          <a href="/business">Business</a>
          <a href="/perspectives">Perspectives</a>
          <a href="/the-world">The World</a>
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
        <RotatingLeadImage />
        <div className="lead-copy">
          <div className="story-meta"><span className="category">THE BIG READ</span><span>01 — 08</span></div>
          <h2>The future is not<br />a place we arrive at.<br /><em>It is one we make.</em></h2>
          <p className="lead-description">Across Africa, a new generation is questioning old assumptions, building new institutions and imagining what comes next.</p>
          <div className="lead-footer">
            <span>IDEAS &amp; SOCIETY &nbsp; · &nbsp; 8 MIN READ</span>
            <a href={`/stories/${leadStory.slug}`}>READ THE BIG READ <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="latest-section" id="latest">
        <div className="section-heading">
          <div><p className="eyebrow">THE EDITOR&apos;S SELECTION</p><h2>Worth your <em>attention.</em></h2></div>
          <a href="/latest" className="text-link">VIEW ALL STORIES <Arrow /></a>
        </div>
        <div className="story-grid">
          {stories.map((story) => (
            <article className="story-card" key={story.slug}>
              <a className="story-image" href={`/stories/${story.slug}`} style={{ backgroundImage: `url("${story.image}")` }} aria-label={`Read: ${story.title}`}>
                <span className="story-number">{story.slug === "the-new-language-of-african-design" ? "01" : story.slug === "building-businesses-for-the-markets-we-have" ? "02" : "03"}</span>
                <span className="image-arrow"><Arrow /></span>
              </a>
              <div className="story-card-meta"><span>{story.category}</span><span>{story.label} · {story.readTime}</span></div>
              <h3><a href={`/stories/${story.slug}`}>{story.title}</a></h3>
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
            <a href={`/stories/${brief.slug}`} className="brief-item" key={brief.slug}>
              <span className="brief-index">0{index + 1}</span>
              <span className="brief-content"><span className="category">{brief.category}</span><strong>{brief.title}</strong></span>
              <span className="brief-time">{brief.readTime}</span>
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
        <div className="newsletter-form">
          <label htmlFor="email">NEWSLETTER STATUS</label>
          <div className="email-row"><input id="email" type="email" placeholder="Sign-up is not open yet" disabled /><button type="button" disabled aria-label="Newsletter coming soon">COMING SOON</button></div>
          <small>No email is collected or sent yet. Newsletter subscriptions will open when a mailing service is connected.</small>
        </div>
      </section>

      <footer className="footer">
        <a className="footer-wordmark" href="#top">THE CONTINENT EDIT<span>®</span></a>
        <p>Independent perspectives. African context.</p>
        <div className="footer-bottom"><span>© 2026 THE CONTINENT EDIT</span><span>MADE WITH CURIOSITY, ON THE CONTINENT.</span><a href="#top">BACK TO TOP ↑</a></div>
      </footer>
    </main>
  );
}
