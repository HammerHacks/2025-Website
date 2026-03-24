import type { ReactNode } from "react";

export interface FaqItem {
    question: string;
    answer: ReactNode;
    isRight: boolean;
}

export const FAQ_ITEMS: FaqItem[] = [
    {
        question: "What is a hackathon?",
        answer:
            "A hackathon is a collaborative event where participants build projects and solve problems using technology within a limited time frame.",
        isRight: false,
    },
    {
        question: "Who can participate?",
        answer:
            "HammerHacks is open to all Hamilton high-school students, regardless of experience level.",
        isRight: true,
    },
    {
        question: "Do I need coding experience?",
        answer:
            "No prior coding experience is required! We welcome beginners and provide workshops to help you get started.",
        isRight: false,
    },
    {
        question: "How much does it cost?",
        answer:
            "Participation is free! Just bring your creativity and enthusiasm.",
        isRight: true,
    },
    {
        question: "What should I bring?",
        answer:
            "Bring a laptop, charger, and any materials you need for your project. Snacks and meals will be provided.",
        isRight: false,
    },
    {
        question: "Can I work in a team?",
        answer:
            "Yes! Teams of up to 4 are encouraged, but you're free to work alone if you wish. You can form a team before or during the event.",
        isRight: true,
    },
    {
        question: "What if I don't have a team?",
        answer:
            "No worries! We'll help you find teammates at the event if you'd like to join a group.",
        isRight: false,
    },
    {
        question: "How do I register?",
        answer: (
            <>
            Registration isn& apos;t out yet! Check our{ " " }
<a
          href="https://www.instagram.com/hammerhacks_/following/"
className = "underline text-orange-500"
    >
    Instagram
    </a>
    </>
    ),
isRight: true,
  },
];
