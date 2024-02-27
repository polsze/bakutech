import React, { useEffect }  from "react";
import useForm from "../hooks/useForm";
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  
  const initialData = {
    nombre: "",
    correo: "",
    asunto: "",
    mensaje: "",
  };

  const onValidate = (form) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexComments = /^.{1,255}$/;
    let regexPhoneNumber = /^[\d-]+$/;

    if (!form.nombre.trim()) {
      errors.nombre = 'El campo "Nombre" no debe estar vacío.';
    } else if (!regexName.test(form.nombre)) {
      errors.nombre = 'El campo "Nombre" solo acepta letras y espacios.';
    }

    if (!form.correo.trim()) {
      errors.correo = 'El campo "Correo" no debe estar vacío.';
    } else if (!regexEmail.test(form.correo)) {
      errors.correo = 'El campo "Correo" contiene un formato no.';
    }

    if (!form.asunto.trim()) {
      errors.asunto = 'El campo "Asunto" no debe estar vacío.';
    } else if (!regexName.test(form.asunto)) {
      errors.asunto = 'El campo "Asunto" solo acepta letras y espacios.';
    }

    if (!form.telefono.trim()) {
      errors.telefono = 'El campo "Teléfono" es obligatorio.';
    } else if (!regexPhoneNumber.test(form.telefono)) {
      errors.telefono = 'El campo "Teléfono" solo debe contener números y guiones.';
    }

    if (!form.mensaje.trim()) {
      errors.mensaje = 'El campo "Mensaje" no debe estar vacío.';
    } else if (!regexComments.test(form.mensaje)) {
      errors.mensaje = 'El campo "Mensaje" acepta solo 255 caracteres.';
    }

    return errors;
  };

  const { form, errors, loading, handleChange, handleSubmit } = useForm(
    initialData,
    onValidate
  );

  useEffect(() => {
    AOS.init({ duration: 1000 })
  })

  return (
    <>
      <section className="container flex p-6 flex-row justify-center items-center bg-black sm:flex-col">
      <div 
          className='flex items-center justify-center h-24 sm:my-40'>
          <h3 className='pl-4 flex items-center justify-center m-auto text-white font-bold text-5xl border-l-8 h-40 border-orange-500 my-24 w-1/2 xxxl:text-4xl lg:h-60 sm:text-3xl' data-aos="zoom-in" >Contactese hoy para hacer realidad su proyecto!</h3>
          <svg xmlns="http://www.w3.org/2000/svg" className="relative right-32 animate-ping lg:right-4 sm:hidden" width="2.5em" height="2.5em" viewBox="0 0 32 32"><g fill="none"><path fill="#c94219" d="M2 6a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"/><path fill="#fff" d="M24.833 17.008a1 1 0 0 0 0-1.387L19.72 10.31c-.625-.649-1.721-.207-1.721.693v3.063a.25.25 0 0 1-.25.25H8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9.75a.25.25 0 0 1 .25.25v3.063c0 .9 1.096 1.342 1.72.693z"/></g></svg>
          <svg xmlns="http://www.w3.org/2000/svg" className="hidden sm:block sm:animate-bounce sm:relative sm:top-40 sm:right-40" width="2em" height="2em" viewBox="0 0 32 32"><g fill="none"><path fill="#c94219" d="M2 6a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"/><path fill="#fff" d="M15 7a1 1 0 0 0-1 1v9.75a.25.25 0 0 1-.25.25h-3.063c-.9 0-1.342 1.096-.693 1.72l5.313 5.113a1 1 0 0 0 1.386 0l5.313-5.112c.649-.625.207-1.721-.693-1.721H18.25a.25.25 0 0 1-.25-.25V8a1 1 0 0 0-1-1z"/></g></svg>

        </div>
        <form className="flex flex-col justify-center items-center  rounded-xl w-96 bg-gradient-to-r from-black to-orange-500 opacity-90 sm:w-auto"
         onSubmit={handleSubmit}
         
         >
        <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" className="mt-3 animate-bounce sm:animate-pulse" viewBox="0 0 64 64"><path fill="#c94219" d="M56.7 0H9.6C4.9 0 0 7 0 26v38h4.3v-6h38.4v6H47l3.1-1.4v-6l6.7-3.1v3.9h4.3l3.1-1.4V20C64 9.1 61.3.2 56.7 0"/><path fill="#ed4c24" d="M9.7 0h46.9v32H9.7z"/><path fill="#ed2f24" d="M56.7 50.8H61v6.6h-4.3z"/><g fill="#ed4c24"><path d="M17.1 20L0 26C0 7 4.9 0 9.6 0s7.5 9 7.5 20"/><path d="M17.1 50L0 58V26l17.1-6z"/></g><g fill="#c94219"><path d="m64 50l-17.1 8V26L64 20zM50 62.6L46.9 64v-6l3.1-1.4z"/><path d="m64 55.9l-3.1 1.5v-6l3.1-1.5z"/></g><path fill="#ed4c24" d="M0 26v38h4.3v-6h38.4v6h4.2V26z"/><path fill="#c94219" d="M42.7 32.9c0-2.2-1.9-4-4.3-4H8.5c-2.3 0-4.3 1.8-4.3 4v18.2c0 2.2 1.9 4 4.3 4h29.9c2.3 0 4.3-1.8 4.3-4z"/><path fill="#ed4c24" d="M41.4 34.2c0-2.2-1.9-4-4.3-4H9.7c-2.3 0-4.3 1.8-4.3 4v15.6c0 2.2 1.9 4 4.3 4h27.4c2.3 0 4.3-1.8 4.3-4z"/><path fill="#fff" d="M14.6 37.7h2.8v8.6h-1.8v-7.2l-1.7 7.2H12l-1.7-7.2v7.2H8.5v-8.6h2.8l1.7 6.8zm7.2 0H24l3.3 8.6h-2.1l-.6-1.8h-3.4l-.6 1.8h-2zm-.1 5.4H24l-1.2-3.4zm8.4 3.2h-1.9v-8.6h1.9zm1.9-8.6h1.9v7.1h4.6v1.6H32z"/><path fill="#ed2f24" d="M43.7 19.1H18.4L5.9 22.5h37.8z"/><path fill="#af2b24" d="M12.9 3.5h39.5v15.6H12.9z"/><path fill="#ed4c24" d="m59.7 20l-17.1 6c0-19 4.9-26 9.6-26s7.5 9 7.5 20"/><path fill="#c94219" d="M18.4 19.1L5.9 22.5c0-13.9 3.6-19 7-19c3.5 0 5.5 7.5 5.5 15.6M64 20l-17.1 6c0-19 4.9-26 9.6-26S64 9 64 20"/></svg>
        <label className="text-white form-label font-bold text-xl pt-4 2xl:text-2xl sm:pl-2 sm:text-lg">Nombre</label>
            <input
              type="text"
              className="w-64 form-control rounded-lg sm:w-[95%] sm:mx-auto hover:bg-sky-200 pl-2"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              placeholder="Ingrese su nombre aquí"
            />
            {errors.nombre && (
              <div className="alert alert-danger p-2 rounded-xl mt-1 sm:w-[95%] sm:mx-auto">{errors.nombre}</div>
            )}

            <label className="text-white form-label pt-2 font-bold text-xl 2xl:text-2xl sm:pl-2 sm:text-lg">Correo electrónico</label>
            <input
              type="email"
              className="w-64 form-control rounded-lg sm:w-[95%] sm:mx-auto hover:bg-sky-200 pl-2"
              name="correo"
              value={form.correo}
              onChange={handleChange}
              placeholder="Ingrese su correo electrónico aquí"
            />
            {errors.correo && (
              <div className="alert alert-danger rounded-xl mt-1 p-2 sm:w-[95%] sm:mx-auto">{errors.correo}</div>
            )}

            <label className=" text-white form-label pt-2 font-bold text-xl  2xl:text-2xl sm:pl-2 sm:text-lg">Asunto</label>
            <input
              type="text"
              className="w-64 form-control rounded-lg sm:w-[95%]  sm:mx-auto hover:bg-sky-200 pl-2"
              name="asunto"
              value={form.asunto}
              onChange={handleChange}
              placeholder="Ingrese su asunto aquí"
            />
            {errors.asunto && (
              <div className="alert alert-danger rounded-xl mt-1 p-2 sm:w-[95%] sm:mx-auto">{errors.asunto}</div>
            )}

            <label className="text-white form-label pt-2 font-bold text-xl  2xl:text-2xl sm:pl-2 sm:text-lg">Teléfono</label>
            <input
              type="text"
              className="w-64 form-control rounded-lg sm:w-[95%] sm:mx-auto hover:bg-sky-200 pl-2"
              name="telefono"
              value={form.telefono}
              onChange={handleChange}
              placeholder="Ingrese su número de teléfono aquí"
            />
            {errors.telefono && (
              <div className="alert alert-danger p-2 mt-1 rounded-xl sm:w-[95%] sm:mx-auto">{errors.telefono}</div>
            )}

            <label className="text-white form-label pt-2 font-bold text-xl  2xl:text-2xl sm:pl-2 sm:text-lg">Mensaje</label>
            <textarea 
              className="form-control rounded-xl sm:w-[95%] sm:mx-auto hover:bg-sky-200 pl-2"
              name="mensaje"
              value={form.mensaje}
              onChange={handleChange}
              cols="40"
              rows="6"
              placeholder="Ingrese mensaje aquí"
            />
            {errors.mensaje && (
              <div className="alert alert-danger p-2 mt-1 rounded-xl sm:w-[95%] sm:mx-auto">{errors.mensaje}</div>
            )}

            <div className="flex items-center justify-center py-4">
              <motion.button
                className="text-white py-2 rounded-xl font-bold text-xl bg-orange-600 px-32 mx-1
              w-[100%] sm:w-[95%]"
                type="submit"
                disabled={loading}
              >
                {loading ? "Enviando..." : "Enviar"}
              </motion.button>
            </div>
        </form>

      </section>
    </>
  );
};

export default Contact;
