import { recognitions } from "@/data/recognitions";
import RecognitionCard from "./RecognitionCard";

export default function RecognitionList() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {recognitions.map((item) => (
        <RecognitionCard key={item.slug} item={item} />
      ))}
    </div>
  );
}