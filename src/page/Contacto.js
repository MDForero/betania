import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import logo from "../assets/logo.png"

const Contacto = () => {
  return (
    <>
      <main id="contacto" className="relative">
        <div className='div-center'>
          <img src={logo} alt="logo" width="300px" />
        </div>
      </main>
      <div className='container'>
        <div>
        <h1>Contacto</h1>
        <section className="flex-wrap-around">
          <article className='card-contact'>
            <FontAwesomeIcon icon={faWhatsapp} size="3x"/>
            <a href='http://wa.me/+573005305657'>Escribenos <em>aquí</em></a>
          </article>
        </section>
        </div>

        <section>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.6424975549457!2d-72.7733616860153!3d4.998905740393399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6ad964a281cfef%3A0xe0f80e4026e2f7ad!2sBetania%20Chalet%20mirador!5e0!3m2!1ses-419!2sco!4v1676335618701!5m2!1ses-419!2sco" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </section>
      </div>
    </>
  )
}

export default Contacto