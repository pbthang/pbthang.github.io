# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: recruiters and hiring managers evaluating Thang Pham for software
engineering roles. They typically arrive from a resume, LinkedIn, or GitHub
link, skim quickly, and need to decide within a minute or two whether to read
deeper, open the resume, or reach out.

Secondary (not a design target): engineers and acquaintances who follow a link
to see what Thang has built.

## Product Purpose

A single-page personal portfolio for Thang Pham (full name Pham Ba Thang,
handle `pbthang`), live at https://pbthang.github.io/ (previously pbthang.netlify.app). It exists to make a
hiring decision easier: show who Thang is, what he specialises in, what he has
built, and how to contact him.

Success means a recruiter leaves with a clear picture of Thang's specialty,
opens the resume, and/or sends a message through the contact form.

## Positioning

Thang is a **full-stack developer with a specialty in database systems**: a
generalist across frontend and backend who goes deeper than most on the data
layer. He cares about building applications that are aesthetically pleasing
and solve real problems (existing About copy, confirmed).

Current status (confirmed 2026-09, per resume): **Software Engineer at Anacle
Systems Limited, Singapore (Aug 2024 – present)**, working on an enterprise
real-estate management application for Singapore's housing authority (C#,
ASP.NET, SQL Server). Graduated from NUS with a Bachelor of Computing in
Computer Science, Honours (Distinction), Aug 2020 – Jul 2024.

Site copy was refreshed to this status in 2026-09.

## Operating Context

- One page, section-anchored: Hero → About (terminal-style bio, photo,
  Education / Experience / Others timeline tabs, playlist embed) → Skills
  (categorised cards) → Projects (horizontal snap carousel of cards with
  image, description, link) → Contact (form) → Footer (section links, social
  icons, "Singapore", "Made by Thang Pham").
- Recruiters evaluate it alongside the resume PDF; the hero's primary action
  is "My resume" (opens in a new tab).
- Contact submissions go through Formspree (`https://formspree.io/f/mpzkjypd`).
- Deployed on Netlify (Astro `output: "server"` with the Netlify functions
  adapter); Google Analytics (`G-39ELLHV7XG`), sitemap, robots.txt, and a
  Google Search Console verification file are present.

## Capabilities and Constraints

Stack: Astro 2, Tailwind 3, daisyUI 4, Tabler icon webfont, three.js (3D
laptop in the hero, model + textures in `public/laptop/`), typewriter-effect,
jQuery. Fonts are loaded from Google Fonts (Poppins, Source Code Pro).

Content is versioned locally in `src/data/` (profile, timeline, skills,
projects, contacts) with assets in `public/`; the site builds fully static
(`output: "static"`). The former Contentful dependency was removed in 2026-09.
Everything else in the site is kept:

- resume link (PDF), Formspree contact form, `pbthang` handle, Singapore
  location, playlist embed, social contacts;
- the 3D laptop hero and terminal-window motif are binding (see Brand
  Commitments).

Section anchors `#About`, `#Skills`, `#Projects`, `#Contact` are used by the
navbar, footer, and hero scroll cue.

Undecided: none at present.

## Brand Commitments

- Name: **Thang Pham** (full name Pham Ba Thang); handle **pbthang**; tagline
  in metadata "Software Engineer".
- Voice: friendly, first-person, developer-native ("Hello world!", `whoami`,
  `cat info.txt`, `:q`, "Have a nice day!").
- Binding motifs (user-confirmed): the **3D laptop** hero scene and the
  **terminal / code-window** treatment of the bio.
- Existing theme tokens are incumbent evidence, not a binding palette: primary
  `#14213d`, accent/secondary `#fca311`, base `#f0f3f6`, hero backdrop
  `#0b1121`, 6px radii.

## Evidence on Hand

Source of truth for factual content: the 2026 resume (`PhamBaThang_resume_2026.pdf`,
supplied by the user; not yet committed to the repo). Facts below are taken from
it verbatim and are the content future work must use.

**Identity & contact**
- PHAM Ba Thang · Singapore · bathang02@gmail.com · linkedin.com/in/pbthang ·
  github.com/pbthang · pbthang.netlify.app. (Phone number appears on the resume
  but should not be published on the site.)

**Education**
- National University of Singapore, Aug 2020 – Jul 2024. Bachelor of Computing
  in Computer Science, Honours (Distinction). Relevant coursework: Software
  Engineering Principles and Patterns, Software Testing, Database Systems
  Implementation, Big Data Systems for Data Science, Cloud Computing, Parallel
  Computing.

