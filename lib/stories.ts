export type EditorialStory = {
  slug: string;
  category: string;
  label: string;
  readTime: string;
  title: string;
  excerpt: string;
  image?: string;
  alt?: string;
  paragraphs: string[];
};

export const editorialStories: EditorialStory[] = [
  {
    slug: "the-future-is-one-we-make",
    category: "Ideas & Society",
    label: "The Big Read",
    readTime: "8 min read",
    title: "The future is not a place we arrive at. It is one we make.",
    excerpt: "A reflection on agency, imagination and the everyday work of shaping what comes next.",
    image: "https://images.unsplash.com/photo-1656068218535-85db26125e13?auto=format&fit=crop&w=1800&q=85",
    alt: "A view across a busy African city",
    paragraphs: [
      "The future is often discussed as if it were somewhere ahead of us: a destination waiting for the right technology, the right leader or the right investment. That framing can make ordinary people spectators in a story they are already writing.",
      "Across the continent, the work of making tomorrow is less abstract. It happens in workshops, classrooms, studios, farms, neighbourhood businesses and public spaces. It is visible in the decisions people make with the resources they have, and in the institutions they are trying to improve.",
      "None of this means that optimism should replace scrutiny. Progress is uneven. Infrastructure, opportunity and power remain unequally distributed. A serious conversation about possibility must be honest about the obstacles as well as the people finding ways through them.",
      "The useful question is not whether Africa has a future. It is who gets to shape it, whose ideas are taken seriously, and how the choices being made today will be judged by the people who live with their consequences.",
      "This is the point of view behind The Continent Edit: to pay attention to the people doing the work, question easy narratives and make room for a more complicated, more human account of the continent."
    ]
  },
  {
    slug: "the-new-language-of-african-design",
    category: "Culture",
    label: "Field Notes",
    readTime: "6 min read",
    title: "The new language of African design",
    excerpt: "A generation of creatives is drawing from local memory while refusing to be confined by it.",
    image: "https://images.unsplash.com/photo-1773864931052-ea56474bcc84?auto=format&fit=crop&w=1200&q=85",
    alt: "Contemporary art installation with sculptural forms",
    paragraphs: [
      "Design is never only about how something looks. It carries choices about materials, memory, use and the people a product is made to serve. Across African creative scenes, those choices are becoming part of a wider conversation about identity and possibility.",
      "For some makers, local references are a starting point: a textile technique, a familiar shape, a material found nearby or an object remembered from childhood. For others, the work begins with a problem of function, access or cost. The strongest work often allows these concerns to meet.",
      "There is a risk in treating African design as one recognisable aesthetic. The continent is not a single mood board. Its creative languages are varied, contested and constantly changing. A richer view makes room for regional differences and for artists who do not want their work reduced to a label.",
      "The question worth asking is not whether a design looks African enough. It is whether it is thoughtful, useful, distinctive and connected to the world in which it exists."
    ]
  },
  {
    slug: "building-businesses-for-the-markets-we-have",
    category: "Business",
    label: "The Brief",
    readTime: "4 min read",
    title: "Building businesses for the markets we actually have",
    excerpt: "The most interesting ideas may not be imported. They may be hiding in plain sight.",
    image: "https://images.unsplash.com/photo-1770283556599-9ce7898ffbd1?auto=format&fit=crop&w=1000&q=85",
    alt: "Entrepreneurs working together around a table",
    paragraphs: [
      "Business advice often travels as a package. A model that worked in one market is presented as a universal formula, even when customer habits, infrastructure, purchasing power and distribution look very different elsewhere.",
      "Building for the market that exists begins with listening. What do customers already spend money on? Which frustrations have become normal? Where do people improvise because a service is missing or unreliable?",
      "This approach is not an argument against ambition or scale. It is a reminder that durable businesses solve real problems for identifiable customers. A clever pitch cannot substitute for a working product, reliable delivery and trust.",
      "The opportunity is to take local context seriously without assuming that local solutions must remain small. Understanding a market deeply can be the first step towards building something that travels."
    ]
  },
  {
    slug: "who-gets-to-tell-africas-story",
    category: "Perspectives",
    label: "Opinion",
    readTime: "7 min read",
    title: "Beyond the headlines: who gets to tell Africa’s story?",
    excerpt: "Representation is not only about who appears in the frame. It is also about who holds the camera.",
    image: "https://images.unsplash.com/photo-1656068218535-85db26125e13?auto=format&fit=crop&w=1000&q=85",
    alt: "A view across an African city",
    paragraphs: [
      "A story can include African faces and still leave African perspectives at the margins. Representation is not simply a matter of visibility; it is also about authorship, editorial power, context and whose questions shape the final account.",
      "Outside coverage can bring valuable attention and resources. The problem begins when distance is mistaken for neutrality, or when complex societies are repeatedly explained through a narrow set of familiar frames.",
      "Local journalism is not automatically free of blind spots. It deserves scrutiny too: whose voices are missing, which interests are protected and what evidence supports the reporting? The answer is not to replace one unquestioned authority with another.",
      "A healthier media landscape makes room for many vantage points and expects all of them to do the work: verify claims, explain context, correct errors and listen beyond the most powerful voices."
    ]
  },
  {
    slug: "the-infrastructure-question",
    category: "Technology",
    label: "The Brief",
    readTime: "3 min read",
    title: "The infrastructure question behind Africa’s digital ambitions",
    excerpt: "Digital opportunity depends on the less glamorous systems that make access reliable.",
    paragraphs: [
      "Digital ambition is often measured in apps, platforms and funding announcements. But the experience of using technology still depends on basics: dependable electricity, affordable connectivity, devices, skills and systems people can trust.",
      "These foundations are not separate from innovation. They determine who can participate, which businesses can grow and whether a promising service remains useful outside a small group of early adopters.",
      "A serious technology conversation therefore has to look beyond launches. It must ask who can access a service consistently, what it costs to use and what happens when the network or power supply fails."
    ]
  },
  {
    slug: "the-city-and-its-public-spaces",
    category: "Society",
    label: "The Brief",
    readTime: "5 min read",
    title: "The city is changing. Are its public spaces keeping up?",
    excerpt: "Public space shapes who feels welcome, safe and able to take part in city life.",
    paragraphs: [
      "A city is experienced not only through its buildings and roads, but through the spaces people can share. Parks, pavements, markets, libraries and public squares influence how people meet, move and participate in civic life.",
      "When these spaces are neglected or difficult to access, the cost is not distributed equally. Children, older people, people with disabilities, informal traders and commuters can experience the same street in very different ways.",
      "Planning for public life means treating access, maintenance, safety and shade as essential questions rather than decorative extras. The measure of a public space is not only how it looks in a rendering, but how well it works on an ordinary day."
    ]
  },
  {
    slug: "a-complicated-global-relationship",
    category: "The World",
    label: "The Brief",
    readTime: "4 min read",
    title: "A more complicated relationship with the global stage",
    excerpt: "The continent's place in global affairs cannot be reduced to a single position or voice.",
    paragraphs: [
      "There is no single African position on the world. Countries, communities and institutions approach global questions through different histories, interests and priorities.",
      "That diversity can make collective action difficult, but it also makes simplistic accounts misleading. Trade, climate, security, migration and technology affect places differently, and the choices made in response are rarely uniform.",
      "Understanding the continent's global relationships requires attention to both shared interests and real disagreements. It also means taking African governments, researchers, businesses and civil society seriously as participants in shaping international debates."
    ]
  }
];

export function getEditorialStory(slug: string) {
  return editorialStories.find((story) => story.slug === slug);
}
