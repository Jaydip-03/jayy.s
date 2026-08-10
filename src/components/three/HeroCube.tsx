export default function HeroCube() {
  return (
    <div
      className="hidden lg:flex items-center justify-center"
      style={{ perspective: "1000px" }}
    >
      <div className="cube-wrapper">
        <div className="cube">
          <div className="cube-face cube-front" />
          <div className="cube-face cube-back" />
          <div className="cube-face cube-right" />
          <div className="cube-face cube-left" />
          <div className="cube-face cube-top" />
          <div className="cube-face cube-bottom" />
        </div>
      </div>
    </div>
  );
}