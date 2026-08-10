import RecognitionHeader from "./RecognitionHeader";
import RecognitionList from "./RecognitionList";

export default function Recognition() {
  return (
    <section id="recognition" className="bg-white py-24 text-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <RecognitionHeader />
        <div className="mt-16">
          <RecognitionList />
        </div>
      </div>
    </section>
  );
}