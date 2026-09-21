// All event details for the site live here.
// - To add an event: copy one of the blocks below and change the text.
// - To remove an event: delete its block.
// - Fliers go in public/pictures/events_page _fliers/ and are referenced by `image`.
// - `date` is the text visitors read. `endsOn` (YYYY-MM-DD) is the last day of the event: the day
//   after it, the event drops off the site by itself and the next one takes over the "Up Next"
//   card on the home page. For an event with only a month so far, use the last day of that month.

export interface ChurchEvent {
  title: string;
  date: string;
  endsOn?: string;
  time?: string;
  location?: string;
  description: string;
  image?: string;
}

const FLIERS = "/pictures/events_page _fliers";

const allEvents: ChurchEvent[] = [
  {
    title: "Night of Miracles",
    date: "30th October, 2026",
    endsOn: "2026-10-30",
    time: "8PM till Dawn",
    location: "Haven Word Church Auditorium, Opposite Gate 5, Adamasingba Stadium, Ibadan",
    description:
      "An all-night meeting with Pastor Anthonia Amadi. A night of worship, the Word and prayer, believing God for the miraculous. Come expectant, and bring someone with you.",
    image: `${FLIERS}/night_of_miracles.jpg`,
  },
  {
    title: "Soul Winners Conference",
    date: "December, 2026",
    endsOn: "2026-12-31",
    time: "Once a Year",
    description: "A transformative camp that holds once a year, equipping believers to win souls for Christ.",
    image: `${FLIERS}/496947425_9802487696509088_2913698270647924602_n.jpg`,
  },
  {
    title: "Church Anniversary",
    date: "March, 2027",
    endsOn: "2027-03-31",
    time: "Once a Year",
    description: "Join us as we celebrate another year of God’s grace, growth, and transformation.",
    image: `${FLIERS}/anniversary_flier.jpg`,
  },
  {
    title: "Burning Heart Summit",
    date: "April, 2027",
    endsOn: "2027-04-30",
    time: "Once a Year",
    description: "A powerful retreat that holds once a year for spiritual renewal and transformation.",
    image: `${FLIERS}/burning heart submit.jpg`,
  },
  {
    title: "Daily with Jesus",
    date: "June, 2027",
    endsOn: "2027-06-30",
    time: "Once a Year",
    description: "Join us daily for prayer, worship, and fellowship with Jesus.",
    image: `${FLIERS}/daily_with_jesus_banner.jpg`,
  },
];

// Today's date in the visitor's own timezone, as YYYY-MM-DD so it compares directly with `endsOn`
const today = () => {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${now.getFullYear()}-${month}-${day}`;
};

// Events that have not finished yet, soonest first. Events without `endsOn` never expire and go last.
export const getUpcomingEvents = (): ChurchEvent[] => {
  const now = today();
  return allEvents
    .filter((event) => !event.endsOn || event.endsOn >= now)
    .sort((a, b) => (a.endsOn ?? "9999").localeCompare(b.endsOn ?? "9999"));
};

// The event pinned to the home page hero
export const getNextEvent = (): ChurchEvent | undefined => getUpcomingEvents()[0];
