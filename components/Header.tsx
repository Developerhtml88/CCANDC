"use client";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import ".././src/app/globals.css"
const Navbar = () => {
  const router = useRouter();

  return (
    <div className="w-full mx-auto flex justify-center gap-20 items-center h-[88px] relative bg-white shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)] overflow-hidden">
      <Image
        className="w-[90.49px] h-16"
        src="/logo.png"
        alt="Company Logo"
        width={90.49}
        height={64}
      />

      <div className="h-6 inline-flex items-center gap-8">
        {[
          { href: "/", label: "Partners" },
          { href: "/course", label: "Consulting" },
          { href: "/architecture", label: "BIAN" },
          { href: "/training", label: "Partners" },
          { href: "/contact", label: "Contact" },
        ].map((item) => (
          <Link key={item.href} href={item.href}>
            <div
              className={`relative justify-start text-lg font-normal leading-normal ${
                router.pathname === item.href
                  ? "text-blue-400"
                  : "text-[#393939]"
              }`}
            >
              {item.label}
            </div>
          </Link>
        ))}
      </div>

      <div className="h-11 px-5 py-3 bg-[#0c71c3] rounded-[100px] inline-flex justify-center items-center gap-2.5">
        <div className="relative justify-start text-white text-base font-semibold leading-tight">
          GET IN TOUCH
        </div>
      </div>
    </div>
  );
};

export default Navbar;
