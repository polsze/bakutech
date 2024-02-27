import React from 'react';
import { motion } from 'framer-motion';

import '/src/css/services.css';
import 'aos/dist/aos.css';

const Services = () => {
  const backgrounds = [
    { bgClass: 'bg-card1',  title: 'Diseño Web', description: 'La innovación es nuestra piedra angular. Nos esforzamos por explorar constantemente nuevas tecnologías y enfoques creativos para ofrecer soluciones vanguardistas y adaptadas a las necesidades de nuestros clientes. Cada proyecto es una oportunidad para desafiar los límites y crear experiencias digitales excepcionales.' },
    { bgClass: 'bg-card2', title: 'Desarrollo de Aplicaciones', description: 'La innovación es nuestra piedra angular. Nos esforzamos por explorar constantemente nuevas tecnologías y enfoques creativos para ofrecer soluciones vanguardistas y adaptadas a las necesidades de nuestros clientes. Cada proyecto es una oportunidad para desafiar los límites y crear experiencias digitales excepcionales.' },
    { bgClass: 'bg-card3', title: 'Sistemas', description: 'La innovación es nuestra piedra angular. Nos esforzamos por explorar constantemente nuevas tecnologías y enfoques creativos para ofrecer soluciones vanguardistas y adaptadas a las necesidades de nuestros clientes. Cada proyecto es una oportunidad para desafiar los límites y crear experiencias digitales excepcionales.' }
  ];

  return (
    <section className='w-full h-auto flex flex-col items-start justify-center bg-black'>
      <div className='flex items-start flex-col justify-start h-24 pl-60 py-40 xxxl:pl-12 sm:pt-10 sm:h-32 sm:pl-8'>
        <h2 className='pl-4 flex items-center text-gray-400 text-5xl font-bold border-l-8 border-orange-500 xl:text-4xl sm:text-2xl xs:text-xl' data-aos="zoom-out-down" data-aos-duration="2000">
          <span className='text-orange-400'>Soluciones Digitales</span>&nbsp;a Medida
        </h2>
        <p className='w-1/3 mt-10  ml-10 text-gray-400 xxxl:mt-5 xxxl:ml-6 lg:w-2/3'>Con un equipo de especialistas en tecnología altamente capacitados a bordo, trabajamos junto a vos para explorar, impulsar y potenciar tu proyecto. Nos motiva una gran misión: ayudarte a convertir en realidad tus sueños creando experiencias digitales de alta calidad que le aporten un valor agregado a tu empresa y que tengan un impacto significativo en su entorno. Excelencia en el diseño y desarrollo de software para construir el futuro.</p>
        <motion.button className='animate-bounce w-auto h-12 px-2 rounded-lg bg-orange-500 font-medium m-auto hover:bg-lime-500 transition-all duration-300 ease-linear hover:shadow-verde xxxl:mt-12 xl:mt-12 sm:mt-6'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, type: "spring", stiffness: 50, duration: 2, ease: "linear", }}
        >
          Contactese ahora!
        </motion.button>
      </div>
      <div className='w-[75%] h-auto mt-28 mb-12 rounded-xl m-auto xxxl:w-full'>
        <h3 className='text-left text-4xl font-bold mb-6 ml-12 text-gray-300 border-b-2 inline-block border-orange-400 xxxl:mt-12 xl:text-3xl xl:mt-24 lg:mt-0 sm:mt-40 xs:mt-48'>Nuestros Servicios</h3>
        <div className='flex items-start justify-start lg:flex-col' data-aos="zoom-in">
          {/* CARDS */}
          {backgrounds.map((background, index) => (
            <article key={index} className={`mx-auto max-w-sm ${background.bgClass} bg-cover bg-center  transform duration-500 hover:-translate-y-2 cursor-pointer group rounded-2xl hover:shadow-naranja xl:max-w-xs lg:mb-4`}>
              <div className="bg-black bg-opacity-20  px-10 flex flex-wrap flex-col pt-32 hover:bg-opacity-75 transform duration-300 rounded-2xl">
                <h4 className="text-gray-100 text-3xl mb-1 transform uppercase translate-y-20 group-hover:translate-y-0 duration-300 lg:text-2xl">{background.title}</h4>
                <div className="w-16 h-2 bg-orange-500 rounded-full mb-10 transform translate-y-20 group-hover:translate-y-0 duration-300"></div>
                <p className="opacity-0 text-gray-100 text-xl group-hover:opacity-80 transform duration-500 pb-2 lg:text-base">{background.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
