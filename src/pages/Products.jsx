import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import cvece from '../data/cvece';
import CveceHero from '../components/CveceHero';
import Start from "../components/Start";
import NumCounter from '../components/NumCounter';

import {FaArrowDown} from 'react-icons/fa';


// sorting by name
const sortedCvece = cvece.sort((a, b) => a.name.localeCompare(b.name));

function Products({onLink}) {
  const [ searchTerm, setSearchTerm ] = useState('');
  const [ fiteredCvece, setFilteredCvece ] = useState(sortedCvece);

  // live search functionality
  function searchProducts(e){
    const query = e.target.value;
    setSearchTerm(query);

    const filteredProducts = sortedCvece.filter( item => item.name.toLowerCase().includes(query.toLowerCase()));
    setFilteredCvece(filteredProducts);
  }
 

  return (
    <>
      <Start />
      <CveceHero />
      <section className='products-intro about-us'>
        <div className="wrapper">
          <h3 className='cursive'>Nudimo Vam <span className='yellow'>širok izbor svežeg cveća</span> za sve prilike!</h3>
          <p>Od klasičnih ruža i ljiljana preko egzotičnih orhideja do kraljice kaliope, naše <span className="yellow">ručno ubrano</span> cveće zadovoljiće sve Vaše potrebe.</p>
        </div>
      </section>
      <section className='num-counter-on-products'>
        <div className="wrapper">
          <div className="big-num-container d-flex">
            <div>
              Više od<span className='d-block yellow'>vrsta cveća</span> 
            </div>
            <NumCounter target={70} duration={1500}/>
          </div>
        </div>
      </section>
      <section>
        <div className="wrapper">
          <p className="offers text-center yellow">Iz ponude izdvajamo</p>
          <label htmlFor="search-cvece">&nbsp;</label>
          <input id='search-cvece' className='search-input' type="text" value={searchTerm} onChange={searchProducts} placeholder='Pretražite...' />
          { fiteredCvece.length > 0 ?
            <ul className='products-display-ul d-flex'>
              {fiteredCvece.map( item =>(
                <li key={item.name} className='text-center'>
                  <Link to={`/naše-cveće/${item.name}`} onClick={onLink}>
                    <img src={item.img[0]} alt={item.name} />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
            :
            <div className='not-found text-center'>
              <p className=' cursive yellow title'>Trenutno nemamo cvet koji tražite</p>
              <p>Ipak ... <FaArrowDown className='yellow'/></p>  
            </div>
          }
        </div>
      </section>
      <section className='ask-for-more'>
          <div className="wrapper">
            <p className='cursive'>Ovo je samo deo asortimana cveća iz našeg rasadnika. Naša <span className='yellow'>ponuda se stalno obogaćuje</span>, stoga ako niste pronašli cvet koji tražite slobodno nas kontaktirajte. <FaArrowDown className='yellow'/></p>
          </div>
      </section>
    </>
  )
}

export default Products;