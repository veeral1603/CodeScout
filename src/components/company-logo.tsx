import Image from "next/image";

interface CompanyLogoProps {
  name: string;
}

export default function CompanyLogo({ name }: CompanyLogoProps) {
  const src = `/company-logos/${name.toLowerCase()}.webp`;
  return (
    <div className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-border shadow-sm ring-1 ring-inset ring-foreground/4 transition-all duration-200   bg-white">
      <Image
        src={src}
        alt=""
        aria-hidden="true"
        width={32}
        height={32}
        className="size-8 object-contain transition-transform duration-200 group-hover:scale-105"
        unoptimized
      />
    </div>
  );
}
