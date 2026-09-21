# Haven Word Church — The Spread City

The website for Haven Word Church (havenwordchurch.com). Built with Vite, React, TypeScript and Tailwind CSS, and deployed on Vercel.

## Run it on your computer

```bash
npm install --legacy-peer-deps   # first time only
npm run dev                      # then open http://localhost:8080
```

Videos on the Messages page come from YouTube. For them to load locally, create a `.env` file in this folder (copy `.env.example`) with the YouTube API key and the channel's uploads playlist ID. On Vercel the same values are set under Project Settings → Environment Variables.

Other commands: `npm run build` (production build), `npm run lint`.

## Updating events

All events live in one file: `src/data/events.ts`.

- **Add an event:** copy one of the blocks and change the text. Put the flier in `public/pictures/events_page _fliers/` and point `image` at it.
- **Remove an event:** delete its block.
- **`endsOn`** is the last day of the event (`YYYY-MM-DD`). The day after, the event disappears from the site by itself, and the next event takes over the "Up Next" card on the home page.

Weekly services (and their fliers) are at the top of `src/components/ServicesSection.tsx`. Branches are in `src/pages/Locations.tsx`. Bank accounts are at the top of `src/pages/Giving.tsx`.

## Where things are

| What | Where |
| --- | --- |
| Pages | `src/pages/` |
| Home page sections | `src/components/` (`Hero`, `WelcomeSection`, `ServicesSection`, …) |
| Intro animation | `src/components/IntroAnimation.tsx` (plays once per visit, has a Skip button) |
| Scroll animations (every page) | `src/components/ScrollReveal.tsx` |
| Colours, blue/orange section bands | `src/index.css` (`band-blue`, `band-orange`) |
| YouTube | `src/services/youtube.ts` |
| Pictures | `public/pictures/` |

## Screenshots

<img width="949" height="445" alt="Image" src="https://github.com/user-attachments/assets/e70a8447-3a8e-4838-8dde-f1ab0cbc8c85" />

<img width="948" height="430" alt="Image" src="https://github.com/user-attachments/assets/d64ee7b1-549f-440c-a4ac-43b123ad6c26" />

<img width="951" height="442" alt="Image" src="https://github.com/user-attachments/assets/76a03320-a063-471b-ae56-6bf26c41ef06" />

<img width="949" height="427" alt="Image" src="https://github.com/user-attachments/assets/f3c59d77-f232-4882-b1b9-f572183b119f" />

<img width="950" height="444" alt="Image" src="https://github.com/user-attachments/assets/5cf30612-540c-4205-ada2-6ca4ff36069b" />

<img width="941" height="437" alt="Image" src="https://github.com/user-attachments/assets/5a65b9a4-ab81-43b3-a2fc-305752135dca" />

<img width="945" height="434" alt="Image" src="https://github.com/user-attachments/assets/8cb6e3b9-ba1d-4e25-854c-6093d1f1dcfd" />

<img width="944" height="441" alt="Image" src="https://github.com/user-attachments/assets/41359c90-7732-4adf-8f12-daf1d85beafd" />

<img width="948" height="442" alt="Image" src="https://github.com/user-attachments/assets/9f5dd4f4-97d6-4d6d-829c-b925acdb61bc" />

<img width="935" height="442" alt="Image" src="https://github.com/user-attachments/assets/13388b1b-e1f4-4c7d-aedb-19594c6029d3" />

<img width="936" height="440" alt="Image" src="https://github.com/user-attachments/assets/8f96d84c-cdbb-442c-9bb6-74a1bef846e3" />
