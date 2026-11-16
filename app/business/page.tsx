import type { Metadata } from "next";
import SectionPage from "../SectionPage";
import { editorialStories } from "../../lib/stories";
export const metadata: Metadata = { title: "Business", description: "Ideas, enterprise and the changing realities of African markets." };
export default function BusinessPage() { return <SectionPage title="Business" sectionLabel="business" description="Enterprise, markets and the people building businesses around the realities and opportunities of the continent." stories={editorialStories.filter((story) => story.category === "Business")} />; }