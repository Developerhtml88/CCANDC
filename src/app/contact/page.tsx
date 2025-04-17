"use client";

import Image from "next/image";
import "../css/style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../css/style.css";

export default function Home() {
  const pathname = usePathname(); // Get current route

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos > prevScrollPos) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <>
      <div className="bg-[url(/courses/hero.png)] bg-no-repeat w-screen bg-cover bg-center  font-sans h-[600px]">
        <div
          className={`flex justify-center items-center fixed w-full z-[999999] transition-transform duration-300 ${
            isVisible ? "block" : "hidden"
          }`}
        >
          <div className="w-full mx-auto flex justify-center header-wd items-center h-[88px] relative bg-white shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)] overflow-hidden">
            <Image
              className="w-[90.49px] h-16"
              src="/logo.png"
              alt="Company Logo"
              width={90.49}
              height={64}
            />

            <div className="h-6 inline-flex items-center gap-8">
              {[
                { href: "/about", label: "About" },
                { href: "/training-portfolio", label: "Training" },
                { href: "/partners", label: "Partners" }, // Changed key to make it unique
                { href: "/consulting", label: "Consulting" },
                { href: "/bian", label: "BIAN" }, // Changed key to make it unique
                { href: "/partners-info", label: "Partners Info" }, // Changed label to make it unique
                { href: "/contact", label: "Contact" }, // New menu item
              ].map((item) => (
                <Link key={item.href} href={item.href}>
                  <div
                    className={`relative justify-start text-lg font-normal leading-normal ${
                      pathname === item.href ? "text-[#0c71c3]" : "text-black"
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
        </div>

        <section
          data-aos="fade-up"
          className="flex flex-col items-center pt-[200px] justify-center text-center hed-txth1"
        >
          <h1 className="text-4xl sm:text-[72px] font-extrabold text-gray-900 leading-[90px]">
            Contact Us
          </h1>
          <p className="mt-2 text-gray-600 max-w-[1165px] text-[24px]">
            CC&C Has Been Helping the Largest Companies Get Architecture Right for Almost 20 Years
          </p>
          <button className="mt-[30px] flex items-center justify-center gap-2 bg-[#0C71C3] text-white w-[202px] py-3 rounded-full text-lg font-semibold shadow-lg transition">
            <span>
              <Image
                className=""
                src="/arrow.svg"
                alt="Arrow Icon"
                width={40}
                height={40}
              />
            </span>
            TALK TO US
          </button>
        </section>
      </div>

      <section className="mt-[100px] mb-[50px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" style={{ paddingLeft: "20px", paddingRight: "20px" }}>
            <div className="contact-info hed-txth3 contact-frm">
              <h3 className="pb-3">Contact Form</h3>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="mb-4">
                    <input type="text" id="firstName" name="firstName" className="w-full px-3 py-2 border rounded-md" placeholder="First Name" />
                  </div>
                  <div className="mb-4">
                    <input type="text" id="lastName" name="lastName" className="w-full px-3 py-2 border rounded-md" placeholder="Last Name" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="mb-4">
                    <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-md" placeholder="Email" />
                  </div>
                  <div className="mb-4">
                    <input type="tel" id="phone" name="phone" className="w-full px-3 py-2 border rounded-md" placeholder="Phone" />
                  </div>
                </div>
                <div className="mb-4">
                  <input type="text" id="subject" name="subject" className="w-full px-3 py-2 border rounded-md" placeholder="Subject" />
                </div>
                <div className="mb-4">
                  <textarea id="message" name="message" className="w-full px-3 py-2 border rounded-md" placeholder="Your Message"></textarea>
                </div>
                <div className="mb-4 check-btn">
                  <input type="checkbox" id="terms" name="terms" className="mr-2" />
                  <label htmlFor="terms" className="text-gray-700">I agree to the terms & conditions & privacy policy</label>
                </div>
                <div className="mb-4 check-btn">
                  <input type="checkbox" id="offers" name="offers" className="mr-2" />
                  <label htmlFor="offers" className="text-gray-700">We&apos;d like to send you exclusive offers, promotions, discounts and the latest information.</label>
                </div>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Submit</button>
              </form>
            </div>
            <div className="md:col-span-1">
              <Image src="/courses/map.png" alt="Contact Us" width={800} height={600} className="w-full h-auto rounded-md mt-[50px]" />
            </div>
          </div>
        </div>
      </section>

      <section style={{ marginTop: "80px", marginBottom: "100px" }}>
        <div className="container mx-auto">
          <div className="row">
            <div className="md:col-span-12 ms-3">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="contact-info hed-txth4">
                  <Image src="/courses/location-map.png" alt="Contact Us" width={30} height={30} className=" rounded-md w-[40px] h-[40px]" />
                  <h4 className="pb-2 pt-3 " style={{color:"#f68827"}}>Global Headquarters</h4>
                  <p><strong>Vish Viswanathan</strong></p>
                  <p>Managing Principal<br /> CC and C Solutions<br /> Australia</p>
                </div>
                <div className="contact-info hed-txth4">
                  <Image src="/courses/location-map.png" alt="Contact Us" width={40} height={40} className=" rounded-md w-[40px] h-[40px]" />
                  <h4 className="pb-2 pt-3 " style={{color:"#f68827"}}>Americas</h4>
                  <p>CC&C Solutions Americas,<br /> Sammamish,<br /> WA 98075</p>
                </div>
                <div className="contact-info hed-txth4">
                  <Image src="/courses/location-map.png" alt="Contact Us" width={40} height={40} className=" rounded-md w-[40px] h-[40px]" />
                  <h4 className="pb-2 pt-3 " style={{color:"#f68827"}}>Europe</h4>
                  <p><strong>Dan Warfield</strong></p>
                  <p>Managing Director<br /> CC&C Europe <br />London</p>
                </div>
                <div className="contact-info hed-txth4">
                  <Image src="/courses/location-map.png" alt="Contact Us" width={40} height={40} className=" rounded-md w-[40px] h-[40px]" />
                  <h4 className="pb-2 pt-3 " style={{color:"#f68827"}}>South East Asia</h4>
                  <p><strong>Suresh GP</strong></p>
                  <p>Business Head<br />Singapore</p>
                </div>
                <div className="contact-info hed-txth4">
                  <Image src="/courses/location-map.png" alt="Contact Us" width={40} height={40} className=" rounded-md w-[40px] h-[40px]" />
                  <h4 className="pb-2 pt-3 " style={{color:"#f68827"}}>India</h4>
                  <p><strong>Ramesh Krishnan</strong></p>
                  <p>Business Head<br /> India </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#0D2F4B]">
        <div>
          <div className="flex justify-center items-center gap-20 pt-[50px] pb-8">
            <div className="flex flex-col gap-4">
              <Image
                src="/white-logo.webp"
                alt="Company Logo"
                width={130}
                height={130}
                className="w-[130px] object-contain h-[130px]"
              />
              <p className="w-[500px] text-[#AAAAAA] tracking-tighter text-justify text-[18px]">
                CC&C is a global Strategy and Architecture consulting and training organization, and a leader in Enterprise Architecture, Digital Transformation, and IT Transformation.
              </p>
              {/* Subscription Form */}
              <div className="flex gap-4 mt-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="p-2 w-[230px] rounded-md bg-white text-black placeholder-[#AAAAAA] focus:outline-none"
                />
                <button className="p-2 bg-[#195586]/60 text-white rounded-md hover:bg-[#2373A5]" style={{ borderRadius: "30px", paddingLeft: "15px", paddingRight: "15px" }}>
                  Subscribe
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-10 text-[#AAAAAA] text-[18px]">
              <a href="#">Home</a>
              <a href="#">Why us</a>
              <a href="#">Banking BAIN</a>
              <a href="#">Architecture & tools</a>
            </div>
            <div className="flex flex-col gap-4 text-[#AAAAAA] text-[18px]">
              <a href="#">Training</a>
              <a href="#">Enquire now</a>
              <a href="/contact">Contact us</a>
            </div>
            <div className="flex flex-col gap-1" style={{ marginTop: "30px" }}>
              <Image
                src="/insta.svg"
                alt="Instagram"
                width={50}
                height={50}
                className="w-[50px] h-[50px]"
              />
              <Image
                src="/fb.svg"
                alt="Facebook"
                width={50}
                height={50}
                className="w-[50px] h-[50px]"
              />
              <Image
                src="/linkedin.svg"
                alt="LinkedIn"
                width={50}
                height={50}
                className="w-[50px] h-[50px]"
              />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <hr className="lg:w-[1066px] border border-[#195586]/60" />
          </div>
          <div className="flex justify-center items-center">
            <div className="flex justify-between items-center lg:w-[1066px] pt-4 pb-4">
              <p className="text-[#AAAAAA] text-[14px]" style={{ color: "#777" }}>
                Copyright © 2025 All rights reserved
              </p>
              <div className="flex gap-10">
                <p className="text-[#AAAAAA] text-[14px]" style={{ color: "#777" }}>Privacy policy</p>
                <p className="text-[#AAAAAA] text-[14px]" style={{ color: "#777" }}>
                  Terms and conditions
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
