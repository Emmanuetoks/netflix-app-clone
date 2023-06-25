import React from "react";
import Link from "next/link";

interface NavItemProps {
  children: React.ReactNode;
  active?: boolean;
  href: string;
  role: "header" | "footer";
}
export default function NavItem({
  children,
  active,
  href,
  role,
}: NavItemProps) {
  return (
    <Link
      href={href}
      className={`${
        role === "header"
          ? `text-base ml-5 hover:text-gray-400 ${
              active ? "text-white" : "text-gray-300"
            }`
          : "text-sm text-[gray] hover:underline"
      } `}
    >
      {children}
    </Link>
  );
}
