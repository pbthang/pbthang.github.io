export interface Contact {
  name: string;
  link: string;
  icon: string;
}

export const profile = {
  name: "Thang Pham",
  fullName: "Pham Ba Thang",
  handle: "pbthang",
  role: "Software Engineer",
  company: "Anacle Systems Limited",
  location: "Singapore",
  image: "/images/profile.webp",
  resume: "/files/PhamBaThang_resume_2026.pdf",
  playlistUrl:
    "https://open.spotify.com/embed/playlist/37i9dQZF1Eptyt7svZlaNh?utm_source=generator",
  metaDescription:
    "Portfolio of Thang Pham, a Software Engineer in Singapore specialising in full-stack development and database systems.",
  ogDescription:
    "Hi, I am Thang Pham, a Software Engineer based in Singapore. I build full-stack applications with a focus on database systems.",
  // Each string completes "a ..." in the hero.
  typewriter: [
    "Software Engineer,",
    "full-stack developer,",
    "database enthusiast,",
    "Vietnamese.",
  ],
  // Terminal bio in the About section, in the order shown.
  bio: {
    info: [
      "Hi, I am Pham Ba Thang.",
      "I'm a Software Engineer at Anacle Systems in Singapore.",
      "I graduated from NUS with a B.Comp. in Computer Science (Honours, Distinction).",
    ],
    interest:
      "I specialise in full-stack development and database systems: I like owning a feature from the UI down to the schema, and designing systems that stay fast and fault-tolerant as they scale. I'm interested in creating applications that are aesthetically pleasing and solve real problems.",
  },
};

export const contacts: Contact[] = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/pbthang/",
    icon: "brand-linkedin",
  },
  { name: "GitHub", link: "https://github.com/pbthang", icon: "brand-github" },
  { name: "Email", link: "mailto:bathang02@gmail.com", icon: "mail" },
];
