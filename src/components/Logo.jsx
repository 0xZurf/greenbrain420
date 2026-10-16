import markSrc from "../assets/logo-mark.png";
import wordSrc from "../assets/logo-wordmark.png";

// The wordmark ships as artwork cut from the supplied logo file, so the bubble
// face matches the brand exactly rather than being approximated by a web font.
export default function Logo({ size = "nav", className = "" }) {
  const mark = size === "nav" ? "h-11" : "h-14";
  const word = size === "nav" ? "h-9" : "h-11";
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <img src={markSrc} alt="" aria-hidden="true" className={`${mark} w-auto`} />
      <img src={wordSrc} alt="Green Brain" className={`${word} w-auto`} />
    </span>
  );
}
