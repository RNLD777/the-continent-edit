import type { Metadata } from "next";
import SectionPage from "../SectionPage";
import { editorialStories } from "../../lib/stories";
export const metadata: Metadata = { title: "The World", description: "Africa's relationships, influence and place in a changing world." };
export default function TheWorldPage() { return <SectionPage title="The World" sectionLabel="the-world" description="Africa's relationships, influence and place in a changing world — told with context, nuance and attention to the forces beyond borders." stories={editorialStories.filter((story) => story.category === "The World" || story.category === "Technology")} />; }