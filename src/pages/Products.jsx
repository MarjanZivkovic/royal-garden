import React from 'react';
import { Link } from 'react-router-dom';
import cvece from '../data/cvece';
import {FaArrowUp, FaArrowDown} from 'react-icons/fa';

function Products() {
  return (
    <>
      <main className='main flower-page-hero'>
        <div className="wrapper">
          <h1 className="hero-title transformed-down">
              Cveće <span className="d-block">za sve</span> <span className="yellow cursive">Prilike</span>{" "}
          </h1>
        </div>
      </main>
      <section className='products-intro about-us'>
        <div className="wrapper">
          <h3 className='cursive'>Nudimo Vam <span className='yellow'>širok izbor svežeg cveća</span> za sve prilike!</h3>
          <p>Od klasičnih ruža i ljiljana preko egzotičnih orhideja do kraljice kaliope, naše <span className="yellow">ručno ubrano</span> cveće zadovoljiće sve Vaše potrebe.</p>
        </div>
      </section>
      <section>
        <div className="wrapper">
          <p className="offers text-center yellow">Iz ponude izdvajamo</p>
          <ul className='products-display-ul d-flex'>
            {cvece.map( item =>(
              <li key={item.name} className='text-center'>
                <Link to={`/naše-cveće/${item.name}`}>
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
          <p className='cursive'>Ovo <FaArrowUp className='yellow'/> je samo deo asortimana cveća iz našeg rasadnika. Naša <span className='yellow'>ponuda se stalno obogaćuje</span>, stoga ako niste pronašli cvet koji tražite slobodno nas kontaktirajte. <FaArrowDown className='yellow'/></p>
        </div>
      </section>
    </>
  )
}

export default Products;