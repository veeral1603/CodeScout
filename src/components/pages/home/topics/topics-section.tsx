import Link from "next/link";
import { AltArrowRightIcon } from "@solar-icons/react/linear";
import SectionHeading from "@/components/section-heading";
import TopicGrid from "./topic-grid";

export default function TopicsSection() {
  return (
    <section
      aria-labelledby="topics-heading"
      className="py-14 sm:py-16 lg:py-20"
    >
      <div className="container-6xl">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            id="topics-heading"
            title="Practice by topic."
            description="Focus on the concepts and patterns that show up across technical interviews."
          />

          <Link
            href="/topics"
            className="group inline-flex w-fit shrink-0 items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="View all coding interview topics"
          >
            View all topics
            <AltArrowRightIcon
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>

        <div className="mt-10 sm:mt-12">
          <TopicGrid />
        </div>
      </div>
    </section>
  );
}
