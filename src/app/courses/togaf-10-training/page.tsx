"use client"; // This is a client component

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
      answer: "The purpose of certification for TOGAF Practitioner is to provide validation, knowledge and comprehension of the TOGAF Standard, 10th Edition. Upon completion of this course, the candidate should be able to analyze and apply this knowledge to their day-to-day work and to successfully complete the TOGAF Foundation and Practitioner Exams.",
    },
    {
      question: "Learning Objectives",
      answer: "The course and exams focus on ensuring your ability to explain and apply these fundamental TOGAF concepts:",
      list: [
        "The Concepts of Enterprise Architecture and the TOGAF Standard",
        "The Context for Enterprise Architecture",
        "Key Definitions: The Language of Architecture",
        "The Architecture Development Method (ADM)",
        "ADM Techniques",
        "Architecture Content: ADM Outputs",
        "Applying the ADM",
        "Stakeholder Management",
        "Executing the Architecture Vision phase",
        "Business Architecture Guidelines and Techniques",
        "Developing Business, Data, Application and Technology Architectures",
        "Implementing the Architecture",
        "Architecture Governance",
        "Architecture Requirements Management",
        "Architecture Change Management",
      ],
    },
    {
      question: "Who Should Attend",
      answer: "Designed for IT professionals who need the most current TOGAF certification, and who want to learn from a genuine, experienced Enterprise Architect. Practitioners in the following roles will find it useful in their work and also helpful in moving to the next level on a natural career progression:",
      list: [
        "Experienced Developers",
        "Business Architects",
        "Enterprise Architects",
        "Program/Project Managers",
        "Business Analysts",
        "Solution Architects",
        "Application Architects",
        "Data Architects",
        "Information Architects",
        "Infrastructure Architects",
        "Security Architects",
        "Organizations that embark/implement EA projects",
      ],
    },
    {
      question: "Course Details",
      answer: "Your CC&C training, led by real practitioners and guided by 20 Years of TOGAF training experience, includes the following:",
      list: [
        "The Open Group Exam Voucher",
        "Live Course Delivery Facilitated by an Experienced Enterprise Architect",
        "Benefit of 20 Years of TOGAF Training Experience",
        "Delivery in Either a Traditional Classroom or Live Online",
        "In-Course Candidate Support Materials",
        "A Range of Self-Study Materials",
        "After-Course Individual Support for Exam Prep and General Advice",
        "Modeling Analyst",
        "Ask us about tailored corporate training aligned to your timetables and business focus.",
      ],
    },
    {
      question: "Examination",
      answer: "Certification is achieved by passing two examinations (taken separately or as a combined examination).",
      list: [
        "Upon course completion, each candidate receives the exam voucher and instructions on how to schedule their exam time and location. Exams can be taken online or in an authorized Pearson Vue test center.",
        "Examination Name: TOGAF Foundation",
        "Examination Type: Multiple-choice",
        "40 questions/60 minutes",
        "Supervised: YES",
        "Open Book: NO",
        "Examination Name: TOGAF Practitioner",
        "Examination Type: Complex multiple-choice scenario-based examination",
        "8 questions/90 minutes",
        "Supervised: YES",
        "Open Book: YES",
        "Individuals who have obtained the TOGAF® Practitioner certification and who have satisfactorily completed the TOGAF Enterprise Architecture Practitioner Learning Studies (included in this training) will then be eligible to apply for the TOGAF Applied Practitioner badge.",
      ],
    },
  ];

  const pathname = usePathname(); // Get current route

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
    <div className="bg-[url(/courses/bian-foundation/hero.png)] bg-cover bg-right-bottom h-[550px] font-sans">
      <div className={`flex justify-center items-center fixed w-full z-[999999] transition-transform duration-300 ${isVisible ? "block" : "hidden"}`}>
        <div className="w-full mx-auto flex justify-center gap-20 items-center h-[88px] relative bg-white shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)] overflow-hidden">
          <Image className="w-[90.49px] h-16" src="/logo.png" alt="Company Logo" width={90.49} height={64} />
          <div className="h-6 inline-flex items-center gap-8">
            {[
              { href: "#", label: "About" },
              { href: "/training-portfolio", label: "Training" },
              { href: "/partners", label: "Partners" },
              { href: "#", label: "Consulting" },
              { href: "/bian", label: "BIAN" },
              { href: "/contact", label: "Contact" },
            ].map((item) => (
              <Link key={item.href} href={item.href}>
                <div className={`relative justify-start text-lg font-normal leading-normal ${pathname === item.href ? "text-[#0c71c3]" : "text-black"}`}>
                  {item.label}
                </div>
              </Link>
            ))}
          </div>
          <div className="h-11 px-5 py-3 bg-[#0c71c3] rounded-[100px] inline-flex justify-center items-center gap-2.5">
            <div className="relative justify-start text-white text-base font-semibold leading-tight">GET IN TOUCH</div>
          </div>
        </div>
      </div>
      <section data-aos="fade-up" className="flex flex-col items-center pt-[200px] justify-center text-center px-6 py-20 hed-txth1">
        <h1 className="text-4xl sm:text-[72px] font-extrabold text-gray-900 leading-[90px]">TOGAF® Practitioner</h1>
        <p className="mt-3 text-gray-600 max-w-[1165px] text-[24px]">Based on the Updated TOGAF® Standard, 10th Edition</p>
        <button className="mt-[30px] flex items-center justify-center  bg-[#0C71C3] text-white w-[280px] py-3 rounded-full text-lg font-semibold shadow-lg transition">
          <span>
            <Image className="" src="/arrow.svg" alt="Arrow Icon" width={40} height={40} />
          </span>
          View IT4IT™ Calendar
        </button>
      </section>
      <section className="mb-10 flex flex-col justify-center items-center gap-10 mt-[100px] lg:w-[1190px] mx-auto">
        <div className="text-center hed-txth2">
          <h2 className="text-[#262626] font-bold md:text-[40px] text-[30px] text-center">TOGAF is a registered trademark of The Open Group</h2>
          <p className="text-[20px] leading-[35px] mt-3">TOGAF® Practitioner is the most up-to-date TOGAF certification, reflecting the many enhancements and updates found in The TOGAF Standard, 10th Edition, released in 2022.</p>
          <p className="text-[20px] leading-[35px] mt-3 ">The core TOGAF Body of Knowledge has been extended to include modern concerns such as agile architecture, digital transformation and the Digital Enterprise, capability-based planning, fully integrated risk and security, and much more.</p>
          <p className="text-[20px] leading-[35px] mt-3">Earn your TOGAF Practitioner certificate with our expert trainers: Experienced architects who will teach you not only the What, but also the Why of Enterprise Architecture.</p>
        </div>
        <div className="lg:flex lg:flex-row mt-[88px] lg:justify-center w-full lg:items-center flex flex-col justify-center items-center gap-10 hed-txth2">
          <div className="flex flex-col  justify-start items-start lg:max-w-[950px]">
            <h2 className="text-[#262626] font-bold md:text-[30px] text-[30px] text-center">Why TOGAF Certification?</h2>
            <div className="flex gap-4 pb-3">
              <Image className="w-[18px] h-[18px] mt-2" src="/courses/bian-foundation/bianstar.svg" alt="Star Icon" width={30} height={30} />
              <p className="text-[24px] text-[#393939]">The TOGAF® Standard is the open Enterprise Architecture standard used by the world’s leading organizations to effectively align IT investment with business goals to optimize business value.</p>
            </div>
            <div className="flex gap-4 pb-3">
              <Image className="w-[18px] h-[18px] mt-2" src="/courses/bian-foundation/bianstar.svg" alt="Star Icon" width={30} height={30} />
              <p className="text-[24px] text-[#393939]">TOGAF certification is a requirement for many job roles, and is often the key to better compensation and advancement opportunities. Understanding the language and methods of Enterprise Architecture is important for success in many related roles.</p>
            </div>
          </div>
          <div className="lg:w-[380px] lg:h-[340px] bg-[#ECF6FE] border-[3px] border-[#0C71C3] p-10 hed-txth4 rounded-lg flex flex-col gap-5 quick-facts" style={{width:"70%"}}>
            <h4 className="text-[20px] text-[#393939]">Quick facts</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-20">
                <p className="text-[18px] text-[#393939]">Duration:</p>
                <p className="text-[#262626] text-[18px]">2 days</p>
              </div>
              <div className="flex items-center gap-5">
                <p className="text-[18px] text-[#393939]">Delivery method:</p>
                <p className="text-[#262626] text-[18px]">Virtual Online</p>
              </div>
              <div className="flex items-center gap-11">
                <p className="text-[18px] text-[#393939]">Prerequisites:</p>
                <p className="text-[#262626] text-[18px]">None</p>
              </div>
              <div className="flex items-center gap-12">
                <p className="text-[18px] text-[#393939]">Examination:</p>
                <p className="text-[#262626] text-[18px]">Yes</p>
              </div>
              <div className="flex items-center gap-11">
                <p className="text-[18px] text-[#393939]">Certification:</p>
                <p className="text-[#262626] text-[18px]">Yes</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex lg:flex-row mt-[88px] w-full flex flex-col justify-center gap-10 ">
          <div className="lg:w-[380px] lg:h-[340px] bg-[#0d7dd8] border-[3px] border-[#0C71C3] p-10 rounded-lg flex flex-col gap-5 quick-facts1 " style={{width:"65%"}}>
            <h2 className="text-[20px] text-[#fff]">Want to Upgrade Your TOGAF 9 Certification?</h2>
            <p className="text-[#fff]">TOGAF 9 certified? You can upgrade to TOGAF Practitioner certification with a two-day course and Practitioner exam. Ask us how.</p>
            <button className="px-5 py-2 bg-[#FF7D33] hover:bg-[#0C71C3] text-white " style={{borderRadius:"30px", width:"50%"}}>GET DETAILS</button>
          </div>
          <div className="flex flex-col  justify-start items-start lg:max-w-[950px] hed-txth2">
            <h3 className="text-[#262626] font-bold md:text-[30px] text-[30px] text-center " style={{paddingBottom:"25px"}}>Why TOGAF Certification?</h3>
            <div className="flex gap-4 pb-3">
              <Image className="w-[18px] h-[18px] mt-2" src="/courses/bian-foundation/bianstar.svg" alt="Star Icon" width={30} height={30} />
              <p className="text-[24px] text-[#393939]">Used by the world’s leading enterprises to certify a common body of core knowledge about the methodology and framework.</p>
            </div>
            <div className="flex gap-4 pb-3">
              <Image className="w-[18px] h-[18px] mt-2" src="/courses/bian-foundation/bianstar.svg" alt="Star Icon" width={30} height={30} />
              <p className="text-[24px] text-[#393939]">A trusted, vendor-neutral, globally recognized and portable credential.</p>
            </div>
            <div className="flex gap-4 pb-3">
              <Image className="w-[18px] h-[18px] mt-2" src="/courses/bian-foundation/bianstar.svg" alt="Star Icon" width={30} height={30} />
              <p className="text-[24px] text-[#393939]">Valuable in demonstrating to employers and peers your commitment to enterprise architecture as a discipline.</p>
            </div>
            <div className="flex gap-4 pb-3">
              <Image className="w-[18px] h-[18px] mt-2" src="/courses/bian-foundation/bianstar.svg" alt="Star Icon" width={30} height={30} />
              <p className="text-[24px] text-[#393939]">An outstanding career move and a foundational certification in the career of any Enterprise Architect.</p>
            </div>
          </div>
        </div>
        <p className="text-[18px] text-[#393939] ">The TOGAF® Practitioner certification demonstrates your commitment to professional development and provides credibility to employers.</p>
        <div className="md:flex md:flex-row mt-[60px] md:justify-between w-full md:items-center flex flex-col justify-center items-center gap-5 button-secs">
          <button className="px-5 py-2 bg-[#FF7D33] hover:bg-[#0C71C3] text-white">View TOGAF® Calendar</button>
          <button className="px-5 py-2 bg-[#FF7D33] hover:bg-[#0C71C3] text-white">DOWNLOAD BROCHURE</button>
          <button className="px-5 py-2 bg-[#FF7D33] hover:bg-[#0C71C3] text-white">OTHER COURSES</button>
          <button className="px-5 py-2 bg-[#FF7D33] hover:bg-[#0C71C3] text-white">ENQUIRE</button>
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
                  {item.list && (
                    <ul className="flex flex-col gap-3 text-[#525252] text-[18px] -ml-2 p-3 list-disc">
                      {item.list.map((listItem, listIndex) => (
                        <li key={listIndex}>{listItem}</li>
                      ))}
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
