import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { hobbies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const HobbiesCard = ({ index, name, description, image }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Hobbies = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>WHAT I DO WHEN I AM FREE</p>
        <h2 className={styles.sectionHeadText}>Hobbies.</h2>
      </motion.div>

      <div className="w-full flex ">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          A overview of my own interests and hobbies can be seen here. such as
          my personal traits and leisure activities.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {hobbies.map((hobbie, index) => (
          <HobbiesCard key={`hobbie-${index}`} {...hobbie} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Hobbies, "");
