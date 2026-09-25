const escape = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Matches the measurable claims in a bullet: "8 minutes to 10 seconds",
// "90% faster", "300K+ records", "$10,000", "30+", "4.4 out of 5", "top 10", "Second Prize".
// A bare number (a year, a module code) is never a metric.
const NUM = String.raw`\d+(?:,\d{3})*(?:\.\d+)?`;
const UNIT = String.raw`(?:minutes?|seconds?|records|out of \d+|device types)`;
const METRIC = new RegExp(
  String.raw`(?<![\w$])(` +
    String.raw`\$${NUM}` +
    String.raw`|${NUM}(?:K\+|\+|%)(?:\sfaster)?` +
    String.raw`|${NUM}\s${UNIT}(?:\sto\s${NUM}\s${UNIT})?` +
    String.raw`|top\s\d+` +
    String.raw`|(?:first|second|third)\sprize` +
    String.raw`)(?![\w])`,
  "gi"
);

// Technologies and focus areas named in the timeline. These get the quieter
// silkscreen treatment (white, medium weight) so gold stays reserved for proof.
const KEYWORDS = [
  "Software Engineering",
  "Database Systems",
  "Honours \\(Distinction\\)",
  "C#",
  "ASP\\.NET",
  "SQL Server",
  "SQL",
  "Angular",
  "Python",
  "MongoDB",
  "Amazon S3",
  "Java",
  "OpenShift",
  "React",
  "shadcn/ui",
  "Tailwind CSS",
  "Next\\.js",
  "Node\\.js",
  "TypeScript",
  "Prisma ORM",
  "PostgreSQL",
  "Stripe",
  "Supabase",
  "Clerk",
  "microservices",
  "logging, tracing, and monitoring",
  "CS1101S",
  "CS1010E",
];
const KEYWORD = new RegExp(
  String.raw`(?<![\w.#])(${KEYWORDS.join("|")})(?![\w#])`,
  "g"
);

// A leading "Label:" ("Coursework:", "Focus:") is a printed legend for the line.
const LEAD_LABEL = /^([A-Z][\w ]{1,24}):\s/;

/**
 * Wraps metrics as exposed gold pads, named technologies as silkscreen
 * keywords, and a leading "Label:" as a mono legend. Returns safe HTML.
 */
export function padMetrics(text: string): string {
  const html = escape(text).replace(METRIC, '<mark class="pad">$1</mark>');
  // A legend-labelled line is already a list of names; leave it uniform.
  if (LEAD_LABEL.test(html)) {
    return html.replace(LEAD_LABEL, '<span class="lead-label">$1</span> ');
  }
  return html.replace(KEYWORD, '<span class="kw">$1</span>');
}
