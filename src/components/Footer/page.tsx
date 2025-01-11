import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-background text-gray-800 dark:text-gray-200 border-t">
      <div className="container mx-auto px-6 py-8">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo and Description */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <Link href="/" className="text-2xl font-bold">
              AtiqDev<span className="italic font-semibold">Blog</span>
            </Link>
            <p className="mt-4 text-sm">
              Stay updated with the latest tech trends, tutorials, and insights.
              Join our community for knowledge and inspiration.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="w-full md:w-1/3 flex justify-center space-x-6 md:mb-0">
            <Link
              href="/"
              className="hover:underline hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/About"
              className="hover:underline hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="/blog"
              className="hover:underline hover:text-primary transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="hover:underline hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Social Media Links */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end space-x-4">
            <Link href="https://facebook.com" aria-label="Facebook">
              <FaFacebook className="w-6 h-6 hover:text-primary transition-colors" />
            </Link>
            <Link href="https://twitter.com" aria-label="Twitter">
              <FaTwitter className="w-6 h-6 hover:text-primary transition-colors" />
            </Link>
            <Link href="https://instagram.com" aria-label="Instagram">
              <FaInstagram className="w-6 h-6 hover:text-primary transition-colors" />
            </Link>
            <Link href="https://linkedin.com" aria-label="LinkedIn">
              <FaLinkedin className="w-6 h-6 hover:text-primary transition-colors" />
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-gray-300"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            © {new Date().getFullYear()} AtiqDev Blog. All rights reserved.
          </p>

          <div className="flex items-center mt-4 px-6">
            <Image
              src={"/University.png"}
              alt={"author"}
              width={40}
              height={40}
              className="rounded-full"
            />
            <p className="ml-3 text-lg italic text-gray-700 dark:text-gray-300">
              By <span className="text-[16px]">Muhammad Atiq Ur Rehman</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
