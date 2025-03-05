"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${isScrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent"}`}
    >
      <div className="container mx-auto p-[2rem] flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          Portfolio
        </Link>
        <nav className="hidden md:flex items-center gap-6">
       
          <Link href="/project" className="text-sm font-medium hover:text-primary transition-colors">
            Projects
          </Link>
          <Link href="/work" className="text-sm font-medium hover:text-primary transition-colors">
            Work
          </Link>
          <Button asChild>
            <Link href="#contact">Hire Me</Link>
          </Button>
        </nav>
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-6 mt-10 mx-4">
             
              <Link href="/project" className="text-lg font-medium hover:text-primary transition-colors">
                Projects
              </Link>
            
              <Link href="/work" className="text-lg font-medium hover:text-primary transition-colors">
                Work
              </Link>
              <Button asChild>
                <Link href="#contact">Hire Me</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

