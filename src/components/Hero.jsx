import React from 'react';
import AnimatedTextCharacter from './AnimatedTextCharacter';
import AnimatedTextCharacterTwo from './AnimatedTextCharacterTwo';
import AnimatedTextCharacterThree from './AnimatedTextCharacterThree';
import { motion } from 'framer-motion';


const Hero = () => {
  return (
    <div className="w-full h-screen relative bg-hero bg-cover bg-center xxl:bg-right xl:bg-center lg:bg-center sm:bg-heroSm" >

      <div className="absolute top-0 left-0 w-full h-full flex items-start justify-center flex-col -mt-28 sm:justify-start sm:top-36">
        <h1 className="text-white flex flex-col font-bold pl-10 sm:pl-5">
          <AnimatedTextCharacter text="Soluciones innovadoras para el" className="xl:text-xl" />
          <AnimatedTextCharacterTwo text="ÉXITO DIGITAL" className="text-orange-400 xxl:text-4xl sm:text-yellow-300" />
          <div className=''>
            <AnimatedTextCharacterThree text="Impulsa tu visión digital con nuestra" className="xl:text-xl" />
            <AnimatedTextCharacterThree text="experiencia en desarrollo" className="xl:text-xl" />

          </div>
        </h1>
        <motion.p
          className='w-1/4 relative left-10 mt-2 text-xl text-white font-light xl:w-1/3 xl:text-base sm:w-2/3 sm:left-5'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 2.5, type: "spring", stiffness: 50, duration: 2, ease: "linear",
          }}
        >
          En la era digital actual, la presencia en línea es más crucial que nunca.
          En nuestra empresa de desarrollo de software y web,
          nos enorgullece ofrecer soluciones innovadoras que transforman tus ideas en realidades digitales impactantes.
        </motion.p>
        <motion.button className='relative left-10 top-6 w-auto h-12 px-2 rounded-lg bg-orange-500 font-medium  hover:bg-lime-500 transition-all duration-300 ease-linear hover:shadow-verde'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, type: "spring", stiffness: 50, duration: 2, ease: "linear", }}
        >
          Contactese ahora!
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;

