import type { Metadata } from "next";
import SectionPage from "../SectionPage";
import { editorialStories } from "../../lib/stories";
export const metadata: Metadata = { title: "Perspectives", description: "Opinion, analysis and arguments that challenge easy narratives." };
export default function PerspectivesPage() { return <SectionPage title="Perspectives" sectionLabel="perspectives" description="Opinion and analysis that question familiar narratives, challenge assumptions and make room for more than one point of view." stories={editorialStories.filter((story) => story.category === "Perspectives" || story.category === "Ideas & Society" || story.category === "Society")} />; }