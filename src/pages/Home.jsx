import React from "react";
import { Link } from "react-router-dom";

import { FaCheckCircle } from "react-icons/fa";

import WhyUs from "../components/WhyUs";
import Testimonials from "../components/Testimonials";
import Gallery from "../components/Gallery";
import FindUs from "../components/FindUs";
import testimonials from "../data/testimonials";

import kaliopa from "../productsImg/kaliopa1.jpg";
import verbena from "../productsImg/verbena3.jpg";
import hrizantema from "../productsImg/hrizantema3.jpg";

import stadion from "../img/stadion.jpg";
import jezero from "../img/jezero.jpg";
import park from "../img/park.jpg";
import malch from "../img/malch.jpg";
import kuce from "../img/kuce.jpg";

const images = [stadion, jezero, park, malch, kuce];

document.cookie = 'cookieName=cookieValue; SameSite=None; Secure';

function Home() {
  return (
    <>
      <main className="main hero">
        <div className="wrapper">
          <h1 className="hero-title transformed-down">
            Royal <span className="d-block">Garden</span>{" "}
            <span className="yellow cursive">Milenković</span>
          </h1>
        </div>
      </main>
      <section className="about-us">
        <div className="wrapper">
          <Link className="link-btn" to="/o-nama">
            Više o nama
          </Link>
          <h3 className="cursive yellow">Dobro došli u naše carstvo!</h3>
          <p>
            Mi smo rasadnik sa tradicijom i iskustvom. Jedna od{" "}
            <span className="yellow">najvećih industrija cveća i četinara</span>{" "}
            na jugu Srbije.
          </p>
          <p>
            Nudimo Vam <span className="yellow">širok izbor svežeg cveća</span>{" "}
            za sve prilike. Bilo da želite da obradujete voljenu osobu divnim
            buketom ili ulepšate Vaš dom ili baštu, imamo sve što Vam je
            potrebno da Vaša ideja zaživi.
          </p>
        </div>
      </section>
      <section className="our-products">
        <h2 className="title transformed-down">
          Naše <br /> <span className="yellow">Cveće</span>
        </h2>
        <div className="products-display">
          <div className="first-img">
            <Link to='/naše-cveće/hrizantema'><img src={hrizantema} alt="hrizantema" /></Link>
          </div>
          <div className="middle-img">
            <Link to='/naše-cveće/kaliopa'><img src={kaliopa} alt="kaliopa" /></Link>
          </div>
          <div className="fake-img">&nbsp;</div>
          <div className="last-img">
            <Link to='/naše-cveće/verbena'><img src={verbena} alt="verbena" /></Link>
          </div>
        </div>
        <Link className="link-btn" to="/naše-cveće">
          Vidite sve
        </Link>
      </section>
      <section className="our-work">
        <div className="wrapper">
          <h2 className="title transformed-up">
            Naše <br /> <span className="black">Delatnosti</span>
          </h2>
          <ul className="black">
            <li>
              <FaCheckCircle /> Uređenje dvorišta i parkova
            </li>
            <li>
              Proizvodnja i prodaja:
            </li>
            <li>
              <FaCheckCircle />  Cveća
            </li>
            <li>
              <FaCheckCircle /> Rasada
            </li>
            <li>
              <FaCheckCircle /> Četinara
            </li>
            <li>
              <FaCheckCircle /> Lišćara
            </li>
            <li>
              <FaCheckCircle /> Ukrasnog žbunja
            </li>
            <li>
              <FaCheckCircle /> Začinskog bilja
            </li>
          </ul>
        </div>
      </section>
      <WhyUs />
      <section className="gallery black">
        <div className="wrapper">
          <h2 className="title">
            <span>Parkovi</span> <br />{" "}
            <span className="cursive">I Dvorišta</span>
          </h2>
          <div className="home-gallery d-flex">
            <Gallery images={images} width={560} />
            <div className="parks-copy">
              Uređeno dvorište ostavlja prvi dobar utisak o Vama. Mi u rasadniku Milenković tretiramo dvorišta naših klijenata kao svoje. Da bismo izašli u susret Vašim jedinstvenim potrebama, za svakog klijenta kreiramo <span className="gray">poseban program</span> i nudimo <span className="gray">najbolja rešenja</span>. Dugogodišnje iskustvo i stručnost u ovoj oblasti razlog su što naše ime stoji iza nekih od <span className="gray">najlepših vrtova</span> u gradu, ali i novog nacionalnog fudbalskog stadiona u Leskovcu.
              <Link className="link-btn" to="/naše-usluge">
                Saznajte više
              </Link>
            </div>
          </div>
          <h3 className="cursive text-center gray">Vaša vizija + naša stručnost = dvorište iz snova</h3>
        </div>
      </section>
      <section className="black home-conifer-container">
        <div className="wrapper home-conifers text-center">
          <h2 className="title transformed-up">
              <span>Naši</span> <br />{" "}
              <span className="cursive yellow">Četinari</span>
          </h2>
          <p>Dodajte zelenilo u Vaš svet tokom cele godine. <br /> Pogledajte našu ponudu četinara.</p>
          <Link className="link-btn" to="/naše-drveće">vidite sve</Link>
        </div>
      </section>
      <Testimonials data={testimonials}/>
      <FindUs />
    </>
  );
}

export default Home;
