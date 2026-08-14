# Portfolio

Personal portfolio site for Taher Merchant, built with Next.js, Tailwind CSS,
shadcn/ui, and Magic UI.

## Getting Started Locally

1. Clone this repository to your local machine:

   ```bash
   git clone git@github.com:TaherMerchant25/Portfolio.git
   ```

2. Move to the cloned directory

   ```bash
   cd Portfolio
   ```

3. Install dependencies:

   ```bash
   pnpm install
   ```

4. Start the local Server:

   ```bash
   pnpm dev
   ```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Editing the content

Everything on the page comes from a single file: `src/data/resume.tsx`. It
exports one `DATA` object holding the hero text, about summary, skills, work
experience, education, projects, publications, achievements, and volunteering.
Sections are laid out in `src/app/page.tsx`.

Images referenced by `DATA` (logos, avatar, project covers) live in `public/`.
The site ships no remote images, and Inter is self-hosted from
`src/app/fonts/`, so builds do not depend on any external host.

## Credits

Built on the [Magic UI Design Portfolio](https://github.com/magicuidesign/portfolio)
template by Dillion Verma, used under the MIT license (see `LICENSE`).
