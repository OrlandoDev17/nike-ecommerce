import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarItemProps {
  id: string;
  label: string;
  href: string;
}

export default function NavbarItem({ label, href }: NavbarItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`uppercase font-semibold tracking-wide inline-block transition-all ${
        isActive ? "text-primary scale-115" : ""
      }`}
    >
      {label}
    </Link>
  );
}
