import Logo from "@/components/Logo";
import Button from "@/components/Button";

export default function NavBar() {
    return (
        <nav className="container mx-auto max-w-[1172px] flex justify-between items-center h-[86px]">
            <Logo className="fill-red-600 h-[40px]"/>
            <Button>Sign in</Button>
        </nav>
    )
}