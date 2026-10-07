import Image from "next/image";

interface CompanyLogoProps {
  name: string;
}

export default function CompanyLogo({ name }: CompanyLogoProps) {
  const src = `/company-logos/${name.toLowerCase()}.webp`;
  return (
    <div className="relative flex size-12 shrink-0 items-center justify-center rounded-xl border border-border bg-white shadow-sm ring-1 ring-inset ring-foreground/4 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-primary/20 group-hover:shadow-md">
      <Image
        src={src}
        alt=""
        aria-hidden="true"
        width={32}
        height={32}
        className="size-8 object-contain transition-transform duration-300 group-hover:scale-110"
        unoptimized
      />
    </div>
  );
}
