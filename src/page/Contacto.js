import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import logo from "../assets/logo.png"

const Contacto = () => {
  return (
    <>
      <main id="contacto" className="relative">
        {/* <div className='div-center'>
          <img src={logo} alt="logo" width="300px" />
        </div> */}
      </main>
      <div className='container'>
        <div>
        <h1>Contacto</h1>
        <section className="flex-wrap-around">
          <article className='card-contact'>
            <FontAwesomeIcon icon={faWhatsapp} size="3x"/>
            <a href='http://wa.me/+573506276709'>Escribenos <em>aquí</em></a>
          </article>
        </section>
        </div>

        <section>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15901.222005834443!2d-72.8713006!3d4.888422!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6ad3d7c894d42b%3A0xd5338697c9a95d41!2sRANCHO%202R!5e0!3m2!1ses-419!2sco!4v1676417815895!5m2!1ses-419!2sco" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Ubicación de rancho 2r www.rancho2r.com"></iframe>
        </section>
      </div>
    </>
  )
}

export default Contacto