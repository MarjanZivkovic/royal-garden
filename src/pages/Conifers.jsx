import React from 'react';
import { Link } from 'react-router-dom';

import cetinari from '../data/cetinari';
import liscari from '../data/liscari';
import zbunovi from '../data/zbunovi';

import {FaArrowUp, FaArrowDown} from 'react-icons/fa';


function Conifers() {
  return (
    <>
      <main className='main tree-page-hero'>
        <div className="wrapper">
          <h1 className="hero-title transformed-down">
              Drveće <span className="d-block">za svako</span> <span className="yellow cursive">Dvorište</span>{" "}
          </h1>
        </div>
      </main>
      <section className='products-intro about-us tree-intro'>
        <div className="wrapper">
          <div className='tree-links'>
            <Link className="link-btn" to="/naše-drveće/#četinari">
             Četinari
            </Link>
            <Link className="link-btn" to="/o-nama">
              lišćari
            </Link>
            <Link className="link-btn" to="/o-nama">
              žbunje
            </Link>
          </div>
          <h3 className='cursive'>Osetite mirnoću našeg <span className='yellow'>zimzelenog i listopadnog</span> drveća!</h3>
          <p>Nudimo Vam širok izbor <span className="yellow">lišćara, četinara, dekorativnog žbunja,</span> od patuljastih formi do velikih džinova, u svim nijansama zelene, zlatno-žute, plave, plavo-sive i srebrne boje.</p>
        </div>
      </section>
      <section className='conifers-container' id='četinari'>
        <div className="wrapper">
          <h2 className="title transformed-up">
            Naši <span className="d-block cursive black">Četinari</span>
          </h2>
          <p className='black tree-copy'>Naši četinari stoje uspravno i ponosno, nudeći Vam umirujuće <span className="gray">zelenilo tokom cele godine</span>. Veličanstveni borovi, smreke, tuje, čempresi će ne samo oplemeniti izgled Vašeg okruženja nego i <span className="gray">unaprediti kvalitet vazduha</span> koji udišete.</p>
          <p className="offers text-center black">Iz ponude izdvajamo</p>
          <ul className='products-display-ul d-flex'>
            {cetinari.map( item =>(
              <li key={item.name} className='text-center'>
                <Link to={`/naše-drveće/${item.name}`}>
                  <img src={item.img[0]} alt={item.name} />
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className='deciduous-pic-container' id='lišćari'>
        <div className="wrapper deciduous-pic">&nbsp;</div>
      </section>
      <section className='deciduous-container'>
        <div className="wrapper">
          <h2 className="title transformed-up transformed-up-more">
            Naši <span className="d-block cursive">Lišćari</span>
          </h2>
          <p className='black tree-copy'>Osetite <span className="gray">lepotu promene godišnjih doba</span> uz našu bogatu kolekciju listopadnog drveća. Naši lišćari nude senku i privatnost i neizostavni su deo dobre pejzažne arhitekture. Nudimo Vam <span className="gray">širok izbor drveća</span> različitog kolorita lišća, cvetova i oblika krošanja.</p>
          <p className="offers text-center black">Iz ponude izdvajamo</p>
          <ul className='products-display-ul d-flex'>
            {liscari.map( item =>(
              <li key={item.name} className='text-center'>
                <Link to={`/naše-drveće/${item.name}`}>
                  <img src={item.img[0]} alt={item.name} />
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className='deciduous-pic-container' id='ukrasno-žbunje'>
        <div className="wrapper deciduous-pic bushes-pic">&nbsp;</div>
      </section>
      <section className='conifers-container'>
        <div className="wrapper">
          <h2 className="title transformed-up transformed-up-more">
            Ukrasno <span className="d-block cursive">Žbunje</span>
          </h2>
          <p className='black tree-copy'>Ulepšajte izgled Vaše bašte našom <span className="gray">bogatom kolekcijom dekorativnog žbunja</span>. Ukrasno žbunje može biti savršen dodatak Vašem vrtu, koji će označiti njegove granice i izazvati interesovanje prolaznika. U ponudi su <span className="gray">razne varijante zimzelenih i cvetnih grmova</span>, različitih boja, veličina i oblika.</p>
          <p className="offers text-center black">Iz ponude izdvajamo</p>
          <ul className='products-display-ul d-flex'>
            {zbunovi.map( item =>(
              <li key={item.name} className='text-center'>
                <Link to={`/naše-drveće/${item.name}`}>
                  <img src={item.img[0]} alt={item.name} />
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className='ask-for-more'>
        <div className="wrapper">
          <p className='cursive'>Ovo <FaArrowUp className='yellow'/> je samo deo asortimana drveća iz našeg rasadnika. Naša <span className='yellow'>ponuda se stalno obogaćuje</span>, stoga ako niste pronašli četinar, žbun ili lišćar koji tražite slobodno nas kontaktirajte. <FaArrowDown className='yellow'/></p>
        </div>
      </section>
    </>
  )
}

export default Conifers;