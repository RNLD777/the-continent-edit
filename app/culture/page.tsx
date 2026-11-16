import type { Metadata } from "next";
import SectionPage from "../SectionPage";
import { editorialStories } from "../../lib/stories";
export const metadata: Metadata = { title: "Culture", description: "Design, identity, creativity and the cultural shifts shaping the continent." };
export default function CulturePage() { return <SectionPage title="Culture" sectionLabel="culture" description="Design, identity, creativity and the cultural shifts shaping how the continent sees itself and is seen." stories={editorialStories.filter((story) => story.category === "Culture")} />; }