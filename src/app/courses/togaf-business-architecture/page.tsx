"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../../css/style.css";

const Page: React.FC = () => {
  const [selectedFAQ, setSelectedFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setSelectedFAQ(selectedFAQ === index ? null : index);
  };

  const faq = [
    {
      question: "Course Objective",
      answer:
        "The purpose of the TOGAF Business Architecture Level 1 credential is to provide validation that individuals have knowledge and understanding of Business Modeling, Business Capabilities, TOGAF Business Scenarios, Information Mapping, and Value Streams and how to apply them in development of a Business Architecture based on the TOGAF® Standard, Version 9.2.",
      list1: "The learning objectives for this credential focus on knowledge and comprehension. This credential leads to the award of an Open Badge",
    },
    {
      question: "Benefits of Attending",
      answer:
        "Individuals who require knowledge and understanding of TOGAF Business Architecture techniques",
      list1: "Professionals who are working in roles associated with an architecture project such as those responsible for planning, execution, development, delivery, and operation",
      list2: "Architects who are looking to achieve the TOGAF Business Architecture credential",
      list3: "Architects who want to specialize in development of a Business Architecture based on the TOGAF Standard, Version 9.2",
    },
    {
      question: "Who Should Attend?",
      answer: "",
      list1: "Enterprise Architects",
      list2: "Business Architects",
      list3: "Data / Information Architects",
      list4: "Application Architects",
      list5: "Infrastructure Architects",
      list6: "Security Architects",
      list7: "Program / Project Managers",
      list8: "Business Analysts",
      list9: "Development Team Leaders",
      list10: "Experienced Developers",
    },
    {
      question: "How to Earn the Open Badge",
      answer: "",
      list1: "The Open Group is pleased to announce the availability of our Open Badge program for the professional certification programs. To earn an open badge TOGAF Business Architecture Level 1 credential you must attend an accredited TOGAF Business Architecture Level 1 classroom or virtual training and pass an online assessment consisting of 30 multiple-choice questions.",
      list2: "Open Badges are a means for an individual to display, and for an organization easily to verify, certifications, achievements and credentials in a very visual manner online. For example, digital badges are used in popular social media platforms such as LinkedIn, Twitter and Facebook. You may also embed badges into your websites, e-mail footers or resumes.",
      list3: "These credentials are represented with a digital image which contains verified metadata that describes an individual’s qualifications and the process required to earn them. A credential is a qualification, achievement, quality, or aspect of a person’s background, especially when used to indicate their suitability for something.",
    },
    {
      question: "Certification Examination",
      answer: "",
      list1: "The credential is only awarded by passing the examination.",
      list2: "Examination Name TOGAF Business Architecture Part 1",
      list3: "Examination Type Simple multiple-choice question format, 30 questions/45 minutes",
      list4: "Supervised Yes",
      list5: "Open Book No",
      list6: "Delivery 1. At your home or in your office using Online Proctored delivery.",
      list7: "2. Pearson VUE test centers.",
      list8: "3. Authorized accredited training organizations are able to provide access to this examination on-site.",
    },
  ];

  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsVisible(currentScrollPos < prevScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div className="bg-[url(/courses/bian-foundation/hero.png)] bg-cover bg-right-bottom h-[600px] font-sans">
      <div className={`flex justify-center items-center fixed w-full z-[999999] transition-transform duration-300 ${isVisible ? "block" : "hidden"}`}>
      <div className="w-full mx-auto grid grid-cols-12 items-center h-[88px] relative bg-white shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)] overflow-hidden header-wd px-[50px]">
  <div className="col-span-2 flex justify-center items-center">
    <Image
      className="w-[90.49px] h-16"
      src="/logo.png"
      alt="Company Logo"
      width={90.49}
      height={64}
    />
  </div>

  <div className="col-span-8 h-6 inline-flex items-center justify-center gap-8">
    {[
      { href: "#", label: "About" },
      { href: "/training-portfolio", label: "Training" },
      { href: "/", label: "Partners" },
      { href: "#", label: "Consulting" },
      { href: "/", label: "BIAN" },
      { href: "#", label: "Partners" },
      { href: "/contact", label: "Contact" },
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

  <div className="col-span-2 flex justify-center items-center">
    <div className="h-11 px-5 py-3 bg-[#0c71c3] rounded-[100px] inline-flex justify-center items-center gap-2.5">
      <div className="relative justify-start text-white font-semibold leading-tight text-[15px]">
        GET IN TOUCH
      </div>
    </div>
  </div>
</div>

      </div>
      <section data-aos="fade-up" className="flex flex-col items-center pt-[200px] justify-center text-center px-6 py-20 hed-txth1SS">
        <h1 className="text-4xl sm:text-[72px] font-extrabold text-gray-900 leading-[90px]">TOGAF® Business Architecture</h1>
        <h4 className="mt-3 text-gray-600 max-w-[1165px] text-[24px]">Earn your hands on practical Business Architecture certificate with our expert training.</h4>
        <button className="mt-[30px] flex items-center justify-center gap-2 bg-[#0C71C3] text-white w-[200px] py-3 rounded-full text-lg font-semibold shadow-lg transition">
          <span>
            <Image className="" src="/arrow.svg" alt="Company Logo" width={40} height={40} />
          </span>
          Enquire Now
        </button>
      </section>
      <section className="mb-10 flex flex-col justify-center items-center gap-10 mt-[100px] lg:w-[1190px] mx-auto">
        <div className="text-center hed-txth2">
          <h2 className="text-[#262626] font-bold md:text-[50px] text-[30px] text-center t be-vietnam-bold">TOGAF® Business Architecture</h2>
          <p>Individuals who have earned this credential have knowledge and understanding of Business Modeling, Business Capabilities, Business Scenarios, Information Mapping, and Value Streams and how to apply them in development of a Business Architecture based on the TOGAF Standard, Version 9.2.</p>
        </div>
        <div className="lg:flex lg:flex-row mt-[88px] lg:justify-center w-full lg:items-center flex flex-col justify-center items-center gap-10">
          <div className="flex flex-col  justify-start items-start lg:max-w-[950px] hed-txth2">
            <h2 className="text-[#262626] font-bold md:text-[40px] text-[30px]">Business Architecture</h2>
            <p className="text-[24px] text-[#393939] pb-3">The purpose of the TOGAF Business Architecture Level 1 credential, is to provide validation that the candidate has gained an acceptable level of knowledge and understanding of</p>
            <div className="flex items-center gap-4 pb-3">
              <Image className="w-[18px] h-[18px]" src="/courses/bian-foundation/bianstar.svg" alt="bian" width={30} height={30} />
              <p className="be-vietnam-medium text-[24px] text-[#393939]">Business Modeling</p>
            </div>
            <div className="flex items-center gap-4 pb-3">
              <Image className="w-[18px] h-[18px]" src="/courses/bian-foundation/bianstar.svg" alt="bian" width={30} height={30} />
              <p className="be-vietnam-medium text-[24px] text-[#393939]">Business Capabilities</p>
            </div>
            <div className="flex items-center gap-4 pb-3">
              <Image className="w-[18px] h-[18px]" src="/courses/bian-foundation/bianstar.svg" alt="bian" width={30} height={30} />
              <p className="be-vietnam-medium text-[24px] text-[#393939]">Information Mapping</p>
            </div>
            <div className="flex items-center gap-4 pb-3">
              <Image className="w-[18px] h-[18px]" src="/courses/bian-foundation/bianstar.svg" alt="bian" width={30} height={30} />
              <p className="be-vietnam-medium text-[24px] text-[#393939]">Value Streams</p>
            </div>
            <div className="flex items-center gap-4 pb-3">
              <Image className="w-[18px] h-[18px]" src="/courses/bian-foundation/bianstar.svg" alt="bian" width={30} height={30} />
              <p className="be-vietnam-medium text-[24px] text-[#393939]">Business Scenarios</p>
            </div>
            <p className="text-[24px]">and how to apply them in development of a Business Architecture based on the TOGAF Standard, Version 9.2.</p>
          </div>
          <div className="lg:w-[380px] lg:h-[340px] bg-[#ECF6FE] border-[3px] border-[#0C71C3] p-10 rounded-lg flex flex-col gap-5 quick-fatcs hed-txth4" style={{width:"55% !important"}}>
            <h4 className="be-vietnam-pro-semibold text-[20px] text-[#393939]">Quick facts</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-20">
                <p className="text-[18px] text-[#393939]">Duration:</p>
                <p className="text-[#262626] be-vietnam-medium text-[18px]">1 Day</p>
              </div>
              <div className="flex items-center gap-5">
                <p className="text-[18px] text-[#393939]">Delivery method:</p>
                <p className="text-[#262626] be-vietnam-medium text-[18px]">Virtual Online</p>
              </div>
              <div className="flex items-center gap-11">
                <p className="text-[18px] text-[#393939]">Prerequisites:</p>
                <p className="text-[#262626] be-vietnam-medium text-[18px]">None</p>
              </div>
              <div className="flex items-center gap-8">
                <p className="text-[18px] text-[#393939]">Exam Voucher:</p>
                <p className="text-[#262626] be-vietnam-medium text-[18px]">Yes</p>
              </div>
              <div className="flex items-center gap-11">
                <p className="text-[18px] text-[#393939]">Certification:</p>
                <p className="text-[#262626] be-vietnam-medium text-[18px]">Yes</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-[67px] w-full">
          <div>
            <Image className="" src="/courses/archimate-3-level/BizArchlogo5.jpg" alt="bian" width={188} height={188} />
          </div>
          <div className="flex flex-col  lg:max-w-[950px] hed-txth2">
            <h2 className="text-[#262626] font-bold md:text-[40px] text-[30px]">The Open Group TOGAF certification is:</h2>
            <div className="flex gap-4 pb-3">
              <Image className="" src="/courses/bian-foundation/bianstar.svg" alt="bian" width={18} height={18} />
              <p className="be-vietnam-medium text-[24px] text-[#393939]">Attend TOGAF Business Architecture Level 1 and acquire this essential new badge from The Open Group</p>
            </div>
            <div className="flex items-start gap-4 pb-3">
              <Image className="mt-2" src="/courses/bian-foundation/bianstar.svg" alt="bian" width={18} height={18} />
              <p className="be-vietnam-medium text-[24px] text-[#393939]">Individuals who have earned this credential have knowledge and understanding of Business Modeling, Business Capabilities, Business Scenarios, Information Mapping, and Value Streams and how to apply them in development of a Business Architecture based on the TOGAF Standard, Version 9.2.</p>
            </div>
          </div>
        </div>
        <div className="md:flex md:flex-row mt-[60px] md:justify-between w-full md:items-center flex flex-col justify-center items-center gap-5 button-secs">
          <button className="px-5 py-2 bg-[#FF7D33] hover:bg-[#0C71C3] text-white be-vietnam-medium">DOWNLOAD BROCHURE</button>
          <button className="px-5 py-2 bg-[#FF7D33] hover:bg-[#0C71C3] text-white be-vietnam-medium">OTHER COURSES</button>
          <button className="px-5 py-2 bg-[#FF7D33] hover:bg-[#0C71C3] text-white be-vietnam-medium">ENQUIRE</button>
        </div>
      </section>
      <section className=" flex flex-col gap-5 mt-[120px] pt-[70px] bg-[#FAFAFA]" style={{paddingBottom:"100px"}}>
        <div className="max-w-[1180px] mx-auto mt-[64px]">
          <div className="space-y-6 p-2 fqa-sec">
            {faq.map((item, index) => (
              <div key={index} className={`rounded-xl p-6 ${selectedFAQ === index ? "border-4 border-[#0C71C3]" : "border border-[#EEEEEE]"} bg-[#EEEEEE]`}>
                <button onClick={() => toggleFAQ(index)} className="inline-flex items-center justify-between w-full text-start text-gray-800 md:text-xl font-medium">
                  {item.question}
                  {selectedFAQ !== index ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="#0C71C3" strokeWidth="1.5" strokeLinejoin="round" />
                      <path d="M12 8V16M16 12H8" stroke="#0C71C3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 12H8" stroke="#0C71C3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="#0C71C3" strokeWidth="1.5" />
                    </svg>
                  )}
                </button>
                <motion.div initial={{ height: 0, opacity: 0 }} animate={selectedFAQ === index ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="overflow-hidden flex flex-col gap-5">
                  <p className="text-[#525252] text-lg mt-4">{item.answer}</p>
                  {(item.list1 || item.list2 || item.list3 || item.list4 || item.list5 || item.list6 || item.list7 || item.list8 || item.list9 || item.list10) && (
                    <ul className="flex flex-col gap-3 text-[#525252] text-[18px] -ml-2 p-3 list-disc">
                      {item.list1 && <li>{item.list1}</li>}
                      {item.list2 && <li>{item.list2}</li>}
                      {item.list3 && <li>{item.list3}</li>}
                      {item.list4 && <li>{item.list4}</li>}
                      {item.list5 && <li>{item.list5}</li>}
                      {item.list6 && <li>{item.list6}</li>}
                      {item.list7 && <li>{item.list7}</li>}
                      {item.list8 && <li>{item.list8}</li>}
                      {item.list9 && <li>{item.list9}</li>}
                      {item.list10 && <li>{item.list10}</li>}
                    </ul>
                  )}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center mt-10">
          <a href="/contact"><button className="flex items-center justify-center gap-3 bg-[#0C71C3] hover:bg-blue-700 px-2 w-[190px] py-2 text-white rounded-full text-[20px]">
            <Image className="" src="/courses/bian-foundation/button.svg" alt="Contact Button Icon" width={40} height={40} />
            Contact us
          </button></a>
        </div>
      </section>
     <footer className="bg-[#0D2F4B]">
             <div>
               <div className="flex justify-center items-center gap-20 pt-[50px] pb-8">
                 <div className="flex flex-col gap-4">
                   <Image
                     src="/white-logo.webp"
                     alt="img"
                     width={130}
                     height={130}
                     className="w-[130px] object-contain h-[130px]"
                   />
                   <p className="w-[500px] text-[#AAAAAA] tracking-tighter text-justify text-[18px]">
                     CC&C is a global Strategy and Architecture consulting and
                     training organization, and a leader in Enterprise Architecture,
                     Digital Transformation, and IT Transformation.
                   </p>
                   {/* Subscription Form */}
                   <div className="flex  gap-4 mt-4">
                     <input
                       type="email"
                       placeholder="Enter your email"
                       className="p-2 w-[230px] rounded-md bg-white text-black placeholder-[#AAAAAA] focus:outline-none"
                     />
                     <button className="p-2 bg-[#195586]/60     text-white rounded-md hover:bg-[#2373A5]" style={{borderRadius:"30px", paddingLeft:"15px", paddingRight:"15px"}}>
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
                   <a href="/training-portfolio">Training</a>
                   <a href="#">Enquire now</a>
                   <a href="/contact">Contact us</a>
                 </div>
                 <div className="flex flex-col gap-1 " style={{marginTop:"30px"}}>
                   <Image
                     src="/insta.svg"
                     alt="instragram"
                     width={50}
                     height={50}
                     className="w-[50px] h-[50px]"
                   />
                   <Image
                     src="/fb.svg"
                     alt="facebook"
                     width={50}
                     height={50}
                     className="w-[50px] h-[50px]"
                   />
                   <Image
                     src="/linkedin.svg"
                     alt="linkedin"
                     width={50}
                     height={50}
                     className="w-[50px] h-[50px]"
                   />
                 </div>
               </div>
               <div className="flex justify-center items-center">
                 <hr className=" lg:w-[1066px] border border-[#195586]/60" />
               </div>
               <div className="flex justify-center items-center">
                 <div className="flex justify-between items-center  lg:w-[1066px]  pt-4 pb-4">
                   <p className="text-[#AAAAAA] text-[14px]" style={{color:"#777"}}>
                     Copyright@2025 All rights reserved
                   </p>
                   <div className="flex gap-10">
                     <p className="text-[#AAAAAA] text-[14px]" style={{color:"#777"}}>Privacy policy</p>
                     <p className="text-[#AAAAAA] text-[14px]" style={{color:"#777"}}>
                       Terms and conditions
                     </p>
                   </div>
                 </div>
               </div>
             </div>
           </footer>
    </div>
  );
};

export default Page;
