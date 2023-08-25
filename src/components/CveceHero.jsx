import React, { useState, useEffect } from 'react'

function CveceHero() {
  const [ index, setIndex ] = useState(1);

  function nextImg(){
    setIndex( prevState => prevState === 3 ? 1 : prevState + 1 )
  }

  useEffect(() =>{
    const interval = setInterval( nextImg, 5000 );

    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [])
  
  return (
    <main className='hero-container cvece-hero-container'>
        <div className={`main hero flower-page-hero1 show${index}`}>
            <div className="wrapper">
                <h1 className="hero-title transformed-down">
                 Cveće <span className="d-block">za sve</span> <span className="yellow cursive">Prilike</span>{" "}
                </h1>
            </div>
        </div>
        <div className={`main hero flower-page-hero2 show${index}`}>
            <div className="wrapper">
                <h1 className="hero-title transformed-down">
                 Cveće <span className="d-block">za sve</span> <span className="yellow cursive">Prilike</span>{" "}
                </h1>
            </div>
        </div>
        <div className={`main hero flower-page-hero3 show${index}`}>
            <div className="wrapper">
                <h1 className="hero-title transformed-down">
                 Cveće <span className="d-block">za sve</span> <span className="yellow cursive">Prilike</span>{" "}
                </h1>
            </div>
        </div>
    </main>
  )
}

export default CveceHero;