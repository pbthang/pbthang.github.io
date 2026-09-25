export interface Project {
  title: string;
  description: string;
  imgSrc: string;
  link: string;
}

export const projects: Project[] = [
  {
    title: "PocketPortfolio",
    description:
      "Team-led platform that generates and deploys portfolio sites with OpenAI and serverless AWS (Lambda, S3, CloudFront)",
    imgSrc: "/images/projects/pocketportfolio.jpg",
    link: "https://github.com/pbthang/cs5224-project",
  },
  {
    title: "GreenAction",
    description:
      "Gamified volunteer tracking and visualisation platform for Ground-Up Initiative; Hack4Good 2024 finalist (top 10)",
    imgSrc: "/images/projects/greenaction.webp",
    link: "https://devpost.com/software/green-action-jbr2uh",
  },
  {
    title: "PeerPrep",
    description:
      "Real-time pair-programming platform for interview practice, built on microservices with React, Node.js, Redis, and Socket.io",
    imgSrc: "/images/projects/peerprep.webp",
    link: "https://github.com/CS3219-AY2223S1/cs3219-project-ay2223s1-g31",
  },
  {
    title: "Go Messaging App",
    description:
      "Microservice messaging backend in Go with Kitex RPC and Redis, shipped via GitHub Actions to a local Kubernetes cluster",
    imgSrc: "/images/projects/go-messaging-app.webp",
    link: "https://github.com/pbthang/go_messaging_app",
  },
  {
    title: "Portfolio Website",
    description:
      "This site: a static Astro build with Tailwind CSS and a three.js laptop, deployed to GitHub Pages",
    imgSrc: "/images/projects/portfolio.webp",
    link: "https://github.com/pbthang/Portfolio",
  },
  {
    title: "Weapon Detection (CV)",
    description:
      "Classifying whether a person is unarmed, carrying a weapon, or a threat, using deep learning with ~70% accuracy",
    imgSrc: "/images/projects/weapon-detection.webp",
    link: "https://github.com/wilfredbtan/CS4243-Mini-Project",
  },
];
