"use client";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const stats = [
  { id: 1, value: 6, suffix: "", label: "Global Offices" },
  { id: 2, value: 30, suffix: "+", label: "Consultants" },
  { id: 3, value: 300, suffix: "+", label: "Clients" },
  { id: 4, value: 20, suffix: "+", label: "Years" },
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const interval = setInterval(() => {
        start += Math.ceil(value / 50); // Adjust speed
        if (start >= value) {
          setCount(value);
          clearInterval(interval);
        } else {
          setCount(start);
        }
      }, 20);
    }
  }, [inView, value]);

  return (
    <span ref={ref} className="text-[64px] font-extrabold text-[#0C71C3]">
      {count}
      {suffix}
    </span>
  );
};

export default function StatsCounter() {
  return (
    <section className=" flex justify-center mt-20 ">
      <div className="w-11/12 max-w-5xl bg-white shadow-lg h-[256px] rounded-b-3xl border-t-8 border-[#0D9EFF] p-6 flex justify-center items-center text-center">
        {stats.map((stat) => (
          <motion.div
            key={stat.id}
            className="flex flex-col items-center w-1/4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: stat.id * 0.2 }}
            viewport={{ once: true }}
          >
            <Counter value={stat.value} suffix={stat.suffix} />
            <p className="text-gray-700 text-[24px] text-bold" style={{fontWeight:"600"}}>{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
