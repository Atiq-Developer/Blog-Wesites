import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "@/components/theme-btn";

const Navbar = () => {
  return (
    <header className="bg-background/50 sticky top-0 backdrop-blur border-b">
      {/* Navbar */}
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Blog Logo */}
        <div className="text-2xl">
          <Link href="/">
            AtiqDev<span className="font-bold italic">Blog</span>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link
            href="/"
            className="hover:scale-105 duration-300 transition-transform  hover:font-semibold"
          >
            Home
          </Link>
          <Link
            href="/About"
            className="hover:scale-105 duration-300 transition-transform  hover:font-semibold"
          >
            About
          </Link>
          <Link
            href="/blog"
            className="hover:scale-105 duration-300 transition-transform  hover:font-semibold"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="hover:scale-105 duration-300  transition-transform hover:font-semibold"
          >
            Contact
          </Link>

          <ModeToggle />
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Sheet>
            <span className="mx-2">
              <ModeToggle />
            </span>
            <SheetTrigger asChild>
              <Button variant="outline">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="my-4">
                  <Link href="/">
                    AtiqDev<span className="font-semibold italic">Blog</span>
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-4 mt-4 items-center">
                <Link
                  href="/"
                  className="hover:scale-105 duration-300 text-lg font-medium transition-transform"
                >
                  Home
                </Link>
                <Link
                  href="/About"
                  className="hover:scale-105 duration-300 text-lg font-medium transition-transform"
                >
                  About
                </Link>
                <Link
                  href="/blog"
                  className="hover:scale-105 duration-300 text-lg font-medium transition-transform"
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className="hover:scale-105 duration-300 transition-transform text-lg font-medium "
                >
                  Contact
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
