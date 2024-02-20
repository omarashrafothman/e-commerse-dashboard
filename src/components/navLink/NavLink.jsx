"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavLink = ({ href, exact, children, ...props }) => {
  const pathname = usePathname();
  const active = "btnactive";
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  if (isActive) {
    props.className += active;
  }

  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
};
