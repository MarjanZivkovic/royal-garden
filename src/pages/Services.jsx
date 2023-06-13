import React from 'react';
// import { Link } from 'react-router-dom';

import worker from '../img/radnik.jpg';

function Services() {
  return (
    <>
      <main className='main services-page-hero'>
        <div className="wrapper">
          <h1 className="hero-title transformed-down">
              Pobeda je <span className="d-block">u Vašem</span> <span className="yellow cursive">Dvorištu</span>{" "}
          </h1>
        </div>
      </main>
      <section className='about-us tree-intro'>
        <div className="wrapper">
          <h3 className='cursive'>Vaša vizija + naša stručnost = <span className='yellow upper'>dvorište iz snova</span></h3>
          <p>Uređeno dvorište ostavlja prvi dobar utisak na Vaše posetioce i klijente. Ne dozvolite da taj utisak bude loš. Prepustite uređenje Vašeg dvorišta <span className="yellow">profesionalcima iz Royal Garden Milenković</span>!</p>
        </div>
      </section>
      <section className='list-of-services'>
        <div className="wrapper">
          <h2 className="title transformed-up">
            Naše <span className="d-block cursive yellow">Usluge</span>
          </h2>
          <ul className='yellow'>
            <li>Planiranje</li>
            <li>Dizajn</li>
            <li>Idejno rešenje</li>
            <li>Upravljanje projektom</li>
            <li>Izvođenje radova</li>
            <li>Održavanje</li>
            <li>Hortikultura</li>
            <li>Nivelacija</li>
            <li>Drenaža</li>
            <li>Irigacija</li>
            <li>Busen trava</li>
            <li>Uklanjanje korova</li>
            <li>Dekorativni kamen</li>
            <li>Dekorativni malč</li>
            <li>Prskalice</li>
            <li>Fontane</li>
            <li>Živa ograda</li>
            <li>Formiranje travnjaka</li>
            <li>Sadnja cveća</li>
            <li>Sadnja drveća</li>
            <li>Dekorativno žbunje</li>
          </ul>
          <p className='cursive text-center'>I još mnogo toga po želji kupaca...</p>
        </div>
      </section>
      <section className='our-team'>
        <div className="wrapper">
          <h2 className="title transformed-up">
            Naš <span className="d-block cursive black">Tim</span>
          </h2>
          <div className="black d-flex">
            <p className='worker'>Naš tim za uređenje dvorišta i parkova čine <span className="gray">vrhunski stručnjaci sa višedecenijskim iskustvom</span>, spremni da se uhvate u koštac sa svakim izazovom. Od ideje do realizacije, poput umetnika, oni prave divne skulpture koje će ulepšati Vaš životni prostor.</p>
            <img className='worker-img' src={worker} alt="radnik na odrzavanju" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Services;