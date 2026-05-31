import Image from "next/image";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt="StayClever"
      width={483}
      height={184}
      priority
      className={`h-9 w-auto ${className}`}
    />
  );
}
