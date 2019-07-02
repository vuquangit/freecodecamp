// Convert string to link format
export default function Text2Link(str) {
  return str
    .split("")
    .filter(i => i === " " || /\w/g.test(i))
    .join("")
    .replace(/\s+/g, "-")
    .toLocaleLowerCase()
    .trim();
}
