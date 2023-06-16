import React from 'react';

import Gallery from '../components/Gallery';
import ServiceTestimonials from "../components/ServiceTestimonials";
import Partners from '../components/Partners';

import worker from '../img/radnik.jpg';
import radovi1 from '../servicesImg/radovi1.jpg';
import radovi2 from '../servicesImg/radovi2.jpg';
import radovi3 from '../servicesImg/radovi3.jpg';
import radovi4 from '../servicesImg/radovi4.jpg';
import radovi5 from '../servicesImg/radovi5.jpg';
import radovi6 from '../servicesImg/radovi6.jpg';
import radovi7 from '../servicesImg/radovi7.jpg';
import radovi8 from '../servicesImg/radovi8.jpg';
import radovi9 from '../servicesImg/radovi9.jpg';
import radovi10 from '../servicesImg/radovi10.jpg';

const radoviArr = [radovi1, radovi2, radovi3, radovi4, radovi5, radovi6, radovi7, radovi8, radovi9, radovi10]

document.cookie = 'cookieName=cookieValue; SameSite=None; Secure';

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
            <li>Pešačke staze</li>
            <li>Zeleni zidovi</li>
            <li>Tepih trava</li>
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
      <section className='technology'>
        <div className="wrapper">
          <h2 className="title black cursive">
            Savremena <span className="d-block">Tehnologija</span>
          </h2>
          <p>Royal Garden Milenković je kompanija posvećena inovacijama. U našem radu <span className='yellow'>primenjujemo najsavremeniju tehnologiju</span> poput senzora za vlagu, automatskog zalivanja, kompjuterskog monitoringa...</p>
          <div className='yellow text-center tech-copy'>Upravljajte svojim vrtom sa bilo kog mesta uz pomoć Vašeg telefona</div>
        </div>
      </section>
      <section className='yard-types'>
        <div className="wrapper">
          <h2 className="title transformed-up">
            Stilovi i <span className="d-block cursive yellow">Oblici</span>
          </h2>
          <h3 className='yellow text-center cursive'>Odaberite dvorište po svom ukusu!</h3>
          <div className="services-gallery">
            <Gallery images={radoviArr} width={400} />
            <div>
              <h3 className='yellow text-center cursive'>STILOVI</h3>
              <p><span className="yellow d-block">MODERAN STIL DVORIŠTA</span> 
              Ukoliko vam se dopada ideja da vaš vrt ne bude preopterećen mnogim detaljima, onda će ovaj moderni stil za uredjenje dvorista skrenuti vašu pažnju. Biljne vrste koje se koriste su vertikalne elegantne vrste, i razne druge vrste trava, a materijali su čelik, staklo, beton, crveni kedar i kamen.</p>
              <p><span className="yellow d-block">FORMALNI STIL DVORIŠTA</span> 
              Ukoliko volite simetriju i prave linije ovo je Vaš stil. Različito postavljene zimzelene biljke, travnjaci, žive ograde, drveće i staze su samo neki od elemenata koji izazivaju snažan utisak reda kod ovog stila dvorišta.</p>  
              <p><span className="yellow d-block">TROPSKI STIL DVORIŠTA</span> 
              Ovakva dvorišta podsećaju na dvorišta u tropskim krajevima, opuštena i relaksirajuća. Dominira neformalni efekat sa raznim listopadnim vrstama, velikim bogatim zelenim, i ljubičastim, crvenim i narandžastim lisovima.</p>
              <p><span className="yellow d-block">ORIJENTALNI STIL DVORIŠTA</span> 
              Ovaj stil je u stilu Japanskih vrtova, sa raznim minijaturnim drvećem, aranžiranim kamenjem i jezercetom. Za uredjenje baste ovog tipa koristimo još cvetajuće žbunaste vrste biljaka i drveće.</p>
              <h3 className='yellow text-center cursive'>OBLICI</h3>
              <p><span className="yellow d-block">S i C linije u dvorištu</span> 
              Ove linije mogu poslužiti kao ideje za uredjenje dvorista, naročito ako birate neformalan i prirodan stil.</p>
              <p><span className="yellow d-block">Krstaste linije u dvorištu</span> 
              Prave linije upravne jedna na drugu formiraju oblik krsta koji je tradicionalno korišćen u Francuskim vrtovima i formalnim stilovima XVII i XVIII veka. Krst pravi vizure kroz celo dvorište, i pogodni su za uređenjivanje dvorišta velikih površina.</p>
              <p><span className="yellow d-block">Dijagonale u uređivanju dvorišta</span> 
              Dijagonalne linije stvaraju više energije i pokreta od krst linija. One mogu probuti floralnost, ali isto tako mogu formirati osnovu za neformalni, asimetrični dizajn.</p>
              <p><span className="yellow d-block">Pravouganici i Kvadrati u uređenju vrta</span> 
              Formu pravougaonike i kvadrata često koristimo kada dvorište treba da poprimi elegantan, pomalo i minimalistički izgled.</p>
              <p><span className="yellow d-block">Krugovi i Elipse u dvorištu</span> 
              Ukoliko želite da naglasite centar vrta ili da ga učinite pogodnim za neko određeno dešavanje, oblici poput kruga i elipse će učiniti da taj doživljaj postignete lako.</p>
            </div>
          </div>
        </div>
      </section>
      <ServiceTestimonials />
      <Partners />
    </>
  )
}

export default Services;