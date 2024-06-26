import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Navbar from "./navbar"
import { GlassesIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface MobileNavbarProps {
    children: React.ReactNode,
    className?: string
}

export default function MobileNavbar({ children, className }: MobileNavbarProps) {
    return (
        <Sheet>
            <SheetTrigger className={cn(className)}>{children}</SheetTrigger>
            <SheetContent className={cn(className)}>
                <SheetHeader>
                    <SheetTitle className="flex space-x-2 items-center justify-center"><GlassesIcon className="size-6" /><span>Eye Buddy</span></SheetTitle>
                </SheetHeader>
                
                <Navbar className="mt-6"/>
            </SheetContent>
        </Sheet>

    )
}


