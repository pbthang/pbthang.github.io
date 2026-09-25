export interface Timestamp {
  title: string;
  organization: string;
  time: string;
  description: string[];
}

export const education: Timestamp[] = [
  {
    time: "Aug 2020 – Jul 2024",
    title: "National University of Singapore",
    organization:
      "Bachelor of Computing in Computer Science, Honours (Distinction)",
    description: [
      "Focus on Software Engineering and Database Systems.",
      "Coursework: Software Engineering Principles and Patterns, Software Testing, Database Systems Implementation, Big Data Systems for Data Science, Cloud Computing, Parallel Computing.",
    ],
  },
  {
    time: "2017 – 2020",
    title: "Hanoi – Amsterdam High School for the Gifted",
    organization: "Hanoi, Vietnam",
    description: [
      "Physics specialisation.",
      "Second Prize, Hanoi Physics Olympiad.",
    ],
  },
];

export const experience: Timestamp[] = [
  {
    time: "Aug 2024 – Present",
    title: "Software Engineer",
    organization: "Anacle Systems Limited · Singapore",
    description: [
      "Engineer and maintain an enterprise real estate management application for Singapore's housing authority using C#, ASP.NET, and SQL Server, supporting critical financial and operational workflows.",
      "Optimised SQL queries for financial reporting, cutting execution time from 8 minutes to 10 seconds (90% faster) across 300K+ records.",
      "Managed and delivered a client change request valued at over $10,000, coordinating requirements, implementation, and testing for on-time delivery.",
    ],
  },
  {
    time: "Jun 2023 – Aug 2023",
    title: "Full Stack Developer (Internship)",
    organization: "Bank of New York Mellon · Singapore",
    description: [
      "Built and delivered a full-stack presentation-creation application using Angular, Python, MongoDB, and Amazon S3, enabling the Innovation Team to showcase products across 5 device types and screen sizes.",
    ],
  },
  {
    time: "Jan 2023 – Jun 2023",
    title: "Software Engineer (Internship)",
    organization: "Integro Technologies · Singapore",
    description: [
      "Diagnosed and resolved 30+ technical bugs in a Java-based enterprise banking application, improving system stability and reliability.",
      "Containerised and deployed the application to an OpenShift cluster, integrating microservices, logging, tracing, and monitoring components to strengthen production observability.",
    ],
  },
  {
    time: "Aug 2021 – Dec 2021",
    title: "Teaching Assistant",
    organization: "National University of Singapore",
    description: [
      "Conducted weekly tutorial sessions for the introductory programming modules CS1101S and CS1010E.",
      "Graded student assignments and gave timely feedback; received an overall score of 4.4 out of 5 in the teaching feedback report.",
    ],
  },
];

export const others: Timestamp[] = [
  {
    time: "Feb 2024",
    title: "Hack4Good Finalist (Top 10)",
    organization: "NUS Google Developer Student Club",
    description: [
      "Designed and prototyped GreenAction, a gamified volunteer-tracking and data-visualisation platform for the Ground-Up Initiative, using React, shadcn/ui, Tailwind CSS, Node.js, Supabase, and Clerk.",
    ],
  },
  {
    time: "Aug 2023",
    title: "Full Stack Developer",
    organization: "NUS Google Developer Student Club",
    description: [
      "Collaborated with Caregivers Alliance Limited, a non-profit organisation, on an application to streamline donation campaign management and data analysis, built with Next.js, TypeScript, Node.js, Prisma ORM, PostgreSQL, and Stripe.",
    ],
  },
  {
    time: "Jan 2022 – May 2023",
    title: "Student Cluster Leader",
    organization: "NUS Prince George's Park Residences",
    description: [
      "Oversaw residents' wellbeing and acted as the first point of contact for problem resolution.",
      "Organised level and block events to foster relationships and a strong sense of community among residents.",
    ],
  },
];
