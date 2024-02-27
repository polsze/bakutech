import React, { useEffect } from 'react'
import BgCompany from '/src/assets/img/equipo.jpg'
import BgCompanyTwo from '/src/assets/img/finger.webp'
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '/src/css/company.css';


const Company = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 })
  })

  return (
    <>
      <div className='w-full h-auto flex flex-wrap flex-col bg-company bg-cover bg-no-repeat bg-fixed'>

        <div
          className='flex items-center justify-start h-24 pl-48 py-40 xxxl:pl-60 xl:pl-72 sm:pl-24 xs:pl-16'>
          <h2 className='pl-4 flex items-center text-white text-4xl border-l-8 h-24 border-orange-500 xl:w-2/3 xl:h-32 sm:h-48' data-aos="zoom-in" >Soluciones Tecnológicas: Innovación que Impulsa el Futuro</h2>
        </div>

        <motion.div className='flex flex-row w-2/3 items-center justify-center m-auto xxxl:w-[90%] xl:flex-col'
          initial={{ opacity: 0, x: "50%" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}

        >

          <div className='pr-20 xl:pr-0 xl:w-2/3 sm:w-full'>
            <h3 className='text-orange-500 text-xl mb-4'>
              Innovación Empresarial:  <span className='text-white'>Soluciones Vanguardistas para Empresas</span>
            </h3>
            <p className='text-white text-base xl:mb-6'>
              <span className='text-orange-500 uppercase'>En Bakutech Systems</span>, nos especializamos en ofrecer soluciones de desarrollo a medida para empresas emergentes y establecidas.<br></br><br></br>
              <span className='text-orange-500'>Desde el diseño de aplicaciones hasta la implementación de sistemas complejos</span>, nuestro equipo está comprometido a proporcionar las herramientas y las tecnologías necesarias para impulsar el crecimiento y la innovación en tu empresa.<br></br><br></br>
              <span className='text-orange-500'>Nos apasiona colaborar con tu empresa</span> para transformar tus ideas en realidad y llevar tu negocio al siguiente nivel.
              ¡Descubre cómo podemos ayudarte a alcanzar tus objetivos empresariales hoy mismo con Bakutech Systems!
            </p>
          </div>
          <img src={BgCompany} alt="" className='rounded-xl shadow-naranja' data-aos="fade-up" data-aos-duration="2000" />
        </motion.div>

        <motion.div className='flex flex-row w-2/3 justify-center items-center m-auto py-28 xxxl:w-[90%] xl:flex-col'
          initial={{ opacity: 0, x: "-50%" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <img src={BgCompanyTwo} alt="" className='rounded-xl shadow-naranja' data-aos="fade-up" />

          <div className='pl-20 xl:w-2/3 xl:pt-4 sm:w-full sm:pl-0'>
            <h3 className='text-orange-500 text-xl mb-2'>
              Soluciones innovadoras <span className='text-white'>para emprendedores</span>
            </h3>
            <p className='text-white text-base'>
              <span className='text-orange-500 uppercase'>En Bakutech Systems</span>, nos especializamos en ofrecer soluciones de desarrollo a medida para empresas emergentes y establecidas.<br></br><br></br>
              <span className='text-orange-500'>Desde el diseño de aplicaciones hasta la implementación de sistemas complejos</span>, nuestro equipo de expertos está comprometido a proporcionar las herramientas y la tecnología necesarias para impulsar el crecimiento y la innovación en tu empresa.<br></br><br></br>
              <span className='text-orange-500'>Nos apasiona colaborar con tu empresa</span> para transformar tus ideas en realidad y llevar tu negocio al siguiente nivel.
              ¡Descubre cómo podemos ayudarte a alcanzar tus objetivos empresariales hoy mismo con Bakutech Systems!
            </p>
            <motion.button className='mt-8 w-auto h-12 px-2 rounded-lg bg-orange-500 font-medium shadow-naranja hover:bg-lime-500 transition-all duration-300 ease-linear hover:shadow-verde'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5, type: "spring", stiffness: 50, duration: 2, ease: "linear", }}
            >
              Contactese ahora!
            </motion.button>
          </div>
        </motion.div>




      </div>
    </>
  )
}

export default Company