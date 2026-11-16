import Link from "next/link";
import type { EditorialStory } from "../lib/stories";

type Props = {
  title: string;
  description: string;
  stories: EditorialStory[];
  sectionLabel: string;
};

const sections = [
  ["Latest", "/latest"], ["Culture", "/culture"], ["Business", "/business"],
  ["Perspectives", "/perspectives"], ["The World", "/the-world"]
];

export default function SectionPage({ title, description, stories, sectionLabel }: Props) {
  return (
    <main className="section-page">
      <div className="topline"><span>Independent perspectives. African context.</span><span className="topline-right">A publication for the curious <i>✳</i></span></div>
      <header className="section-header">
        <Link className="wordmark" href="/" aria-label="The Continent Edit home"><span>THE</span><strong>CONTINENT</strong><span className="wordmark-bottom">EDIT <i>—</i> JOURNAL</span></Link>
        <nav className="desktop-nav" aria-label="Main navigation">{sections.map(([label, href]) => <Link key={href} href={href} aria-current={href === "/" + sectionLabel ? "page" : undefined}>{label}</Link>)}</nav>
        <Link className="subscribe-link" href="/#newsletter">The Sunday Edit <span className="arrow">↗</span></Link>
      </header>
      <section className="section-intro">
        <p className="eyebrow"><span className="eyebrow-line" /> THE CONTINENT EDIT &nbsp; / &nbsp; {title.toUpperCase()}</p>
        <h1>{title === "The World" ? <>Africa &amp; <em>the world.</em></> : <>{title}<span className="period">.</span></>}</h1>
        <p>{description}</p>
        <div className="section-intro-bottom"><span>{stories.length.toString().padStart(2, "0")} STORIES IN THIS EDITION</span><span>VOL. 01 / THE CONTEMPORARY AFRICAN EDITION</span></div>
      </section>
      {stories.length ? <section className="section-archive">
        <div className="archive-heading"><p className="eyebrow">READ THE EDIT</p><span>SELECTED STORIES &amp; IDEAS</span></div>
        <div className="archive-grid">{stories.map((story, index) => <article className="archive-card" key={story.slug}>
          <Link className={"archive-image" + (story.image ? "" : " no-image")} href={"/stories/" + story.slug} style={story.image ? { backgroundImage: "url('" + story.image + "')" } : undefined}>
            <span className="story-number">{(index + 1).toString().padStart(2, "0")}</span><span className="image-arrow"><span className="arrow">↗</span></span>
          </Link>
          <div className="story-card-meta"><span>{story.category}</span><span>{story.label} · {story.readTime}</span></div>
          <h2><Link href={"/stories/" + story.slug}>{story.title}</Link></h2>
          <p>{story.excerpt}</p>
          <Link className="archive-read" href={"/stories/" + story.slug}>READ STORY <span className="arrow">↗</span></Link>
        </article>)}</div>
      </section> : <section className="section-empty"><h2>More stories are on the way.</h2><p>This section will grow as new reporting and perspectives are published.</p></section>}
      <section className="section-more"><p className="eyebrow">KEEP EXPLORING</p><div>{sections.filter(([label]) => label !== title).map(([label, href]) => <Link href={href} key={href}>{label} <span className="arrow">↗</span></Link>)}</div></section>
      <footer className="footer"><Link className="footer-wordmark" href="/">THE CONTINENT EDIT<span>®</span></Link><p>Independent perspectives. African context.</p><div className="footer-bottom"><span>© 2026 THE CONTINENT EDIT</span><span>MADE WITH CURIOSITY, ON THE CONTINENT.</span><Link href="/">BACK TO HOME ↑</Link></div></footer>
    </main>
  );
}
