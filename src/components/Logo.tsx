import Image from "next/image";

type LogoProps = {
  variant?: "onLight" | "onDark";
  className?: string;
};

export function Logo({ className = "" }: LogoProps) {
  return (
    <Image
      src="/logo.svg"
      alt="Posto VN"
      width={1425}
      height={970}
      className={`w-auto object-contain ${className}`}
      priority
    />
  );
}
