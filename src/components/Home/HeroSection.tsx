import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Button from "../Comman/Button";


const HeroSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scleProgess = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <div className="dynamic-height relative text-white  mb-20">
      <div className="h-full opacity-90">
        <img
          src="./heroBg2.png"
          className="w-full h-full object-cover"
          alt=""
        />
      </div>
      <motion.div
        ref={ref}
        style={{
          scale: scleProgess,
          opacity: opacityProgess,
        }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="md:w-[40%] w-full m-auto flex justify-center items-center flex-col p-12 bg-black rounded-2xl bg-opacity-50">
          <h1 className="text-center text-[40px] font-bold mb-8">
            Crafting Tomorrow's Solutions, Today
          </h1>
          <p className="text-[20px] text-center mb-8">
            Welcome to the crossroads where creativity meets technology. I'm a
            software developer dedicated to turning complex problems into
            elegant solutions.
          </p>
          <div className="flex gap-8">
            <Button className= "bg-[#590BAA] hover:bg-[#3e146b]" > Let's talk</Button>
            <Button className ="hover:bg-[#0b0314]" > Learn more</Button>
          </div>
        </div>
      </motion.div>

    </div>
  );
};

export default HeroSection;
