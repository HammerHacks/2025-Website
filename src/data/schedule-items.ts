export interface ScheduleItem {
  time: string;
  title: string;
  description: string;
}

// TODO: Update with real schedule once confirmed
export const SCHEDULE_ITEMS: ScheduleItem[] = [
  {
    time: "8:00 AM",
    title: "Doors Open & Check-In",
    description: "Arrive, grab your badge, and settle in!",
  },
  {
    time: "9:00 AM",
    title: "Opening Ceremony",
    description: "Welcome remarks, sponsor introductions, and the theme reveal.",
  },
  {
    time: "9:30 AM",
    title: "Ice Breakers",
    description: "Get to know your fellow hackers and start forming teams!",
  },
  {
    time: "10:30 AM",
    title: "Hacking Begins",
    description: "Time to start building! Mentors are available to help.",
  },
  {
    time: "12:30 PM",
    title: "Lunch",
    description: "Take a break and refuel. Lunch is on us!",
  },
  {
    time: "1:00 PM",
    title: "Workshops",
    description: "Level up your skills with our workshops!",
  },
  {
    time: "6:00 PM",
    title: "Dinner",
    description: "One last refuel before the generational lock-in!",
  },
  {
    time: "8:00 PM",
    title: "Hacking Ends",
    description: "Submit your project and prepare for judging!",
  },
  {
    time: "8:30 PM",
    title: "Judging & Demos",
    description: "Present your project to the judges and fellow hackers!",
  },
  {
    time: "9:30 PM",
    title: "Closing Ceremony & Prizes",
    description: "Awards, shoutouts, and celebration. See you next year!",
  },
];
