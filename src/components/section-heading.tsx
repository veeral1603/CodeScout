import { useId } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4";
  align?: "left" | "center";
  id?: string;
  className?: string;
}

export default function SectionHeading({
  title,
  description,
  as: Heading = "h2",
  align = "left",
  id,
  className,
}: SectionHeadingProps) {
  const generatedId = useId();
  const headingId = id ?? `section-heading-${generatedId.replace(/:/g, "")}`;
  const descriptionId = description ? `${headingId}-description` : undefined;

  return (
    <header
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <Heading
        id={headingId}
        className={cn(
          "text-balance text-3xl font-bold leading-[1.05] tracking-[-0.04em] text-foreground sm:text-4xl lg:text-[2.75rem]",
          align === "center" && "mx-auto",
        )}
        aria-describedby={descriptionId}
      >
        {title}
      </Heading>

      {description && (
        <p
          id={descriptionId}
          className={cn(
            "mt-3 max-w-xl text-pretty text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      )}
    </header>
  );
}
