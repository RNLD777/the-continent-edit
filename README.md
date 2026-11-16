# The Continent Edit

An independent editorial publication concept exploring the people, ideas and shifts shaping contemporary Africa.

**Editorial line:** Africa, in perspective.

## Stack
- Next.js App Router with static export
- React
- TypeScript
- Custom responsive CSS

## Current experience
- Responsive editorial homepage with masthead, lead feature, editor's selection, short-form brief and publication statement.
- Eight individual editorial story pages with direct URLs, page metadata, and links back to the homepage.
- Homepage navigation anchors for Latest, Culture, Business, Perspectives and The World.
- Lead feature, story cards and brief headlines open their corresponding article pages.
- Reduced-motion support for the rotating lead image.
- Newsletter area clearly marked as coming soon; it does not collect or send email addresses.

## Local development
```bash
npm install
npm run dev
```

## Deployment
The project is connected to Cloudflare Pages (`the-continent-edit.pages.dev`) from the `main` branch. It uses Next.js static export (`out`).

## Not connected yet
- Newsletter provider or subscriber storage.
- CMS, editorial publishing workflow, search, analytics or social-sharing integrations.
- Category archive pages; the current category navigation jumps to the relevant homepage selection.
- Production editorial verification and image licensing.

The articles and imagery are demonstration content for this portfolio project. They should be fact-checked, edited and appropriately licensed before being presented as live journalism.
