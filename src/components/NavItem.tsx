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
      className={`text-sm ${
        role === "header"
          ? `ml-5 transition ease-in-out duration-400
          ${
            active
              ? "text-white font-medium "
              : "text-n_light_gray-base hover:text-n_light_gray-hover font-normal"
          }
            }`
          : "text-[gray] hover:underline"
      } `}
    >
      {children}
    </Link>
  );
}
