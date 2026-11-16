import RotatingLeadImage from "./RotatingLeadImage";
import { editorialStories } from "../lib/stories";

const stories = editorialStories.filter((story) =>
  ["the-new-language-of-african-design", "building-businesses-for-the-markets-we-have", "who-gets-to-tell-africas-story"].includes(story.slug)
);
const briefs = editorialStories.filter((story) =>
  ["the-infrastructure-question", "the-city-and-its-public-spaces", "a-complicated-global-relationship"].includes(story.slug)
);
const leadStory = editorialStories.find((story) => story.slug === "the-future-is-one-we-make")!;
}