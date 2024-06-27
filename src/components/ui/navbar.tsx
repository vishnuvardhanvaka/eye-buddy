import { cn } from "@/lib/utils";
import { MailIcon } from "lucide-react";
import Link from "next/link";
import { GiSunglasses } from "react-icons/gi";

interface NavbarProps {
    className?: string
}

export default function Navbar({ className }: NavbarProps) {
    return (
        <nav className={cn("ml-auto gap-4 sm:gap-6 md:space-x-4 flex flex-col md:flex-row", className)}>
            {/* <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                Features
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                Technology
            </Link>
            
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                About
            </Link> */}
            <Link href="/virtual-tryon" className="text-sm font-medium hover:underline underline-offset-4 flex items-center" prefetch={false}>
            <GiSunglasses className="w-8 mr-2 h-8" />
            <span className="font-bold">Virtual Tryon</span>
            </Link>
            <Link href="mailto:hello@eyebuddy.io" className="text-sm font-medium hover:underline underline-offset-4 flex items-center" prefetch={false}>
                <MailIcon className="mr-2" /> Contact
            </Link>
            {/* <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                Why EyeBuddy ?
            </Link> */}
        </nav>
    )
}