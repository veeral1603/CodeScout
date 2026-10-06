import TopicCard from "./topic-card";
import { featuredTopics } from "./topics-data";

export default function TopicGrid() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {featuredTopics.map((topic) => (
        <TopicCard key={topic.slug} {...topic} />
      ))}
    </div>
  );
}
