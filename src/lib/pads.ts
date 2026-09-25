const escape = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Matches the measurable claims in a bullet: "8 minutes to 10 seconds",
// "90% faster", "300K+ records", "$10,000", "30+", "4.4 out of 5", "top 10".
// A bare number (a year, a module code) is never a metric.
const NUM = String.raw`\d+(?:,\d{3})*(?:\.\d+)?`;
const UNIT = String.raw`(?:minutes?|seconds?|records|out of \d+|device types)`;
const METRIC = new RegExp(
  String.raw`(?<![\w$])(` +
    String.raw`\$${NUM}` +
    String.raw`|${NUM}(?:K\+|\+|%)(?:\sfaster)?` +
    String.raw`|${NUM}\s${UNIT}(?:\sto\s${NUM}\s${UNIT})?` +
    String.raw`|top\s\d+` +
    String.raw`)(?![\w])`,
  "gi"
);

/** Wraps metrics in a bullet as exposed gold pads. Returns safe HTML. */
export function padMetrics(text: string): string {
  return escape(text).replace(METRIC, '<mark class="pad">$1</mark>');
}
