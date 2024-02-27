import React from 'react'
import Logo from '/src/assets/img/logo1.webp'




const Footer = () => {
  return (
    <>
      <footer className='container h-auto bg-black pt-24'>
        <div className=''>
          <h6 className='text-5xl font-bold w-1/4 relative left-80 ml-6 text-white xxxl:left-56 xxxl:text-4xl xxl:left-48 xl:left-36 lg:left-24 xs:left-16'>¿Cómo podemos ayudarte?, no dudes en contactarnos!</h6>
        </div>
        <div className='flex flex-row justify-around items-center mb-10 sm:flex-col'>
          <p className='w-1/5 text-white mt-4 sm:w-2/5 sm:mb-6'>¿Listo para llevar tu proyecto al siguiente nivel? ¡Contáctanos hoy mismo para discutir tus necesidades y comenzar a trabajar juntos!</p>
          <button className='w-auto h-12 px-2 rounded-lg bg-orange-500 font-medium  hover:bg-lime-500 transition-all duration-300 ease-linear hover:shadow-verde'
          >
            Contactese ahora!
          </button>
        </div>
        <div className='flex flex-row items-center justify-around w-[73%] mx-auto my-20 border-b pb-6 lg:w-[80%] sm:flex-col sm:my-4'>
          <img src={Logo} alt="" />
          
                        <a href="#" className='text-xl text-white hover:text-orange-400 ease-in duration-200 sm:pt-4'>Home</a>
                        <a href="#" className='text-xl text-white hover:text-orange-400 ease-in duration-200 sm:py-4'>Compañía</a>
                        <a href="#" className='text-xl text-white hover:text-orange-400 ease-in duration-200 sm:pb-4'>Soluciones digitales</a>
                        <a href="#" className='text-xl text-white hover:text-orange-400 ease-in duration-200'>Clientes</a>
                   
        </div>
        <p className='text-center pb-2 text-white'>Copyright @ 2024 Bakutech systems.</p>
      </footer>
    </>
  )
}

export default Footer