import Image from "next/image";
import { cn } from "@/lib/utils";

interface CompanyLogoProps {
  name: string;
  className?: string;
}

export default function CompanyLogo({ name, className }: CompanyLogoProps) {
  const src = `/company-logos/${name.toLowerCase()}.webp`;
  return (
    <div
      className={cn(
        className,
        "size-12 shrink-0 overflow-hidden rounded-sm border-2 border-border bg-white",
      )}
    >
      <Image
        src={src}
        alt=""
        width={48}
        height={48}
        className="size-full object-cover"
      />
    </div>
  );
}
