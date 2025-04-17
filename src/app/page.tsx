"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import "./css/style.css"
// import Marquee from "../../components/marquee";
import StatsCounter from "../../components/StatsCounter";
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
    title: "Banking Architecture",
    description:
      "We work in close partnership with leading industry bodies to develop the deep expertise and tools that can radically simplify and modernize your banking landscape.",
    icon: "/build.svg",
  },
  {
    title: "BIAN Implementation",
    description:
      "Our team have the expertise to take BIAN from a reference architecture to detailed design and development, unlocking it’s potential and delivering tangible benefits to your organization",
    icon: "/cloud.svg",
  },
  {
    title: "Digital Transformation",
    description:
      "The rapidly growing gap between customer expectations and legacy capabilities has made our disciplined application of architecture across business, application and data crucial to success",
    icon: "/integration.svg",
  },
];
const cardData2 = [
  {
    title: "Business Architecture",
    description:
      "Maximising the return on your investment starts with a solid business architecture blueprint. Our certified Business Architects have helped bootstrap and operationalize world-class Business Architecture capabilities for leading organisations around the globe",
    icon: "/build.svg",
  },
  {
    title: "Enterprise Architecture",
    description:
      "As contributors and experts in industry architecture frameworks including TOGAF, IT4IT, BIAN and more we can help you establish and operate an effective enterprise architecture practice from strategy to tooling, frameworks, methodology, process, and governance",
    icon: "/cloud.svg",
  },
  {
    title: "Skills Transformation",
    description:
      "The single biggest differentiator you have is your people and their skills. We are a leading global training and certification provider in BIAN, TOGAF, IT4IT, ArchiMate, Bizz Design, and more, helping organisations boost their people capability to the forefront of their industry",
    icon: "/integration.svg",
  },
];
const cardData3 = [
  {
    title: "BIAN",
    description:
      "As an active BIAN member and the only BIAN-accredited training organisation with a global footprint, CC&C is uniquely positioned to help teams deliver early, measurable value while learning how to maximise BIAN usage effectively for the long term",
    icon: "/build.svg",
  },
  {
    title: "TOGAF",
    description:
      "Provide your teams the most up-to-date TOGAF certification, reflecting the many enhancements including agile architecture, digital transformation, capability-based planning, integrated risk and security, and much more",
    icon: "/cloud.svg",
  },
  {
    title: "IT4IT",
    description:
      "With more than half of all IT4IT practitioners trained and certified by CC&C, we equip your teams to manage DevOps and Digital Products at scale with our gold standard IT4IT foundation course.",
    icon: "/integration.svg",
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
    <div className="bg-[url(/bg.png)] bg-cover bg-center  font-sans h-[800px]">
      <div
        className={`flex justify-center items-center fixed  w-full z-[999999] transition-transform duration-300 ${
          isVisible ? " block" : "hidden"
        }`}
      >
        <div className="w-full mx-auto flex justify-center items-center h-[88px] relative bg-white shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)] overflow-hidden header-wd">
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
                { href: "/Contact", label: "Contact" },
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
        className="flex flex-col items-center  pt-[200px]  justify-center text-center px-6 py-20 hed-txth1"
      >
        <h1 className="text-4xl sm:text-[72px] font-extrabold text-gray-900 leading-[90px]">
          Powering Digital Transformation <br />
          Through{" "}
          <span className="text-[#F68827]">World-Class Architecture</span>
          {/* <span className="text-[#F68827]">
            <Typewriter
              words={[" "]}
              loop={false}
              cursor
              typeSpeed={80}
              deleteSpeed={50}
            />
          </span> */}
        </h1>
        <p className="mt-5 text-gray-600 max-w-[787px] text-[24px] ">
          CC&C has been helping the largest companies get architecture right
          for almost 20 years
        </p>
        <button className="mt-[35px] flex items-center gap-2 bg-[#0C71C3] text-white  w-[202px] py-3 rounded-full text-lg font-semibold shadow-lg  transition">
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
      </section>
      <section
        data-aos="fade-up"
        className="flex justify-center items-center " style={{marginTop:"100px"}}>
        <div className="flex items-center gap-20">
          <div>
            <Image
              src="/team.png"
              className="rounded-3xl"
              alt="Company Logo"
              width={524}
              height={572}
            />
          </div>
          <div className="w-[572px] hed-txth2">
            <h2 className="text-4xl sm:text-[56px] font-extrabold text-gray-900 leading-[70px]">
              Architecture consulting & skills
            </h2>
            <p className="text-[20px] text-gray-600 mt-6 text-start tracking-tight">
              CC&C Solutions has been providing industry-leading architecture
              consulting, training, and digital transformation delivery services
              for some of the most successful global organisations for over 20
              years. Bringing together the most talented leaders and experts in
              the fields of Financial Services, Insurance, Telecommunications,
              Retail and Health we have an unparalleled record for delighting
              and making our customers successful
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
      <section className="bg-[#0C71C3] flex flex-col justify-center items-center mt-[160px] pb-[120px] hed-txth2">
        <h2 className="mt-40 text-white font-extrabold text-[56px] leading-[70px]" style={{color:"#fff"}}>
          Accelerating Your Banking Transformation
        </h2> 
        <p className="text-[20px] mt-6 lg:w-[1066px] text-center text-[#EEEEEE] text-white  leading-[35px]" style={{color:"#fff"}}>
          The Financial Services industry is going througha radical
          modernization, simplification, and interoperability renaissance across
          the globe. But unlocking the potential for digital transformation
          within your enterprise requires the right architecture experience,
          disciplines, and capabilities
        </p>
        <div className="flex justify-center gap-6 mt-10  hed-txth3">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="group w-[360px] h-[420px] relative bg-[#0c71c3] rounded-[20px] border border-[#eeeeee] overflow-hidden transition-all duration-300 hover:bg-white"
            >
              {/* Icon */}
              <div className="w-[67.2px] h-16 left-[24px] top-[24px] absolute bg-[#0d9eff] group-hover:bg-[#0C71C3] rounded-xl inline-flex justify-center items-center">
                <Image src={card.icon} alt="Icon" width={40} height={40} />
              </div>

              {/* Title */}
              <h3 className="w-[203px] left-[24px] top-[100px] absolute text-[32px] font-extrabold leading-10 text-[#eeeeee] group-hover:text-black transition-all duration-300">
                {card.title}
              </h3>

              {/* Description */}
              <div className="w-[302px] left-[24px] top-[190px] absolute text-xl leading-[35px] text-[#e0e0e0] group-hover:text-black transition-all duration-300 h3-descb">
                {card.description}
              </div>

              {/* Learn More Button */}
              <button
                className="absolute bottom-0 -right-[8px]  rounded-br-[20px] rounded-tl-[20px]  px-5 py-2 bg-[#0d9eff] text-white  text-sm font-semibold flex items-center gap-2 transition-all duration-300
              opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0"
              >
                LEARN MORE
                <span>
                  <Image src="/arrow.svg" alt="Arrow" width={16} height={16} />
                </span>
              </button>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-[#F5F5F5] flex flex-col justify-center items-center pt-[100px] pb-[120px] hed-txth2">
        <h2 className="mt-10 text-black/80 font-extrabold text-[56px] text-center leading-[70px]">
          Helping Organisations Excel in <br /> Architecture for Over 20 Years
        </h2>
        <p className="text-[20px] mt-6 lg:w-[1066px] text-center text-black/80  leading-[35px]">
          As the pace of innovation, customer expectations and competition
          continue to increase, the difference between leading and lagging lies
          in the mastery of business and enterprisearchitecture. CC&C Solutions
          stands at the forefront of this divide, offering over two decades of
          specialized experience in the Financial Services, Insurance,
          Telecommunications, Retail, and Health industries. Our commitment is
          not just to consult but to transform your operational capabilities
          through disciplined best practices.
        </p>
        <div className="flex justify-center gap-6 mt-10 hed-txth3">
          {cardData2.map((card, index) => (
            <div
              key={index}
              className="group w-[360px] h-[510px] relative bg-white rounded-[20px] border border-white overflow-hidden transition-all duration-300 hover:bg-[#FF8800]"
            >
              {/* Icon */}
              <div className="w-[67.2px] h-16 left-[24px] top-[24px] absolute bg-[#FF8800] group-hover:bg-[#e9a251] rounded-xl inline-flex justify-center items-center">
                <Image src={card.icon} alt="Icon" width={40} height={40} />
              </div>

              {/* Title */}
              <h3 className="w-[203px] left-[24px] top-[100px] absolute text-[32px] font-extrabold leading-10 text-black/80 group-hover:text-white transition-all duration-300">
                {card.title}
              </h3>

              {/* Description */}
              <div className="w-[302px] left-[24px] top-[190px] absolute text-xl leading-8 text-black/80 group-hover:text-white transition-all duration-300 h3-descb">
                {card.description}
              </div>

              {/* Learn More Button */}
              <button
                className="absolute bottom-0 -right-[8px]  rounded-br-[20px] rounded-tl-[20px] px-5 py-2 bg-white text-black  text-sm font-semibold flex items-center gap-2 transition-all duration-300
              opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0"
              >
                LEARN MORE
                <span>
                  <Image src="/arrow.svg" alt="Arrow" width={16} height={16} />
                </span>
              </button>
            </div>
          ))}
        </div>
      </section>
      <section
        data-aos="fade-up"
        className="flex justify-center items-center  mt-[120px]"
      >
        <div className="flex items-center gap-20">
          <div className="">
            <iframe
              width="560"
              height="615"
              src="https://www.youtube.com/embed/yHucWNu6CXM?si=DgxPTPgp83VW3144"
              className="rounded-3xl -mt-16 "
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="w-[672px] flex flex-col items-center hed-txth2">
            <h2 className="text-4xl sm:text-[56px] font-extrabold text-gray-900 leading-[70px]">
              Transform Banking with CC&C Solutions!
            </h2>
            <p className="text-[20px] text-gray-600 mt-6 text-justify tracking-tight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, qui provident adipisci magnam iste tempore cupiditate
              quas sequi. Accusamus non est eaque, dolores quia doloribus illum
              reiciendis eligendi natus esse! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Repellendus, qui provident adipisci
              magnam iste tempore cupiditate quas sequi. Accusamus non est
              eaque, dolores quia doloribus illum reiciendis eligendi natus
              esse! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="relative w-[350px]">
              <div className=" border-2 p-2 relative border-[#ffc40e] inline-flex justify-center items-center mt-20 overflow-hidden">
                <div className="h-20  bg-[#ffc40e] px-8 inline-flex justify-center items-center gap-2.5">
                  <div className="relative justify-start text-neutral-800 text-[32px] font-extrabold leading-10">
                    over 20+ years
                  </div>
                </div>
              </div>
              <Image
                src="/kama.svg"
                className="absolute top-10 -right-16 -z-10"
                alt="Company Logo"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#0C71C3] flex flex-col justify-center items-center py-[160px] mt-[120px] hed-txth2">
        <h2 className=" text-white font-extrabold text-[56px] leading-[70px] text-center" style={{color:"#fff"}}>
          Industry-Leading Architecture Training <br /> and Certification
        </h2>
        <p className="text-[20px] mt-6 lg:w-[1066px] text-center text-[#EEEEEE]  leading-[35px]" style={{color:"#fff"}}>
          Getting Architecture right provides one of the highest returns on
          investment for your business. And equipping your teams with the right
          skills and qualifications is our business. We have been training and
          certifying hundreds of organisations and hundreds of thousands of
          individuals world-wide for over 20 yearsin industry-leading
          frameworks, standards andtools.
        </p>
        <div className="flex justify-center gap-6 mt-10 hed-txth3">
          {cardData3.map((card, index) => (
            <div
              key={index}
              className="group w-[360px] h-[450px] relative bg-[#0c71c3] rounded-[20px] border border-[#eeeeee] overflow-hidden transition-all duration-300 hover:bg-white"
            >
              {/* Icon */}
              <div className="w-[67.2px] h-16 left-[24px] top-[24px] absolute bg-[#0d9eff] group-hover:bg-[#0C71C3] rounded-xl inline-flex justify-center items-center ">
                <Image src={card.icon} alt="Icon" width={40} height={40} />
              </div>

              {/* Title */}
              <div className="w-[203px] left-[24px] top-[100px] absolute text-[32px] font-extrabold leading-10 text-[#eeeeee] group-hover:text-black transition-all duration-300">
                {card.title}
              </div>

              {/* Description */}
              <div className="w-[302px] left-[24px] top-[152px] absolute text-xl leading-8 text-[#e0e0e0] group-hover:text-black transition-all duration-300 h3-descb">
                {card.description}
              </div>

              {/* Learn More Button */}
              <button
                className="absolute bottom-0 -right-[8px]  rounded-br-[20px] rounded-tl-[20px]  px-5 py-2 bg-[#0d9eff] text-white  text-sm font-semibold flex items-center gap-2 transition-all duration-300
              opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0"
              >
                LEARN MORE
                <span>
                  <Image src="/arrow.svg" alt="Arrow" width={16} height={16} />
                </span>
              </button>
            </div>
          ))}
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
      <section className="flex flex-col items-center justify-center mt-[202px]">
        <div className="md:w-[1128px]">
          <div className="flex flex-col    w-full ">
            <h2 className=" text-black font-extrabold text-[56px] hed-txth2">
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
      <section className="mt-[202px]">
        <div className="bg-[url(/num.png)] bg-contain bg-center number-bg">
          <div className=".hed-txth2">
            <h2 className=" text-white text-center font-extrabold text-[56px]">
              Our Numbers Speak
            </h2>
          </div>
          <main data-aos="fade-up">
            <StatsCounter />
          </main>
        </div>
      </section>
      <section className=" flex justify-center items-center flex-col bg-[#FAFAFA]">
        <div className="md:w-[1128px] mt-20">
          <div className="flex flex-col gap-5 hed-txth2">
            <h2 className="font-bold text-[56px]">Our Team: Our People</h2>
            <p className="text-[20px] leading-[35px] text-[#393939]">
              CC&C harnesses the collective power of global expertise in
              architecture, data, digital transformation, and modern delivery
              paradigms to redefine the landscape of IT consulting. Our team,
              composed of consultant experts from around the world, brings deep,
              cross-domain experience to the forefront of every engagement
            </p>
            <p className="text-[20px] leading-[35px] text-[#393939]">
              Our team have a 20+ year track record of delivering tailored,
              impactful solutions that drive real, measurable outcomes.
            </p>
            <p className="text-[20px] leading-[35px] text-[#393939]">
              Whether its through strategic consultancy, the implementation of
              advanced IT strategies, or guiding digital transformation efforts,
              our focus remains unwavering: to empower our clients with the
              tools and knowledge necessary for enduring success in a
              digital-first world.
            </p>
          </div>
        </div>
        <div data-aos="fade-zoom" className="md:w-[1128px] pt-20 pb-40">
          <div className=" relative flex justify-start items-center">
            <Image
              src="/last.png"
              alt="background"
              className="w-[700px] relative"
              layout="responsive"
              width={700}
              height={60}
            />
            <div className="absolute top-[58px]  px-[50px] hed-txth4 hed-txth2 helping-wd">
              <h4 className="text-[24px] text-white" style={{color:"#fff"}}>
                Helping Organisations Excel in Architecture over 20 years
              </h4>
              <h2 className="text-[36px] text-white font-bold" style={{color:"#fff"}}>
                Learn more about our services
              </h2>
              <button className="-mt-[10px] flex items-center justify-center gap-2 bg-white text-[#0C71C3]  w-[202px] py-3 rounded-full text-lg font-semibold shadow-lg  transition" style={{marginTop:"-5px !important"}}>
                <span>
                  <Image
                    className=" "
                    src="/arrow2.svg"
                    alt="Company Logo"
                    width={40}
                    height={40}
                  />
                </span>{" "}
                TALK TO US
              </button>
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
              <a href="#">Training</a>
              <a href="#">Enquire now</a>
              <a href="/Contact">Contact us</a>
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
}
