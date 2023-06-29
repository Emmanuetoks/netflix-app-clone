import NavItem from "@/components/NavItem";
import Link from "next/link";
import Image from "next/image";

import facebookLogo from "../assets/facebookLogo.svg";
import instagramLogo from "../assets/instagramLogo.svg";
import youtubeLogo from "../assets/youtubeLogo.svg";

const Footer = () => {
  const navItems = [
    {
      href: "/",
      label: "Audio Description",
    },
    {
      href: "/",
      label: "Help Center",
    },
    {
      href: "/",
      label: "Gift Cards",
    },
    {
      href: "/",
      label: "Media Center",
    },
    {
      href: "/",
      label: "Investor Relations",
    },
    {
      href: "/",
      label: "Jobs",
    },
    {
      href: "/",
      label: "Terms of Use",
    },
    {
      href: "/",
      label: "Privacy",
    },
    {
      href: "/",
      label: "Legal Notices",
    },
    {
      href: "/",
      label: "Cookie Preferences",
    },
    {
      href: "/",
      label: "Corporate Information",
    },
    {
      href: "/",
      label: "Contact Us",
    },
  ];

  return (
    <footer className="pl-15 w-full flex justify-start lg:justify-center">
      <div className="mb-2 text-sm text-[gray] max-h-96 max-w-5xl 2md:pr-[10%] 2xl:pr-[8%]">
        <div className="flex items-center justify-start mb-4 gap-x-2.5">
          <Link href="https://www.facebook.com/netflix/" target="_blank">
            <Image src={facebookLogo} width={30} height={30} alt="facebook" />
          </Link>
          <Link href="https://www.instagram.com/Netflix/" target="_blank">
            <Image src={instagramLogo} width={30} height={30} alt="instagram" />
          </Link>
          <Link href="https://www.youtube.com/@Netflix" target="_blank">
            <Image src={youtubeLogo} width={30} height={30} alt="youtube" />
          </Link>
        </div>
        <ul className="mb-9  grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-12 2sm:gap-x-32 md:gap-x-12 2md:gap-x-16 lg:gap-x-24">
          {navItems.map((navItem) => (
            <NavItem href={navItem.href} key={navItem.href} role="footer">
              {navItem.label}
            </NavItem>
          ))}
        </ul>
        <div>
          <button className="p-2 mb-5 border border-[gray] hover:text-white">
            Service Code
          </button>
        </div>
        <div>
          <span className="text-xs">&copy; 1997-2023 Netflix, Inc.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
