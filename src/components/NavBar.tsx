'use client'

import Logo from "@/components/Logo";
import NavItem from "@/components/NavItem";
import {usePathname} from "next/navigation";

export default function NavBar() {
    const pathName = usePathname();

    const navItems = [
        {
            href: "/",
            label: "Home"
        },
        {
            href: "/tv-shows",
            label: "TV Shows"
        },
        {
            href: "/movies",
            label: "Movies"
        },
        {
            href: "/new-and-popular",
            label: "New & Popular"
        },
        {
            href: "/my-list",
            label: "My List"
        },
        {
            href: "/browse-by-languages",
            label: "Browse by languages"
        }
    ]

    return (
        <nav className="w-full flex justify-between items-center h-[68px] px-15">
            {/* Logo and nav items */}
            <div className="flex">
                <Logo className="fill-red-600 h-[31px] w-[92.5px] mr-[25px]"/>
                {/* nav ite,s */}
                <div className="flex align-center p-0">
                    {
                        navItems.map((navItem) => (
                            <NavItem href={navItem.href} key={navItem.href} active={pathName === navItem.href}>{navItem.label}</NavItem>
                        ))
                    }
                </div>
            </div>

            {/* Search, notifications & profile */}
            <div>

            </div>
        </nav>
    )
}