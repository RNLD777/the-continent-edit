import type { Metadata } from "next";
import SectionPage from "../SectionPage";
import { editorialStories } from "../../lib/stories";
export const metadata: Metadata = { title: "Latest Stories", description: "The latest stories, ideas and perspectives from The Continent Edit." };
export default function LatestPage() { return <SectionPage title="Latest" sectionLabel="latest" description="The latest reporting, ideas and perspectives shaping the contemporary African conversation." stories={[...editorialStories].reverse()} />; }