import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { editorialStories, getEditorialStory } from "../../../lib/stories";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return editorialStories.map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const story = getEditorialStory(slug);
  if (!story) return { title: "Story not found" };
  return {
    title: story.title,
    description: story.excerpt,
    openGraph: { title: story.title, description: story.excerpt, type: "article" }
  };
}

export default async function StoryPage({ params }: Props) {
  const { slug } = await params;
  const story = getEditorialStory(slug);
  if (!story) notFound();

  return (
    <main className="article-page" id="top">
      <header className="article-header">
        <Link className="article-wordmark" href="/">THE CONTINENT EDIT<span> / JOURNAL</span></Link>
        <Link className="article-back" href="/#latest">BACK TO THE EDIT ↗</Link>
      </header>
      <article className="article">
        <p className="eyebrow">{story.category} &nbsp; / &nbsp; {story.label}</p>
        <h1>{story.title}</h1>
        <p className="article-deck">{story.excerpt}</p>
        <div className="article-meta"><span>THE CONTINENT EDIT</span><span>{story.readTime}</span></div>
        {story.image && <figure className="article-figure"><img src={story.image} alt={story.alt ?? ""} /><figcaption>{story.alt}</figcaption></figure>}
        <div className="article-body">
          {story.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        </div>
        <div className="article-end">
          <span>END OF THIS EDITION</span>
          <Link href="/#latest">DISCOVER MORE STORIES ↗</Link>
        </div>
      </article>
      <footer className="article-footer"><Link href="/">THE CONTINENT EDIT</Link><a href="#top">BACK TO TOP ↑</a></footer>
    </main>
  );
}