**Experience**
- Software Engineer, Anacle Systems Limited, Singapore, Aug 2024 – Present.
  Enterprise real-estate management application for Singapore's housing
  authority (C#, ASP.NET, SQL Server) supporting financial and operational
  workflows. Optimised SQL queries for financial reporting: ~90% faster, 8 min
  → 10 s across 300K+ records. Managed and delivered a client change request
  valued over $10,000 end to end.
- Full Stack Developer (Internship), Bank of New York Mellon, Singapore,
  Jun 2023 – Aug 2023. Full-stack presentation-creation app (Angular, Python,
  MongoDB, Amazon S3) for the Innovation Team, supporting 5 device types.
- Software Engineer (Internship), Integro Technologies, Singapore,
  Jan 2023 – Jun 2023. Resolved 30+ bugs in a Java enterprise banking app;
  containerised and deployed to OpenShift with microservices, logging,
  tracing, and monitoring.

**Awards**
- Hack4Good Finalist (Top 10), NUS Google Developer Student Club, Feb 2024 —
  gamified volunteer-tracking and data-visualisation platform for Ground-Up
  Initiative (React, shadcn/ui, Tailwind CSS, Node.js, Supabase, Clerk).
  devpost.com/software/green-action-jbr2uh

**Projects**
- PocketPortfolio — github.com/pbthang/cs5224-project. Led a 4-person team;
  platform to create and deploy portfolio webpages using OpenAI and AWS
  (Lambda, API Gateway, S3, CloudFront, Serverless, CloudFormation, Amplify).
- PeerPrep — github.com/CS3219-AY2223S1/cs3219-project-ay2223s1-g31.
  Microservice, real-time pair-programming platform for interview practice
  (React, Node.js, MongoDB, SQLite, Redis, Socket.io, Docker); 4-person Agile
  team.
- Portfolio Website — github.com/pbthang/Portfolio. This site (Astro,
  Tailwind, daisyUI, Three.js, Contentful; serverless on Netlify). Lighthouse
  95 accessibility / 100 SEO.
- Go Messaging Backend — github.com/pbthang/go_messaging_app. Microservice
  message-delivery backend (Go, Kitex RPC, Redis, Docker); GitHub Actions
  CI/CD; deployed on a local Kubernetes cluster.

**Technical skills**
- Languages: JavaScript, TypeScript, Python, Java, C#, HTML, CSS
- Technologies: React, Next.js, Node.js, Express.js, FastAPI, ASP.NET
- Databases: PostgreSQL, SQL Server, MongoDB, Redis, Firebase, Supabase
- Others: Git, GitHub, GitLab, CI/CD, Docker, AWS, Claude Code

**Assets**
- Profile photo `public/images/profile.webp`; project images in
  `public/images/projects/`; resume `public/files/PhamBaThang_resume_2026.pdf`.
  All site content is versioned in `src/data/`.
- PocketPortfolio has no real screenshot yet; `pocketportfolio.jpg` is the
  GitHub-generated repo social card and should be replaced with a real one.
- 3D laptop asset: `public/laptop/source/Laptop.fbx` + textures in
  `public/laptop/textures/`.
- Favicon: `public/favicon.svg`.

**Absences**
- No testimonials, press, or client logos exist; future work must not
  fabricate any. The only quantitative proof is what the resume states above.

## Product Principles

1. **Decide-fast for recruiters.** Specialty (full-stack + database systems),
   current role, and resume must be reachable within the first viewport or one
   scroll.
2. **Show real work, truthfully.** Projects, timeline, and skills are real
   content owned in the repo; no filler, no invented proof.
3. **Personality through the developer lens.** The terminal and laptop motifs
   carry Thang's voice; new sections extend that language rather than
   adding unrelated flourishes.
4. **Own the content.** Everything the site displays is versioned locally; no
   runtime dependency on a third-party CMS.
5. **Stay current.** Copy must reflect the present (NUS graduate, Software
   Engineer at Anacle Systems), not the student-era wording; the resume is the
   source of truth for facts.

## Accessibility & Inclusion

No product-specific standard has been mandated. Existing code uses
`aria-label`s on icon links, a labelled contact form, tab roles for the
timeline, and `scroll-padding-top` for anchored navigation; future work should
preserve these and provide a non-WebGL fallback for the 3D hero where feasible.
