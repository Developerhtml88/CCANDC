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
      question: "Benefits",
      answer: "You will learn to make practical use of the ArchiMate® 3.2 modeling language for developing enterprise architecture models, and gain knowledge of the terminology, structure, and concepts needed to pass the ArchiMate® 3 Foundation and Certification examination.",
    },
    {
      question: "Course Details",
      answer: "BIAN Foundation certification demonstrates your knowledge of the BIAN banking architecture standard. Certification addresses educational Levels 1 and 2 (according to Bloom’s Revised Taxonomy):",
      list: [
        "Introduction to ArchiMate® 3.2 specification",
        "Walk-through of notation, terminology, structure, and concepts",
        "Hands-on exercises using modeling tools",
        "Case study approach with end-to-end application of ArchiMate modeling",
        "Group discussions",
        "Practice exams",
      ],
    },
    {
      question: "Who Should Attend",
      answer: "",
      list: [
        "Enterprise Architects",
        "Business Architects",
        "Application / Software Architects",
        "Solution Architects",
        "System Architects",
        "Data Architects, Information Architects",
        "Technology Architects",
        "Program and Project Managers",
        "Anyone with an interest in modeling",
        "Anyone who consumes IT architecture specifications",
      ],
    },
    {
      question: "Topics Covered",
      answer: "",
      list: [
        "Course Introduction",
        "Basic Concepts",
        "Language Structure",
        "Generic Metamodel",
        "Modeling Relationships",
        "Modeling Motivation",
        "Modeling Strategy",
        "The Business Layer",
        "The Application Layer",
        "The Technology Layer",
        "Modeling Physical Elements",
        "Cross-Layer Modeling",
        "Modeling Transformation",
        "Addressing Stakeholder Concerns Using Viewpoints and Views",
        "Language Customization Mechanisms",
        "Case Studies and Hands-on Exercises",
        "Certification Exam Preparation for Level 1 and Level 2 Exams",
      ],
    },
    {
      question: "Examination",
      answer: "ArchiMate® 3 Part 1 Exam",
      list: [
        "Exam Summary",
        "Exam Name: ArchiMate® 3 Part 1 Exam",
        "Exam Number: OGA-031 – English",
        "Qualification upon passing: ArchiMate 3 Foundation (and partial credit towards the ArchiMate 3 Practitioner qualification)",
        "Delivered at: Authorized Examination Provider Test Centers and remotely by OnVUE delivery",
        "Prerequisites: None",
        "Supervised: Yes",
        "Open Book: No",
        "Exam type: Multiple choice",
        "Number of questions: 40",
        "Pass score: 60% (24 out of 40 questions)",
        "Time limit: 60 minutes",
        "ArchiMate® 3 Part 2 Exam",
        "Exam Summary",
        "Exam Name: ArchiMate® 3 Part 2 Exam",
        "Exam Number: OGA-032 – English",
        "Qualification upon passing: ArchiMate 3 Practitioner",
        "Delivered at: Authorized Examination Provider Test Centers and remotely by Pearson VUE OnVUE delivery",
        "Prerequisites: ArchiMate 3 Foundation or a pass of the ArchiMate 3 Part 1 Exam on the same day at the same test center",
        "Supervised: Yes",
        "Open Book: Yes, an electronic copy of the ArchiMate 3 Specification is built into the exam. No hardcopy books may be used at test centers.",
        "Exam type: Scenario Based, Complex Multiple Choice",
        "Number of questions: 8",
        "Pass score: 65% (26 out of 40 points)",
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
                <div className="relative justify-start text-white text-base font-semibold leading-tight text-[15px]">
                  GET IN TOUCH
                </div>
              </div>
            </div>
          </div>
      </div>
      <section data-aos="fade-up" className="flex flex-col items-center pt-[200px] justify-center text-center px-6 py-20 hed-txth1">
        <h1 className="text-4xl sm:text-[72px] font-extrabold text-gray-900 leading-[90px]">ArchiMate® 3 from CC and C</h1>
        <p className="mt-3 text-gray-600 max-w-[1165px] text-[24px]">
          ArchiMate is the preferred modeling language of TOGAF®. ArchiMate 3.2 is a major upgrade, with many new and changed components. Your trainer is an expert architect who understands not just what ArchiMate is, but how it is used.
        </p>
        <button className="mt-[30px] flex items-center justify-center gap-2 bg-[#0C71C3] text-white w-[400px] py-3 rounded-full text-lg font-semibold shadow-lg transition">
          <span>
            <Image className="" src="/arrow.svg" alt="Arrow Icon" width={40} height={40} />
          </span>
          VIEW ARCHIMATE® 3.2 CALENDAR  
        </button>
      </section>
      <section className="mb-10 flex flex-col justify-center items-center gap-10 mt-[100px] lg:w-[1190px] mx-auto">
        <div className="text-center hed-txth2">
          <h2 className="text-[#262626] font-bold md:text-[50px] text-[30px] text-center be-vietnam-bold">ArchiMate is a registered trademark of The Open Group</h2>
          <p className="text-[24px]">ArchiMate® 3.2 as an open and independent modeling language is an essential skill that all IT architects must have is the ability to communicate architectural ideas in a formal way.</p>
        </div>
        <div className="flex justify-between items-center mt-[67px] w-full">
          <div>
            <Image className="" src="/courses/archimate-3-level/opengp-new-07.webp" alt="Open Group Logo" width={200} height={100} />
          </div>
          <div className="flex flex-col gap-4 lg:max-w-[950px] hed-txth2">
            <div className="flex items-start gap-4">
              <Image className="mt-2" src="/courses/bian-foundation/bianstar.svg" alt="Star Icon" width={18} height={18} />
              <p className="text-[24px] text-[#393939]">Participants should be able to make practical use of the ArchiMate® 3.2 modeling language for developing enterprise architecture models.</p>
            </div>
            <div className="flex items-start gap-4">
              <Image className="mt-2" src="/courses/bian-foundation/bianstar.svg" alt="Star Icon" width={18} height={18} />
              <p className="text-[24px] text-[#393939]">Participants should have gained the knowledge of the terminology, structure, and concepts needed to pass the ArchiMate® 3.2 Foundation and Certification examination.</p>
            </div>
          </div>
        </div>
        <div className="lg:flex lg:flex-row mt-[88px] lg:justify-center w-full lg:items-center flex flex-col justify-center items-center gap-10">
          <div className="flex flex-col gap-3 justify-start items-start lg:max-w-[950px] hed-txth2">
            <div className="flex items-start gap-4">
              <Image className="-[18px] h-[18px] mt-2" src="/courses/bian-foundation/bianstar.svg" alt="Star Icon" width={30} height={30} />
              <p className="text-[24px] text-[#393939]">Your trainer is an expert architect who has led large-scale transformation work in the real world.</p>
            </div>
            <div className="flex items-start gap-4">
              <Image className="w-[18px] h-[18px] mt-2" src="/courses/bian-foundation/bianstar.svg" alt="Star Icon" width={30} height={30} />
              <p className="text-[24px] text-[#393939]">We have been IT4IT Forum participants and leaders for years: We are the experts.</p>
            </div>
          </div>
          <div className="lg:w-[380px] lg:h-[340px] bg-[#ECF6FE] border-[3px] border-[#0C71C3] p-10 rounded-lg flex flex-col gap-5 quick-facts hed-txth4" style={{width:"35%;"}}>
            <h4 className="text-[20px] text-[#393939]">Quick facts</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-20">
                <p className="text-[18px] text-[#393939]">Duration:</p>
                <p className="text-[#262626] text-[18px]">3 Days</p>
              </div>
              <div className="flex items-center gap-5">
                <p className="text-[18px] text-[#393939]">Delivery method:</p>
                <p className="text-[#262626] text-[18px]">Virtual Online</p>
              </div>
              <div className="flex items-center gap-12">
                <p className="text-[18px] text-[#393939]">Prerequisites:</p>
                <p className="text-[#262626] text-[18px]">None</p>
              </div>
              <div className="flex items-center gap-9">
                <p className="text-[18px] text-[#393939]">Exam Voucher:</p>
                <p className="text-[#262626] text-[18px]">Yes</p>
              </div>
              <div className="flex items-center gap-11">
                <p className="text-[18px] text-[#393939]">Certification:</p>
                <p className="text-[#262626] text-[18px]">Yes</p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex md:flex-row mt-[60px] md:justify-between w-full md:items-center flex flex-col justify-center items-center gap-5 button-secs">
          <button className="px-5 py-2 bg-[#FF7D33] hover:bg-[#0C71C3] text-white be-vietnam-medium">VIEW ARCHIMATE® 3.2 CALENDAR</button>
          <button className="px-5 py-2 bg-[#FF7D33] hover:bg-[#0C71C3] text-white be-vietnam-medium">DOWNLOAD BROCHURE</button>
          <button className="px-5 py-2 bg-[#FF7D33] hover:bg-[#0C71C3] text-white be-vietnam-medium">OTHER COURSES</button>
          <button className="px-5 py-2 bg-[#FF7D33] hover:bg-[#0C71C3] text-white be-vietnam-medium">ENQUIRE</button>
        </div>
      </section>
      <section className=" flex flex-col gap-5 mt-[120px] pt-[70px] bg-[#FAFAFA]" style={{paddingBottom:"100px"}}>
        <div className="max-w-[1180px] mx-auto mt-[64px]">
          <div className="space-y-6 p-2 fqa-sec">
            {faq.map((item, index) => (
              <div key={index} className= {`rounded-xl p-6 ${selectedFAQ === index ? "border-4 border-[#0C71C3]" : "border border-[#EEEEEE]"} bg-[#EEEEEE]`}>
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
         <a href="/contact"> <button className="flex items-center justify-center gap-3 bg-[#0C71C3] hover:bg-blue-700 px-2 w-[190px] py-2 text-white rounded-full text-[20px]">
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
