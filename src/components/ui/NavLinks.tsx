"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
function NavLinks({
  links,
  preFix = "",
}: {
  links: { id: string | number; href: string; label: string }[];
  preFix: string;
}) {
  const pathName = usePathname();
  return (
    <div className="relative">
      {links.map((tab) => (
        <Link
          key={tab.id}
          href={`${preFix}${tab.href}`}
          className={`relative ml-4 cursor-pointer bg-white p-0 pb-2 ${pathName.endsWith(`${preFix}${tab.href}`) ? "after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-black" : ""}`}
        >
          {tab.label}
        </Link>
      ))}
    </div>
  );
}

export default NavLinks;
