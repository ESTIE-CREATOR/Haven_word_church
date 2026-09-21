// How fast the intro and hero entrance play: 1 is normal speed, lower is slower.
// On a phone everything is smaller and closer together, so the same timings read as rushed;
// phones therefore play them noticeably slower. Change PHONE_SPEED to tune it.
const PHONE_SPEED = 0.6;

export const entranceSpeed = () => {
  if (typeof window === "undefined") return 1;
  return window.matchMedia("(max-width: 640px)").matches ? PHONE_SPEED : 1;
};
