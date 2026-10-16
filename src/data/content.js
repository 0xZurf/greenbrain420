// Placeholder content. Swap text and media here without touching page layouts.

export const brand = {
  name: "Green Brain",
  tagline: "Cannabis, held to a standard.",
  email: "hello@greenbrain.com",
  location: "Los Angeles, CA",
  social: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "YouTube", href: "https://youtube.com" },
    { label: "TikTok", href: "https://tiktok.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
  ],
};

export const nav = [
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Shop", to: "/shop" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export const services = [
  {
    slug: "qc",
    title: "Quality control",
    short: "Independent testing of flower, pre-rolls, and concentrates before they hit the shelf.",
    long:
      "We put product through the same scrutiny a serious smoker would, then write it up so a buyer, grower, or brand can act on it. Appearance, trim, cure, moisture, aroma, burn, ash, and effect, scored on a consistent rubric batch after batch.",
    deliverables: [
      "Batch scorecard with per-category scores",
      "Written notes on what passed, what did not, and why",
      "Side by side comparison against previous batches",
      "Optional photo and video documentation",
    ],
  },
  {
    slug: "reviews",
    title: "Reviews",
    short: "Honest, on-camera and written reviews for people who actually smoke.",
    long:
      "No paid scores. Brands send product, we smoke it, and the audience gets the real read. Reviews run across short-form video, long-form sessions, and written write-ups with the full scorecard attached.",
    deliverables: [
      "Short-form review for Reels and TikTok",
      "Long-form session or podcast segment",
      "Written review with scorecard",
      "Usage rights for approved clips",
    ],
  },
  {
    slug: "media",
    title: "Media",
    short: "Content production for brands, growers, and dispensaries.",
    long:
      "Product photography, grow tours, brand films, and social content built to run across the channels you already use. Shot with an eye for the plant, not a stock catalog.",
    deliverables: [
      "Product and lifestyle photography",
      "Grow and facility tours",
      "Short-form social packages",
      "Brand film and interview pieces",
    ],
  },
];

export const process = [
  {
    step: "Intake",
    text: "You send product with batch info. We log it, photograph it, and set it aside to settle.",
  },
  {
    step: "Assessment",
    text: "Two independent sessions, scored on the same rubric. Appearance, aroma, flavor, smoke, effect.",
  },
  {
    step: "Report",
    text: "You get the scorecard, the notes, and a call to walk through anything that needs fixing.",
  },
];

export const scorecard = {
  sample: "Sample 014",
  cultivar: "Placeholder cultivar",
  form: "Flower, indoor",
  verdict: "Passes",
  total: 8.6,
  categories: [
    { label: "Appearance", score: 9.0 },
    { label: "Aroma", score: 8.5 },
    { label: "Flavor", score: 8.4 },
    { label: "Smoke", score: 8.8 },
    { label: "Effect", score: 8.3 },
  ],
};

export const latest = [
  {
    kind: "Review",
    title: "Sample 014: clean cure, loud terps, slightly harsh on the tail end",
    meta: "6 min read",
    to: "/blog",
  },
  {
    kind: "Video",
    title: "Inside a 40 light indoor room: what a tight SOP actually looks like",
    meta: "18 min",
    to: "/blog",
  },
  {
    kind: "Journal",
    title: "Why moisture content is the number most brands get wrong",
    meta: "4 min read",
    to: "/blog",
  },
];

export const posts = [
  {
    kind: "Review",
    title: "Sample 014: clean cure, loud terps, slightly harsh on the tail end",
    date: "Sep 12, 2026",
    excerpt:
      "A batch that gets almost everything right. We break down where the last point went and how to get it back.",
  },
  {
    kind: "Journal",
    title: "Why moisture content is the number most brands get wrong",
    date: "Sep 4, 2026",
    excerpt:
      "Too dry and it burns hot. Too wet and it will not stay lit. The window is narrow and most packaging ignores it.",
  },
  {
    kind: "Video",
    title: "Inside a 40 light indoor room",
    date: "Aug 28, 2026",
    excerpt: "A grow tour with a team that runs a tighter SOP than most labs. Full session on the channel.",
  },
  {
    kind: "Review",
    title: "Three pre-rolls, one grinder, and a lot of canoeing",
    date: "Aug 19, 2026",
    excerpt: "Pre-roll quality is a packing problem before it is a flower problem. We tested three to prove it.",
  },
  {
    kind: "Journal",
    title: "How we score: the rubric behind every Green Brain review",
    date: "Aug 8, 2026",
    excerpt: "Every review on this site uses the same five categories. Here is what each one means and why.",
  },
  {
    kind: "Media",
    title: "Behind the lens on a dispensary brand shoot",
    date: "Jul 30, 2026",
    excerpt: "What it takes to make a shelf of jars look like something you want to open.",
  },
];

export const products = [
  { name: "Scorecard notebook", price: "$18", note: "Coming soon" },
  { name: "Green Brain rolling tray", price: "$45", note: "Coming soon" },
  { name: "Heavyweight logo tee", price: "$38", note: "Coming soon" },
  { name: "QC field kit", price: "$120", note: "Coming soon" },
  { name: "Embossed lighter, 2 pack", price: "$14", note: "Coming soon" },
  { name: "Cure jar, 2 oz", price: "$28", note: "Coming soon" },
];

export const press = ["Publication", "Podcast", "Festival", "Magazine", "Network", "Collective"];
