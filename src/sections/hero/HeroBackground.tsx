export default function HeroBackground() {
  return (
    <>
      {/* Radial Glow */}
      <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px]" />

      {/* Secondary Glow */}
      <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-purple-500/10 blur-[120px]" />

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
    </>
  );
}