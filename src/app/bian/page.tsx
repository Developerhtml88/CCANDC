"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../css/style.css";
import {
  FaCogs,
  FaBolt,
  FaLayerGroup,
  FaPuzzlePiece,
  FaChartLine,
  FaStream,
} from "react-icons/fa";
export default function Bian() {
  const pathname = usePathname(); // Get current route
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  useEffect(() => {}, []);
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
  const testimonials = [
    {
      name: "ANZ BANK",
      title: "Chief Architect, AXA Japan",
      review:
        "ANZ has discovered CC & C Solutions to be an invaluable partner in our BIAN journey. Their extensive knowledge and collaborative approach have contributed significantly to our success. The guidance, training, and support they provide are essential to our successful implementation",
      rating: 5,
    },
    {
      name: "Albert Flores",
      title: "Chief Architect, AXA Japan",
      review:
        "We engaged CC and C Solutions for providing enterprise/solution architecture training. Their experts have a very good blend of domain knowledge / working experiences and they are leading consultants in strategy & architecture.",
      rating: 5,
    },
    {
      name: "Guy Hawkins",
      title: "Chief Architect, AXA Japan",
      review:
        "We engaged CC and C Solutions for providing enterprise/solution architecture training. Their experts have a very good blend of domain knowledge / working experiences and they are leading consultants in strategy & architecture.",
      rating: 5,
    },
    {
      name: "Albert Flores",
      title: "Chief Architect, AXA Japan",
      review:
        "We engaged CC and C Solutions for providing enterprise/solution architecture training. Their experts have a very good blend of domain knowledge / working experiences and they are leading consultants in strategy & architecture.",
      rating: 5,
    },
    {
      name: "Guy Hawkins",
      title: "Chief Architect, AXA Japan",
      review:
        "We engaged CC and C Solutions for providing enterprise/solution architecture training. Their experts have a very good blend of domain knowledge / working experiences and they are leading consultants in strategy & architecture.",
      rating: 5,
    },
    {
      name: "Albert Flores",
      title: "Chief Architect, AXA Japan",
      review:
        "We engaged CC and C Solutions for providing enterprise/solution architecture training. Their experts have a very good blend of domain knowledge / working experiences and they are leading consultants in strategy & architecture.",
      rating: 5,
    },
    {
      name: "Guy Hawkins",
      title: "Chief Architect, AXA Japan",
      review:
        "We engaged CC and C Solutions for providing enterprise/solution architecture training. Their experts have a very good blend of domain knowledge / working experiences and they are leading consultants in strategy & architecture.",
      rating: 5,
    },
    {
      name: "Albert Flores",
      title: "Chief Architect, AXA Japan",
      review:
        "We engaged CC and C Solutions for providing enterprise/solution architecture training. Their experts have a very good blend of domain knowledge / working experiences and they are leading consultants in strategy & architecture.",
      rating: 5,
    },
    {
      name: "Guy Hawkins",
      title: "Chief Architect, AXA Japan",
      review:
        "We engaged CC and C Solutions for providing enterprise/solution architecture training. Their experts have a very good blend of domain knowledge / working experiences and they are leading consultants in strategy & architecture.",
      rating: 5,
    },
  ];
  const trainings = [
    {
      id: 1,
      title: "Step 1: Capture current state",
      description: "  Fragmented enterprise landscape",
      description1: "  Duplicated capabilities",
      description2: " Point-to-point API’s with no reuse",
      description3: "Control gaps and regulatory risk",
      description4: "  Slow time to market",
      description5: "  High operational expense",

      image: "/cc/1.png", // Add your image path
      link: "/foundation-training",
    },
    {
      id: 2,
      title: "Step 2: Map and classify",
      description: "  Define BIAN-based Service Landscape and map applications",
      description1: " Classify API’s and identify degree of BIAN alignment",
      description2: " Identify duplication of capabilities",
      description3: "Improve change impact analysis",
      image: "/cc/2.png", // Add your image path
      link: "/foundation-training",
    },
    {
      id: 3,
      title: "Step 3: Align and wrap",
      description: " Group capabilities and align to business domains",
      description1:
        "  Leverage BIAN API’s to expose standard interfaces and abstract complexity",
      description2: "Identify applications to invest vs retire",
      description3: "Guide transformation planning",
      image: "/cc/3.png", // Add your image path
      link: "/foundation-training",
    },
    {
      id: 4,
      title: "Step 4: Rationalize and reuse",
      description: " Rationalize capabilities to BIAN Service Domains",
      description1: "  Reusable BIAN-aligned API’s",
      description2:
        "Alignment to other banks and vendors who have adopted BIAN",
      description3: "Reduced cost of change and operational expense",
      image: "/cc/4.png", // Add your image path
      link: "/foundation-training",
    },
  ];
  const CardData = [
    {
      id: 1,
      icon: "/build.svg",

      title: "Business Capability Mapping",
      description:
        "Align your business capabilities with BIAN for strategic planning and effective transformation.",
    },
    {
      id: 2,
      icon: "/cloud.svg",

      title: "Enterprise Architecture Alignment to Standards",
      description:
        "Ensure your architecture aligns with industry standards like BIAN, TOGAF, and IT4IT for compliance and interoperability.",
    },
    {
      id: 3,
      icon: "/integration.svg",

      title: "Proof of Value",
      description:
        "Validate new architectural models and solutions through structured proofs of value before full-scale implementation.",
    },
    {
      id: 4,
      icon: "/build.svg",

      title: "Design Evaluation & Certification",
      description:
        "Assess and certify architecture designs against industry benchmarks for compliance and sustainability.",
    },
    {
      id: 5,
      icon: "/cloud.svg",

      title: "Practitioner and Executive Training",
      description:
        "Specialized training programs covering BIAN, enterprise architecture, and digital transformation best practices.",
    },
    {
      id: 6,
      icon: "/integration.svg",

      title: "Discovery Workshops and Use Case Ideation",
      description:
        "Identify high-impact transformation opportunities and create actionable roadmaps through targeted workshops.",
    },
    {
      id: 7,
      icon: "/build.svg",

      title: "BIAN-aligned Design & Implementation",
      description:
        "Design and implement BIAN-aligned architectures for standardization, agility, and operational efficiency.",
    },
    {
      id: 8,
      icon: "/cloud.svg",

      title: "Architecture Governance",
      description:
        "Establish governance frameworks to enforce architectural standards and drive consistency across initiatives.",
    },
  ];
  const features = [
    {
      id: 1,
      icon: (
        <FaCogs className="text-[#0c71c3] text-5xl group-hover:text-white group" />
      ),
      title: "It is Canonical",
      description:
        "The business function component designs BIAN specifies are standard for every use and user. The business role or purpose of each component can represent system needs of any bank and can be consistently interpreted in any deployment.",
    },
    {
      id: 2,
      icon: (
        <FaBolt className="text-[#0c71c3] text-5xl group-hover:text-white group" />
      ),
      title: "It Enables Agility",
      description:
        "By partitioning a bank’s functionality, data, and interfaces into discrete self-contained service centers and breaking down monolithic design, BIAN enables banks to innovate and get to production much faster.",
    },
    {
      id: 3,
      icon: (
        <FaLayerGroup className="text-[#0c71c3] text-5xl group-hover:text-white group" />
      ),
      title: "It is Stable Over Time",
      description:
        "The BIAN model defines what each component does but does not attempt to define how it should do it. This ensures stability over time.",
    },
    {
      id: 4,
      icon: (
        <FaPuzzlePiece className="text-[#0c71c3] text-5xl group-hover:text-white group" />
      ),
      title: "It Supports Composability",
      description:
        "When solution providers and banks align with the model, banks can more easily mix and match system components developed by different providers.",
    },
    {
      id: 5,
      icon: (
        <FaChartLine className="text-[#0c71c3] text-5xl group-hover:text-white group" />
      ),
      title: "It can be adopted incrementally",
      description:
        "Systems built aligning to the model can be integrated alongside legacy systems and adopted incrementally while evolving with best practices.",
    },
    {
      id: 6,
      icon: (
        <FaStream className="text-[#0c71c3] text-5xl group-hover:text-white group" />
      ),
      title: "It Helps Eliminate Complexity",
      description:
        "BIAN components support discrete and autonomous business functions, reducing overlaps, duplication, and redundancies in system design.",
    },
  ];
  const visibleCourses = [
    {
      id: 1,
      image: "/training/1.jpg", // Replace with actual image URL
      title: "BIAN Foundation Certification Training",
      instructor:
        "Attain in-depth knowledge and understanding of the BIAN standard’s banking architecture with BIAN Foundation Certification training from our experts. Your trainer is an experienced BIAN architect who can address the “how” and “why” along with the “what”",
      rating: 4.7,
      reviews: 358435,
      price: 549,
      originalPrice: 3299,
      badges: ["Learn more"],
    },
    {
      id: 2,
      image: "/training/2.jpg", // Replace with actual image URL
      title: "BIAN Data Architecture & Design Specialist Certification",
      instructor:
        "Learn BIAN’s Business Object Model (BOM) in detail through an end-to-end use case. Your trainer is a BIAN-certified data specialist who can provide a practical working knowledge of how BIAN can be utilized to design a world-class data architecture.Learn More.",
      rating: 4.7,
      reviews: 429680,
      price: 499,
      originalPrice: 3099,
      badges: ["Learn more"],
    },
    {
      id: 3,
      image: "/training/3.jpg", // Replace with actual image URL
      title:
        "BIAN Foundation Certification Training change to BIAN for Integration",
      instructor:
        "Attain in-depth knowledge and understanding of the BIAN standard’s banking architecture with BIAN Foundation Certification training from our experts. Your trainer is an experienced BIAN architect who can address the “how” and “why” along with the “what”",
      rating: 4.7,
      reviews: 358435,
      price: 549,
      originalPrice: 3299,
      badges: ["Learn more"],
    },
  ];
  const videoCards = [
    {
      id: 1,
      image: "/cc/august24.jpg", // Replace with actual image path
      title: "Learnings and tips for rolling out BIAN in your organization",
      description:
        "Interested in adopting BIAN in your enterprise, and keen to benefit from the learnings of those who have gone before you?",
      details:
        "Mamta Sarangal and Nishan Jebanasam from CC and C Solutions will share learnings from the work done with banks across Australia, Europe, North America, and Asia so that you can maximise the success of your own BIAN journey.",
      buttonText: "Watch Video",
    },
    {
      id: 2,
      image: "/cc/august24.jpg",
      title: "Understanding BIAN Framework for Digital Banking",
      description:
        "Discover how BIAN helps digital banking transformation and enhances interoperability.",
      details:
        "Experts discuss best practices for leveraging BIAN’s architecture to drive efficiency in digital banking solutions.",
      buttonText: "Watch Video",
    },
    {
      id: 3,
      image: "/cc/august24.jpg",
      title: "BIAN Adoption Case Study: Success Stories",
      description:
        "Learn how banks have successfully adopted BIAN to streamline their systems and improve agility.",
      details:
        "Real-world case studies showcasing how BIAN implementation led to cost savings and improved banking operations.",
      buttonText: "Watch Video",
    },
    {
      id: 4,
      image: "/cc/august24.jpg",
      title: "Future Trends in Banking with BIAN Standards",
      description:
        "Explore how emerging technologies align with BIAN to shape the future of banking.",
      details:
        "Industry leaders share insights on how AI, blockchain, and cloud computing integrate with BIAN for next-gen banking.",
      buttonText: "Watch Video",
    },
  ];
  // const [showAll, setShowAll] = useState(false);
  // const visibleCourses = showAll ? courses : courses.slice(0, 3);
  return (
    <div className=" font-sans">
      <div
        className={`flex justify-center items-center fixed  w-full z-[999999] transition-transform duration-300 ${
          isVisible ? " block" : "hidden"
        }`}
      >
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
              { href: "/about", label: "About" },
              { href: "/training-portfolio", label: "Training" },
              { href: "/", label: "Partners" },
              { href: "/consulting", label: "Consulting" },
              { href: "/", label: "BIAN" },
              { href: "/partners-info", label: "Partners" },
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

          <div className="h-11 px-5 py-3 bg-[#0c71c3] rounded-[100px] inline-flex justify-center items-center gap-2.5">
            <div className="relative justify-start text-white text-base font-semibold leading-tight">
              GET IN TOUCH
            </div>
          </div>
        </div>
      </div>

      <section className=" mx-auto flex w-full gap-20 bg-[url(/bg.png)] bg-cover bg-center h-screen  pt-[120px] justify-center items-center">
        {/* <Image
          className="w-[300px] h-[300px] left-[40px] "
          src="/bian/home.png"
          alt="Company Logo"
          width={300}
          height={300}
        /> */}
        <div className="justify-center items-center flex flex-col hed-txth1">
          <h1 className="text-4xl sm:text-[72px] font-extrabold text-gray-900 text-center leading-[90px]">
            Future-Proof Your Banking <br />{" "}
            <span className="text-[#F68827]">Architecture With BIAN</span>
          </h1>
          <p className="text-lg font-medium text-center max-w-[600px] mt-6">
            CC&C’s leadership position in BIAN certification training, adoption,
            and implementation is helping banks fast-track their BIAN journey.
          </p>
        </div>
      </section>

      <section className=" mx-auto flex w-full flex-col  pt-[120px] justify-center items-center hed-txth2">
        {/* <h1 className="text-[40px] max-w-[1440px] text-center text-4xl sm:text-[46px] font-extrabold text-gray-900 leading-[70px]">
          Navigate the complexities of legacy systems <br /> and architecture
          with CC&C Solutions -
        </h1>
        <p className="text-[40px] max-w-[1440px] text-center text-4xl sm:text-[46px] font-extrabold text-gray-900 leading-[70px]">
          trusted partners to the world’s <br />
          leading financial institutions.
        </p> */}
        <h2 className="text-4xl sm:text-[50px] font-extrabold text-gray-900 text-center leading-[70px]">
          Navigate the complexities of legacy systems <br /> and architecture
          with CC&C Solutions -
        </h2>
        <p className="text-lg font-medium text-center max-w-[600px] mt-6">
          Trusted partners to the world’s leading financial institutions.
        </p>
        <Image
          className=" w-[1000px] mt-20 rounded"
          src="/bian/bian.jpeg"
          alt="Company Logo"
          width={1440}
          height={1440}
        />
      </section>

      <section className=" mx-auto flex w-full flex-col  pt-20 justify-center items-center hed-txth2">
        <h2 className="text-[40px]  text-black/70 max-w-[1440px] text-center text-4xl sm:text-[56px] font-extrabold text-gray-900 leading-[70px]">
          How CC&C helps banks move to a <br /> modern, composable, and agile
          architecture
        </h2>
        <p className="text-[19px] text-center mt-10">
          A four-step process using BIAN to simplify and modernize your banking
          architecture
        </p>
        <section className="py-12 flex justify-center items-center  mt-14">
          <div className="  grid grid-cols-2 items-center gap-[60px] max-w-[1400px] hed-txth3 had-li3">
            {trainings.map((training) => (
              <div key={training.id} className="flex gap-10  items-center ">
                <Image
                  src={training.image}
                  alt={training.title}
                  width={200}
                  height={250}
                  className="rounded-lg -mt-6 xl:h-[200px] xl:w-[200px]"
                />
                <div className="w-full ">
                  <h3 className="text-[24px] font-semibold mb-3">
                    {training.title}
                  </h3>
                  <ul className=" text-lg">
                    <li className="text-gray-600 mt-2 c">
                      {training.description}
                    </li>
                    <li className="text-gray-600 mt-2 c">
                      {training.description1}
                    </li>{" "}
                    <li className="text-gray-600 mt-2 c">
                      {training.description2}
                    </li>{" "}
                    <li className="text-gray-600 mt-2 c">
                      {training.description3}
                    </li>{" "}
                    <li className="text-gray-600 mt-2 c">
                      {training.description4}
                    </li>{" "}
                    <li className="text-gray-600 mt-2 c">
                      {training.description5}
                    </li>
                  </ul>
                  {/* <Link href={training.link}>
                    <button className="mt-4 bg-[#0c71c3] text-white px-4 py-2 rounded-md ">
                      Learn More
                    </button>
                  </Link> */}
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
      <section className="bg-[#0C71C3] flex flex-col justify-center items-center mt-[160px] pb-[120px] hed-txth2">
        <h2 className="text-[40px]  mt-40 text-white max-w-[1440px] text-center text-4xl sm:text-[56px] font-extrabold  leading-[70px]" style={{color:"#fff"}}>
          CC&C Service Offerings
        </h2>
        {/* <p className="text-[20px] mt-6 lg:w-[1066px] text-center text-[#EEEEEE]  leading-[35px]">
          The Financial Services industry is going througha radical
          modernization, simplification, and interoperability renaissance across
          the globe. But unlocking the potential for digital transformation
          within your enterprise requires the right architecture experience,
          disciplines, and capabilities
        </p> */}
        <div className="grid grid-cols-3 justify-center gap-6 mt-10 hed-txth3">
          {CardData.map((card) => (
            <div
              key={card.id}
              className="group w-[360px] 2xl:w-[460px] p-6 relative bg-[#0c71c3] rounded-[20px] border border-[#eeeeee] overflow-hidden transition-all duration-300 hover:bg-white"
            >
              {/* Icon */}
              <div className="w-[67.2px] h-16 left-[24px] top-[24px]  bg-[#0d9eff] group-hover:bg-[#0C71C3] rounded-xl inline-flex justify-center items-center">
                <Image src={card.icon} alt="Icon" width={40} height={40} />
              </div>

              {/* Title */}
              <h3 className="  text-[32px] mt-6 font-extrabold leading-10 text-[#eeeeee] group-hover:text-black transition-all duration-300" style={{letterSpacing:"-1px"}}>
                {card.title}
              </h3>

              {/* Description */}
              <div className=" text-xl leading-[35px]  mt-4 text-[#e0e0e0] group-hover:text-black transition-all duration-300">
                {card.description}
              </div>

              {/* Learn More Button */}
              {/* <button
                      className="absolute bottom-0 -right-[8px]  rounded-br-[20px] rounded-tl-[20px]  px-5 py-2 bg-[#0d9eff] text-white  text-sm font-semibold flex items-center gap-2 transition-all duration-300
                    opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0"
                    >
                      LEARN MORE
                      <span>
                        <Image src="/arrow.svg" alt="Arrow" width={16} height={16} />
                      </span>
                    </button> */}
            </div>
          ))}
        </div>
      </section>
      {/* <section className=" mx-auto flex w-full flex-col bg-[#0C71C3]  pt-40 justify-center items-center">
        <h1 className="text-[40px]  text-white max-w-[1440px] text-center text-4xl sm:text-[56px] font-extrabold  leading-[70px]">
          CC&C Service Offerings
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4  px-6 py-10  mx-auto">
          {CardData.map((card) => (
            <div
              key={card.id}
              className="bg-[#0C71C3] text-white rounded-xl shadow-lg 2xl:w-[400px] overflow-hidden border "
            >
              <Image
                src={card.image}
                alt={card.title}
                width={400}
                height={250}
                className="w-full object-cover "
              />
              <h3 className="text-[24px] font-bold mt-4 px-6 ">{card.title}</h3>
              <p className=" text-lg mt-3 px-6 pb-6">{card.description}</p>
            </div>
          ))}
        </div>
      </section> */}
      <section className=" mx-auto flex w-full flex-col  pt-40 justify-center items-center hed-txth2">
        <h2 className="text-[40px] text-4xl sm:text-[56px] font-extrabold text-gray-900 leading-[70px] text-black/70 max-w-[1440px] text-center">
          How Does BIAN Deliver Benefit
        </h2>
        <div className="max-w-[1440px] mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white hover:bg-[#F68827] p-10 rounded-tl-3xl  rounded-b-3xl  drop-shadow-xl border flex items-start gap-4 group hed-txth3"
            >
              <div className="">{feature.icon}</div>
              <div className="text-[#2A2A2A] group-hover:text-white">
                <h3 className="text-[25px] font-semibold">{feature.title}</h3>
                <p className=" text-base mt-4 group-hover:text-white" style={{paddingTop:"10px"}}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="flex w-full flex-col pt-40 justify-center items-center hed-txth2" >
        <h2 className="text-[40px] text-4xl sm:text-[56px] font-extrabold text-gray-900 leading-[70px] text-black/70 max-w-[1440px] text-center">
          Our BIAN Training
        </h2>
        <div className=" px-6 py-10 flex flex-wrap max-w-[1440px]    justify-center w-full gap-6 hed-txth3">
          {visibleCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white  xl:w-[400px]   rounded-lg shadow-lg border"
            >
              <Image
                src={course.image}
                alt={course.title}
                width={400}
                height={160}
                className="rounded-t-lg w-full object-cover"
              />
              <div className="mt-4">
                <h3 className="text-[24px] font-bold px-6">{course.title}</h3>
                <p className="text-gray-600 px-6 pb-6 text-lg mt-3" style={{paddingTop:"10px"}}>
                  {course.instructor}
                </p>
                {/* <div className="flex gap-2 mt-3">
                  {course.badges.map((badge) => (
                    <span
                      key={badge}
                      className="bg-[#0c71c3] text-white text-sm px-4 py-2 rounded"
                    >
                      {badge}
                    </span>
                  ))}
                </div> */}
              </div>
            </div>
          ))}
        </div>
        {/* <button
          onClick={() => setShowAll(!showAll)}
          className="bg-[#0c71c3] text-white px-6 py-3 rounded-lg text-lg mt-4 hover:bg-[#095a9c] transition"
        >
          {showAll ? "Show Less" : "Show More"}
        </button> */}
      </section>
      <section className="flex flex-col items-center justify-center mt-[202px]">
        <div className="md:w-[1128px]">
          <div className="flex flex-col    w-full hed-txth2 ">
            <h2 className=" text-black font-extrabold text-[56px]">
              Our Clients
            </h2>
            <p className="text-[20px] text-gray-600 mt-6  text-justify tracking-tight">
              As a multinational consultancy, we work with enterprises of all
              sizes, from start-ups to global organizations, not-for-profits to
              government bodies. We are committed to delivering excellent
              outcomes for each client.
            </p>
          </div>
          <div className="storybook-fix relative flex w-full max-w-[1100px] gap-4 md:gap-10 mt-20 items-center justify-center overflow-hidden rounded-md  bg-background flex-wrap">
            <Image
              src="/bian/bank-logo/1.png"
              alt="Company logo"
              className=" object-contain w-[100px] md:w-[150px]"
              width={150}
              height={150}
            />
            <Image
              src="/bian/bank-logo/2.jpeg"
              alt="Company logo"
              className=" object-contain w-[100px] md:w-[150px]"
              width={150}
              height={150}
            />
            <Image
              src="/bian/bank-logo/3.png"
              alt="Company logo"
              className=" object-contain w-[100px] md:w-[150px] "
              width={150}
              height={150}
            />
            <Image
              src="/bian/bank-logo/4.jpeg"
              alt="Company logo"
              className=" object-contain w-[100px] md:w-[150px]"
              width={150}
              height={150}
            />
            <Image
              src="/bian/bank-logo/5.png"
              alt="Company logo"
              className=" object-contain w-[100px] bg-white md:w-[150px]"
              width={150}
              height={150}
            />
            <Image
              src="/bian/bank-logo/6.png"
              alt="Company logo"
              className=" object-contain w-[100px] md:w-[150px] "
              width={150}
              height={150}
            />
            <Image
              src="/bian/bank-logo/7.png"
              alt="Company logo"
              className=" object-contain w-[100px] md:w-[150px]"
              width={150}
              height={150}
            />
            <Image
              src="/bian/bank-logo/8.png"
              alt="Company logo"
              className=" object-contain w-[100px] md:w-[150px]"
              width={150}
              height={150}
            />
            <Image
              src="/bian/bank-logo/9.png"
              alt="Company logo"
              className=" object-contain w-[100px] md:w-[150px]"
              width={150}
              height={150}
            />{" "}
            <Image
              src="/bian/bank-logo/10.jpeg"
              alt="Company logo"
              className=" object-contain w-[100px] md:w-[250px]"
              width={150}
              height={150}
            />{" "}
            <Image
              src="/bian/bank-logo/11.png"
              alt="Company logo"
              className=" object-contain w-[100px] md:w-[150px]"
              width={150}
              height={150}
            />
            <Image
              src="/bian/bank-logo/12.png"
              alt="Company logo"
              className=" object-contain w-[100px] md:w-[150px]"
              width={150}
              height={150}
            />
            <Image
              src="/bian/bank-logo/13.jpeg"
              alt="Company logo"
              className=" object-contain w-[100px] md:w-[150px]"
              width={150}
              height={150}
            />{" "}
            <Image
              src="/bian/bank-logo/14.jpg"
              alt="Company logo"
              className=" object-contain w-[100px] md:w-[90px]"
              width={150}
              height={150}
            />{" "}
            <Image
              src="/bian/bank-logo/15.png"
              alt="Company logo"
              className=" object-contain w-[100px] md:w-[150px]"
              width={150}
              height={150}
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center " style={{marginTop:"100px"}}>
              <div className="md:w-[1128px]">
                <div className="flex items-center justify-between  w-full hed-txth3">
                  <h3 className=" text-black font-extrabold text-[56px]">
                    What our clients say
                  </h3>
                  <button className=" flex items-center gap-2 mt-5 bg-[#0C71C3] text-white  px-6 py-3 rounded-full text-lg font-semibold shadow-lg  transition">
                    VIEW ALL REVIEWS
                  </button>
                </div>
                <div className="relative mt-[60px]">
                  <Swiper
                    modules={[Pagination, Navigation]}
                    spaceBetween={0}
                    slidesPerView={1}
                    // pagination={{ clickable: true }}
                    navigation={{
                      nextEl: ".custom-next",
                      prevEl: ".custom-prev",
                    }}
                    breakpoints={{
                      768: { slidesPerView: 2 },
                      1024: { slidesPerView: 3 },
                    }}
                    className="px-4 custom-swiper"
                  >
                    {testimonials.map((testimonial, index) => (
                      <SwiperSlide key={index} className="p-4">
                        <div className="border rounded-xl shadow-lg p-6 w-[350px]  border-[#E0E0E0] h-[420px] bg-white hed-txth4">
                          <h4 className="text-[24px] font-bold">
                            {testimonial.name}
                          </h4>
                          <p className="text-blue-500 text-base" style={{color:"#3b82f4"}}>
                            {testimonial.title}
                          </p>
                          <p className="text-[#444444] text-lg mt-3">
                            {testimonial.review}
                          </p>
                          <div className="text-yellow-400 flex justify-between mt-10 space-x-1">
                            <Image
                              src={"/kama2.svg"}
                              alt="star"
                              width={50}
                              height={50}
                            />
                            <Image
                              src={"/star.svg"}
                              alt="star"
                              width={120}
                              height={120}
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
      
                  {/* Custom Navigation Buttons */}
                  <div className="absolute right-0 flex items-center gap-4 mt-10">
                    <button className="custom-prev  w-[50px] h-[50px] flex justify-center items-center bg-white border border-[#8D8D8D] text-white p-2 rounded-full shadow-lg">
                      <Image
                        src="/arrow-wiper.svg"
                        alt="arrow"
                        className="cursor-pointer"
                        width={20}
                        height={20}
                      />
                    </button>
                    <button className="custom-next   w-[50px] h-[50px] flex justify-center items-center bg-white border border-[#8D8D8D] text-white p-2 rounded-full shadow-lg">
                      <Image
                        src="/arrow-wiper.svg"
                        alt="arrow"
                        className="transform rotate-180 cursor-pointer"
                        width={20}
                        height={20}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </section>

      <section className="max-w-[1440px] mx-auto px-6 py-16  mt-[202px] hed-txth2">
        <h2 className=" sm:text-[56px] font-extrabold text-gray-900 leading-[70px] text-black/80 text-center mb-10">
          BIAN Insights and Learnings
        </h2>

        <div className="flex flex-col gap-10">
          {videoCards.map((video, index) => (
            <div
              key={video.id}
              className="flex flex-col md:flex-row items-center gap-6 bg-white p-6 rounded-lg shadow-lg hed-txth3"
            >
              {/* Left: Video Thumbnail */}
              <div className="w-full md:w-1/2">
                <Image
                  src={video.image}
                  alt={video.title}
                  width={600}
                  height={350}
                  className="rounded-lg shadow-md"
                />
              </div>

              {/* Right: Content */}
              <div className="w-full md:w-1/2">
                <h3 className="text-xl font-bold text-black/80">
                  {video.title}
                </h3>
                <p className="text-lg text-black/70 mt-2 " style={{paddingTop:"10px"}}>
                  {video.description}
                </p>
                <p className="text-gray-600 text-base mt-2" > {video.details}</p>

                {/* Watch Video Button */}
                <button
                  className="mt-[24px] flex items-center gap-2 bg-[#0C71C3] hover:bg-white hover:text-black text-white w-[202px] py-3 rounded-full text-lg font-semibold shadow-lg transition"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <span>
                    <Image
                      className="ml-4"
                      src={
                        hoveredIndex === index ? "/arrow2.svg" : "/arrow.svg"
                      }
                      alt="Arrow Icon"
                      width={40}
                      height={40}
                    />
                  </span>
                  {video.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-[#0D2F4B] mt-[120px]">
        <div>
          <div className="flex justify-center items-center gap-20 pt-[50px] pb-8">
            <div className="flex flex-col gap-4">
              <Image
                src="/logo.png"
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
              <div className="flex  gap-2 mt-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="p-2 w-[230px] rounded-md bg-white text-black placeholder-[#AAAAAA] focus:outline-none"
                />
                <button className="p-2 bg-[#195586]/60     text-white rounded-md hover:bg-[#2373A5]">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-6 text-[#AAAAAA] text-[18px]">
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
            <div className="flex flex-col gap-2 mt-16">
              <Image
                src="/insta.svg"
                alt="instragram"
                width={60}
                height={60}
                className="w-[60px] h-[60px]"
              />
              <Image
                src="/fb.svg"
                alt="facebook"
                width={60}
                height={60}
                className="w-[60px] h-[60px]"
              />
              <Image
                src="/linkedin.svg"
                alt="linkedin"
                width={60}
                height={60}
                className="w-[60px] h-[60px]"
              />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <hr className=" lg:w-[1066px] border border-[#195586]/60" />
          </div>
          <div className="flex justify-center items-center">
            <div className="flex justify-between items-center  lg:w-[1066px]   py-10">
              <p className="text-[#AAAAAA] text-[16px]">
                Copyright@2025 All rights reserved
              </p>
              <div className="flex gap-10">
                <p className="text-[#AAAAAA] text-[16px]">Privacy policy</p>
                <p className="text-[#AAAAAA] text-[16px]">
                  Terms and conditions
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
