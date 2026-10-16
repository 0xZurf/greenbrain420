// Styled media placeholder. Swap for <img> or <video> when assets arrive.
export default function Placeholder({ label = "Photo", ratio = "4 / 5", className = "", rounded = "rounded-2xl" }) {
  return (
    <div
      className={`placeholder ${rounded} ${className}`}
      data-label={label}
      style={{ aspectRatio: ratio }}
      role="img"
      aria-label={`${label} placeholder`}
    />
  );
}
