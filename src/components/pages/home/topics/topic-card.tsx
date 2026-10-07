import Link from "next/link";
import { AltArrowRightIcon, CodeIcon } from "@solar-icons/react/linear";

interface TopicCardProps {
  name: string;
  slug: string;
  count: number;
}

export default function TopicCard({ name, slug, count }: TopicCardProps) {
  return (
    <Link
      href={`/topics/${slug}`}
      aria-label={`Explore ${name} coding interview problems`}
      className="group flex min-h-25 items-center gap-3 rounded-xl border border-border bg-card px-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_18px_40px_-20px_rgba(0,0,0,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 dark:hover:shadow-[0_18px_40px_-20px_rgba(0,0,0,0.6)]"
    >
      <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-border bg-muted/40 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-primary/20 group-hover:bg-primary/10 group-hover:text-primary">
        <CodeIcon size={17} aria-hidden="true" strokeWidth={2.5} />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="truncate text-sm font-semibold tracking-tight text-foreground">
          {name}
        </h3>

        <p className="mt-1 text-xs text-muted-foreground">{count} problems</p>
      </div>

      <span className="flex size-8 shrink-0 items-center justify-center rounded-full text-muted-foreground/40 transition-all duration-300 group-hover:bg-primary/10 group-hover:text-primary">
        <AltArrowRightIcon
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}
