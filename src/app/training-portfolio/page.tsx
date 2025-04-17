"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

import "../css/style.css"
// import Marquee from "../../components/marquee";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// import { Typewriter } from "react-simple-typewriter";

const testimonials = [
  {
    name: "Jerome Bell",
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
const cardData = [
  {
    title: "TOGAF®",
    description:
      "Earn the most up-to-date TOGAF certification, based on the TOGAF Standard, 10th Edition. Learn with the world’s leading TOGAF training company",
    icon: "/courses/TOGAF.jpg",
    link: "/courses/togaf-10-training",
  },
  {
    title: "TOGAF® Business Architecture",
    description:
      "Earn your hands-on practical Business Architecture certificate with our expert training",
    icon: "/courses/TOGAF-Business-Architecture.jpg",
    link: "/courses/togaf-business-architecture",
  },
  {
    title: "IT4IT™",
    description:
      "More than half of all IT4IT certified practitioners were trained by CC&C or one of our traning academy affiliates. We are the gold standard in IT4IT ",
    icon: "/courses/IT4IT.jpg",
    link: "/courses/it4it-4-2",
  },
  {
    title: "ArchiMate®",
    description:
      "ArchiMate is the preferred modeling language for TOGAF. Along with TOGAF and the right tools, ArchiMate completes the foundation for effective architecture .",
    icon: "/courses/ArchiMate.jpg",
    link: "/courses/archimate-3-level-1-level-2-certification",
  },
  {
    title: "BIAN Foundation",
    description:
      "CC&C is the only authorised BIAN training provider with a global footprint. Get certified with one of CC&C’s experienced architects and benefit from our practical ",
    icon: "/courses/BIAN-Foundation.jpg",
    link: "/courses/bian-foundation",
  },
  {
    title: "BIAN Data Architecture and Design",
    description:
      "Learn BIAN Business Object Modelling (BOM) in detail through practical use case",
    icon: "/courses/BIAN-Data-Architecture-and-Design.jpg",
    link: "/courses//bian-data-architecture-specialist-certification",
  },
  {
    title: "BIAN for Integration®",
    description:
      "ArchiMate is the preferred modeling language for TOGAF. Along with TOGAF and the right tools, ArchiMate completes the foundation for effective architecture ",
    icon: "/courses/4.png",
    link: "/courses/bian-for-integration",
  },
  {
    title: "BIAN for Business Analyst",
    description:
      "CC&C is the only authorised BIAN training provider with a global footprint. Get certified with one of CC&C’s experienced architects and benefit from our practical ",
    icon: "/courses/8.png",
    link: "/courses/bian-for-business-analyst",
  },
  {
    title: "BIAN Business Architects",
    description:
      "Our newest offering for enterprise teams, led by CC&C’s master practitioners",
    icon: "/courses/9.png",
    link: "/courses/togaf-business-architecture",
  },
];

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
    <div className="bg-[url(/courses/hero.png)]  bg-no-repeat w-screen bg-cover  bg-center   font-sans pb-[50px]">
      <div
        className={`flex justify-center items-center fixed  w-full z-[999999] transition-transform duration-300 ${
          isVisible ? " block" : "hidden"
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
              { href: "#", label: "About" },
              { href: "/training-portfolio", label: "Training" },
              { href: "/", label: "Partners" },
              { href: "#", label: "Consulting" },
              { href: "/", label: "BIAN" },
              { href: "#", label: "Partners" },
              { href: "/contact", label: "Contact" },
               // New menu item
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
        className="flex flex-col items-center  pt-[210px]  justify-center text-center px-6 py-20 hed-txth1" style={{paddingBottom:"100px"}}>
        <h1 className="text-4xl sm:text-[72px] font-extrabold text-gray-900 leading-[90px]">
          Industry-Leading IT Architecture <br />
          Training & Certifications
        </h1>
        <p className="mt-5 text-gray-600 max-w-[1165px] text-[24px] ">
          Our approach is to make you feel empowered to put your learning into
          practice. Your instructor will be an experienced practitioner who can
          bring their hands-on, real-world experience to life
        </p>
        <button className="mt-[30px] flex items-center justify-center gap-2 bg-[#0C71C3] text-white  w-[202px] py-3 rounded-full text-lg font-semibold shadow-lg  transition">
          <span>
            <Image
              className=" "
              src="/arrow.svg"
              alt="Company Logo"
              width={40}
              height={40}
            />
          </span>{" "}
          TALK TO US
        </button>
      </section>

      </div>
      <section className="bg-[#FFFF] flex flex-col justify-center items-center pt-[70px] pb-[120px]">
        <h2 className="mt-10 text-black font-extrabold text-[56px] text-center leading-[70px] mb-3">
          Explore our Industry Leading courses
        </h2>
        <div className="grid grid-cols-3  justify-center gap-9 mt-10">
          {cardData.map((card, index) => (
            <div
              key={index}
              className=" w-[360px] h-[500px]  relative  rounded-[20px] border border-[#eeeeee] overflow-hidden transition-all duration-300 hed-txth3"
            >
              {/* Icon */}
              <div className=" rounded-xl inline-flex h-[200px] justify-center items-center  cours-boximg">
                <Image src={card.icon} alt="Icon" width={360} height={200} />
              </div>

              {/* Title */}
              <h3 className=" left-[24px] px-5 top-[128px] mt-6  text-[24px] font-extrabold  text-black group-hover:text-black transition-all duration-300">
                {card.title}
              </h3>

              {/* Description */}
              <div className=" left-[24px] top-[224px] mt-3  px-5  text-base  text-black group-hover:text-black transition-all duration-300 h3-descb">
                {card.description}
              </div>

              {/* Learn More Button */}
              <Link href={card.link}>
                <button className="absolute bottom-0 -right-[8px] bg-[#FF7D33] text-white rounded-br-[20px] rounded-tl-[20px] px-5 py-2 text-base font-semibold flex items-center gap-2 transition-all duration-300">
                  LEARN MORE
                  <span>
                    <Image
                      src="/courses/arrow.svg"
                      alt="Arrow"
                      width={26}
                      height={26}
                    />
                  </span>
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>
      <section className="flex flex-col items-center justify-center " style={{marginTop:"0px"}}>
        <div className="md:w-[1128px]">
          <div className="flex items-center justify-between  w-full ">
            <h2 className=" text-black font-extrabold text-[56px]">
              Our Value Proportion
            </h2>
          </div>
          <div className="grid grid-cols-2">
            <div className="shadow w-[548px]  rounded-[8px] mt-[60px] flex flex-col items-center justify-center hed-txth3">
              <Image
                src="/courses/instruct.png"
                width={548}
                height={290}
                className="rounded-t-[8px]"
                alt=""
              />
              <h3 className="text-[28px] font-semibold p-[24px]">
                Experienced & Practicing Instructors
              </h3>
            </div>
            <div className="shadow w-[548px]  rounded-[8px] mt-[60px] flex flex-col items-center justify-center  hed-txth3">
              <Image
                src="/courses/chart.png"
                width={548}
                height={290}
                className="rounded-t-[8px]"
                alt=""
              />
              <h3 className="text-[28px] font-semibold p-[24px]">
                Satisfaction Guaranteed with High Success Rate
              </h3>
            </div>{" "}
            <div className="shadow w-[548px]  rounded-[8px] mt-[60px] flex flex-col items-center justify-center  hed-txth3">
              <Image
                src="/courses/exam.png"
                width={548}
                height={290}
                className="rounded-t-[8px]"
                alt=""
              />
              <h3 className="text-[28px] font-semibold p-[24px]">
                Post Training Support with Exam Booster Session
              </h3>
            </div>{" "}
            <div className="shadow w-[548px]  rounded-[8px] mt-[60px] flex flex-col  hed-txth3">
              <Image
                src="/courses/map.png"
                width={548}
                height={290}
                className="rounded-t-[8px]"
                alt=""
              />
              <h3 className="text-[28px] font-semibold p-[24px]">
                Available World-wide
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col bg-[#0C71C3] pb-[120px] items-center mt-[120px] justify-center  ">
        <div className="md:w-[1128px]  text-white">
          <div className="flex flex-col items-start pt-[120px] w-full  hed-txth2">
            <h2 className="  font-extrabold text-[56px]" style={{color:"#fff"}}>Why CC&C Learning</h2>
            <p className="text-[24px]" style={{color:"#fff"}}>
              CC&C Training Prepares You for the Actual Application of the
              Training Material and Focuses on the Skills You Need to Be an
              Effective and Respected Professional
            </p>
          </div>
          <div className="flex justify-between items-center mt-[64px]">
            <div className="w-[620px] flex flex-col gap-3 w-full">
              <div className="flex items-start gap-5 ">
                <Image
                  className="mt-1"
                  src="/courses/star.svg"
                  alt="bian"
                  width={18}
                  height={18}
                />
                <p className="lg:w-[830px] font-medium text-[18px] text-[#EEEEEE]">
                  Customised and fit for purpose course materials to support
                  student learning journey
                </p>
              </div>
              <div className="flex items-start gap-5">
                <Image
                  className="mt-1"
                  src="/courses/star.svg"
                  alt="bian"
                  width={18}
                  height={18}
                />
                <p className="lg:w-[830px] font-medium text-[18px] text-[#EEEEEE]">
                  Our approach is to make you feel empowered to put your
                  learning into practice
                </p>
              </div>{" "}
              <div className="flex items-start gap-5">
                <Image
                  className=""
                  src="/courses/star.svg"
                  alt="bian"
                  width={18}
                  height={18}
                />
                <p className="lg:w-[830px] font-medium text-[18px] text-[#EEEEEE]">
                  High success rate with high level of satisfaction
                </p>
              </div>{" "}
              <div className="flex  gap-5">
                <Image
                  className=""
                  src="/courses/star.svg"
                  alt="bian"
                  width={18}
                  height={18}
                />
                <p className="lg:w-[830px] font-medium text-[18px] text-[#EEEEEE]">
                  Post Training Support and Exam Booster Packs
                </p>
              </div>{" "}
              <div className="flex  gap-5">
                <Image
                  className=""
                  src="/courses/star.svg"
                  alt="bian"
                  width={18}
                  height={18}
                />
                <p className="lg:w-[830px] font-medium text-[18px] text-[#EEEEEE]">
                  Available World-wide to suit different time zones
                </p>
              </div>{" "}
              <div className="flex  gap-5">
                <Image
                  className=""
                  src="/courses/star.svg"
                  alt="bian"
                  width={18}
                  height={18}
                />
                <p className="lg:w-[830px] font-medium text-[18px] text-[#EEEEEE]">
                  Culturally sensitive approach facilitates best learning
                  outcome
                </p>
              </div>
            </div>
            {/* <Image
              className=""
              src="/courses/bian-foundation/learning.png"
              alt="bian"
              width={354}
              height={423}
            /> */}
          </div>
          <div className="mt-3 flex flex-col gap-3 w-full">
            <div className="flex items-center gap-5">
              <Image
                className=""
                src="/courses/star.svg"
                alt="bian"
                width={18}
                height={18}
              />
              <p className="text-[18px] text-[#EEEEEE] font-medium">
                Core Competence in Enterprise Architecture, IT Architecture,
                Banking Architecture & Digital Transformation
              </p>
            </div>{" "}
            <div className="flex items-center gap-5">
              <Image
                className=""
                src="/courses/star.svg"
                alt="bian"
                width={18}
                height={18}
              />
              <p className="text-[18px] text-[#EEEEEE] font-medium">
                Your instructor will be an experienced practitioner who can
                bring their hands-on, real-world experience to life
              </p>
            </div>{" "}
            <div className="flex items-center gap-5">
              <Image
                className=""
                src="/courses/star.svg"
                alt="bian"
                width={18}
                height={18}
              />
              <p className="text-[18px] text-[#EEEEEE] font-medium">
                Dedicated teams to manage and deliver large (bulk) corporate
                training initiatives – virtual, in-person and on demand
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-10 text-[#262626] max-w-[1218px] mx-auto flex flex-col justify-center items-center">
        <div className="flex justify-center items-center text-center mt-[120px]  hed-txth2">
          <h2 className=" text-black font-extrabold text-[56px] ">
            CC&C Learning will be with you all the way through your learning
            journey
          </h2>
        </div>
        <div className="flex justify-center items-center mt-[64px]">
          <div className="lg:w-[950px] w-full h-[264px] border-4 border-[#0D9EFF] border-t-[16px] rounded-b-3xl flex  justify-center items-center ">
            <div className="flex flex-col justify-center items-center gap-2">
              <ul className="  font-medium text-[18px] md:flex md:flex-row md:items-center md:justify-center flex flex-col justify-center items-center md:gap-12 gap-5 list-disc">
                <li>Talk to our learning team</li>
                <li>Aks for a quote</li>
              </ul>
              <ul className=" font-medium text-[18px] list-disc ">
                <li>Check our next available training</li>
              </ul>
              <button className="mt-[32px] flex items-center gap-2 bg-[#0C71C3] text-white  w-[202px] py-3 rounded-full text-lg font-semibold shadow-lg  transition">
                <span>
                  <Image
                    className="ml-4 "
                    src="/arrow.svg"
                    alt="Company Logo"
                    width={40}
                    height={40}
                  />
                </span>{" "}
                CONTACT US
              </button>
            </div>
          </div>
        </div>
      </section>
      <section
        data-aos="fade-up"
        className="flex justify-center items-center mt-[100px]"
      >
        <div className="flex items-center gap-20">
          <div>
            <Image
              src="/courses/people.png"
              className="rounded-3xl"
              alt="Company Logo"
              width={524}
              height={572}
            />
          </div>
          <div className="w-[572px]  hed-txth2">
            <h2 className="text-4xl sm:text-[56px] font-extrabold text-gray-900 leading-[70px]">
              Our People
            </h2>
            <p className="text-[20px] text-gray-600 mt-6 text-start tracking-tight">
              CC&C Solutions has been providing industry-leading architecture
              consulting, training, and digital transformation delivery services
              for some of the most successful global organizations for over 20
              years. Bringing together the most talented leaders and experts in
              the fields of Financial Services, Insurance, Telecommunications,
              Retail and Health we have an unparalleled record for delighting
              and making our customers successful.
            </p>
            <button className="mt-[32px] flex items-center gap-2 bg-[#0C71C3] text-white  w-[202px] py-3 rounded-full text-lg font-semibold shadow-lg  transition">
              <span>
                <Image
                  className="ml-4 "
                  src="/arrow.svg"
                  alt="Company Logo"
                  width={40}
                  height={40}
                />
              </span>{" "}
              TALK TO US
            </button>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center  mt-[202px]">
        <div className="md:w-[1128px]">
          <div className="flex items-center justify-between  w-full  hed-txth3">
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
                  <div className="border rounded-xl shadow-lg p-6 w-[350px]  border-[#E0E0E0] h-[410px] bg-white  hed-txth4">
                    <h4 className="text-[24px] font-bold">
                      {testimonial.name}
                    </h4>
                    <p className="text-blue-500 text-base" style={{color:"#3b82f6"}}>
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
      <section className="flex flex-col items-center justify-center mt-[202px] pb-20">
        <div className="md:w-[1128px]">
          <div className="flex flex-col    w-full ">
            <h2 className=" text-black font-extrabold text-[56px]  hed-txth2">
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
              src="/logo/1.png"
              alt="Company logo"
              className=" object-contain w-[100px] md:w-[150px]"
              width={150}
              height={150}
            />
            <Image
              src="/logo/2.png"
              alt="Company logo"
              className=" object-contain w-[100px] md:w-[150px]"
              width={150}
              height={150}
            />
            <Image
              src="/logo/3.png"
              alt="Company logo"
              className=" object-contain w-[100px] md:w-[150px] "
              width={150}
              height={150}
            />
            <Image
              src="/logo/4.png"
              alt="Company logo"
              className=" object-contain w-[100px] md:w-[150px]"
              width={150}
              height={150}
            />
            <Image
              src="/logo/5.png"
              alt="Company logo"
              className=" object-contain w-[100px] md:w-[150px]"
              width={150}
              height={150}
            />
            <Image
              src="/logo/6.png"
              alt="Company logo"
              className=" object-contain w-[100px] md:w-[150px] "
              width={150}
              height={150}
            />
            <Image
              src="/logo/7.png"
              alt="Company logo"
              className=" object-contain w-[100px] md:w-[150px]"
              width={150}
              height={150}
            />
            <Image
              src="/logo/8.png"
              alt="Company logo"
              className=" object-contain w-[100px] md:w-[150px]"
              width={150}
              height={150}
            />
            <Image
              src="/logo/9.png"
              alt="Company logo"
              className=" object-contain w-[100px] md:w-[150px]"
              width={150}
              height={150}
            />{" "}
            <Image
              src="/logo/10.png"
              alt="Company logo"
              className=" object-contain w-[100px] md:w-[150px]"
              width={150}
              height={150}
            />{" "}
            <Image
              src="/logo/11.png"
              alt="Company logo"
              className=" object-contain w-[100px] md:w-[150px]"
              width={150}
              height={150}
            />
            <Image
              src="/logo/12.png"
              alt="Company logo"
              className=" object-contain w-[100px] md:w-[150px]"
              width={150}
              height={150}
            />
          </div>
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
    </>
  );
}
