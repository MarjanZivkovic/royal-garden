import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {FaArrowLeft} from 'react-icons/fa';

import Gallery from '../components/Gallery';

import cvece from '../data/cvece';
import senka from '../productsImg/senka.svg';
import sirina from '../productsImg/sirina.svg';
import sunce from '../productsImg/sunce.svg';
import visina from '../productsImg/visina.svg';

const months = [
  'JAN', 'FEB', 'MAR', 'APR', 'MAJ', 'JUN',
  'JUL', 'AVG', 'SEP', 'OKT', 'NOV', 'DEC'
];

function Flower() {
  const {flowerName} = useParams();

  const cvet = cvece.find( item => item.name === flowerName );

  if(!cvet){
    return (<h2 className='text-center'>Nema cveta koji tražite!</h2>);
  }

  return (
    <>
      <section className='flower-container'>
        <div>
          <h1 className='cursive'>{cvet.name}</h1>
          <div className='flower-wrapper'>
            <Gallery images={cvet.img} width={400} />
            <div className='flower-info-container black'>
              <h2 className='text-center'>{cvet.name && cvet.name}</h2>
              <p>{cvet.description && cvet.description}</p>
              <ul>
                <li><strong>Životni vek biljke:</strong> {cvet.lifetime && cvet.lifetime}</li>
                <li><strong>Izdržljivost:</strong> {cvet.endurance && cvet.endurance}</li>
                <li><strong>Mesto sadnje:</strong> {cvet.place && cvet.place}</li>
              </ul>
              <div className="d-flex svg-icons">
                {cvet.height && 
                  <div>
                    <img src={visina} alt="visina biljke" />
                    <div>{cvet.height}</div>
                  </div>
                }
                {cvet.distance &&
                  <div>
                    <img src={sirina} alt="rastojanje biljke" />
                    <div>{cvet.distance}</div>
                  </div>
                }
                {cvet.sun &&
                  <div>
                    <img src={sunce} alt="sunce" />
                    <div>sunce</div>
                  </div>
                }
                {cvet.shadow &&
                  <div>
                    <img src={senka} alt="senka" />
                    <div>polusenka</div>
                  </div>
                }
              </div>
              <div>
                Vreme sadnje:
                <table>
                  <tbody>
                    <tr className='t-row'>
                      {months.map( month => (
                        <td key={month} className={cvet.time.includes(month) ? 'highlighted' : ''}>{month}</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className='text-center'>
            <Link className="link-btn d-flex" to="/naše-cveće">
              <FaArrowLeft /> <span>Nazad</span> 
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Flower;