"use client";

import Logo from "@/components/Logo";
import NavItem from "@/components/NavItem";

import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";

export default function NavBar() {
    const [scroll, setScroll] = useState(false)
    const pathName = usePathname();

    useEffect(() => {
        const scrollEvent = () => {
            setScroll(window.scrollY > 0);
        }

        window.addEventListener("scroll", scrollEvent)

        return () => {
            window.removeEventListener("scroll", scrollEvent)
        }
    })

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
        <nav
            style={{backgroundImage: "linear-gradient(180deg,rgba(0,0,0,.7) 10%,transparent)"}}
            className={`z-10 fixed top-0 w-full flex justify-between items-center h-[68px] px-15 bg-transparent transition ease-in-out duration-1000 ${scroll && "bg-n_black duration-400"}`}
        >
            {/* Logo and nav items */}
            <div className="flex items-center">
                <Logo className="fill-n_primary h-[31px] w-[92.5px] mr-[25px]"/>
                {/* nav items */}
                <div className="flex p-0">
                    {
                        navItems.map((navItem) => (
                            <NavItem href={navItem.href} key={navItem.href} active={pathName === navItem.href} role="header">{navItem.label}</NavItem>
                        ))
                    }
                </div>
            </div>

      {/* Search, notifications & profile */}
      <div></div>
    </nav>
  );
}
