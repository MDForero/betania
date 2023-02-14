import React from 'react'
import logo from "../assets/logo.png"
import poster from "../assets/269739296_441327377463969_952003645621149020_n.jpg"
import video from "../assets/video-betania.mp4"

const Inicio = () => {
  return (
    <>
      <main className='relative' >
        <video poster={poster} autoPlay loop muted>
          <source src={video}/>
        </video>
  
        <div className='div-center'>
          <img src={logo} alt="logo" width="300px" />
        </div>
        <div className='div-bottom white w-800'>
          <h1>¡Bienvenido a Betania Chalet-Mirador! </h1>
          <h2>El lugar perfecto para relajarte y disfrutar de la belleza natural de la zona.</h2>
        </div>
      </main>
      <section className='container'>
        <article>

        </article>
      </section>
    </>
  )
}

export default Inicio