// Optimized base64 SVG shimmer placeholder for zero-layout-shift image loading

const shimmerSvg = (w = 700, h = 475) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop stop-color="#0f0f13" offset="20%" />
      <stop stop-color="#1c1c24" offset="50%" />
      <stop stop-color="#0f0f13" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#0f0f13" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1.5s" repeatCount="indefinite" />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

export const SHIMMER_BLUR_DATA_URL = `data:image/svg+xml;base64,${toBase64(
  shimmerSvg(700, 475)
)}`;
