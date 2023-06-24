import React from "react";
import Link from "next/link";

interface NavItemProps {
    children: React.ReactNode,
    active?: boolean,
    href: string
}
export default function NavItem({children, active, href}: NavItemProps) {
    return (
        <Link href={href} className={`text-base ml-5 ${active ? 'text-white' : 'text-gray-300'} hover:text-gray-400`}>{children}</Link>
    )
}