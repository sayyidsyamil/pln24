"use client";
import Link from "next/link";

export function NavBar() {
  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href")?.slice(1) || "";
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="py-2 z-50 w-screen fixed bg-black shadow-lg">
      <div className="container flex items-center justify-between">
        <Link href="#">
          <div className="flex items-center gap-4">
            <img
              alt="Logo"
              className="rounded-lg"
              height="32"
              src="/logo.png"
              style={{
                aspectRatio: "32/32",
                objectFit: "cover",
              }}
              width="32"
            />
            <span className="hidden md:flex text-lg font-semibold text-white">PLN2024</span>
          </div>
        </Link>
        <nav className="flex items-center gap-x-5 md:gap-10 text-white">
          <a href="#home" className="hidden md:flex text-sm font-medium leading-none" onClick={handleNavLinkClick}>
            Home
          </a>
          <a href="#overview" className="text-sm font-medium leading-none" onClick={handleNavLinkClick}>
            Overview
          </a>
          <a href="#announcements" className="text-sm font-medium leading-none" onClick={handleNavLinkClick}>
            Announcements
          </a>
          <a href="#rules" className="text-sm font-medium leading-none" onClick={handleNavLinkClick}>
            Rules
          </a>
          <a href="#faq" className="text-sm font-medium leading-none" onClick={handleNavLinkClick}>
            FAQ
          </a>
          
        </nav>
      </div>
    </div>  
  );
}
