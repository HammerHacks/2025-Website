export interface ScheduleItem {
  time: string;
  title: string;
  description: string;
}

// TODO: Update with real schedule once confirmed
export const SCHEDULE_ITEMS: ScheduleItem[] = [
  {
    time: "9:00 AM",
    title: "Doors Open & Check-In",
    description: "Arrive, grab your badge, and settle in. Breakfast snacks provided.",
  },
  {
    time: "10:00 AM",
    title: "Opening Ceremony",
    description: "Welcome remarks, sponsor introductions, and the theme reveal.",
  },
  {
    time: "10:30 AM",
    title: "Hacking Begins",
    description: "Form your teams and start building! Mentors are available to help.",
  },
  {
    time: "12:30 PM",
    title: "Lunch",
    description: "Take a break and refuel. Lunch is on us!",
  },
  {
    time: "1:00 PM",
    title: "Workshops",
    description: "Attend hands-on workshops to level up your skills while you hack.",
  },
  {
    time: "4:00 PM",
    title: "Hacking Ends",
    description: "Pencils down! Submit your projects for judging.",
  },
  {
    time: "4:30 PM",
    title: "Judging & Demos",
    description: "Present your project to the judges and fellow hackers.",
  },
  {
    time: "5:30 PM",
    title: "Closing Ceremony & Prizes",
    description: "Awards, shoutouts, and celebration. See you next year!",
  },
];
