import React, { useState, useEffect } from 'react'

function Hero() {
  const [ index, setIndex ] = useState(1);

  function nextImg(){
    setIndex( prevState => prevState === 4 ? 1 : prevState + 1 )
  }

  useEffect(() =>{
    const interval = setInterval( nextImg, 5000 );

    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [])
  
  return (
    <main className='hero-container'>
        <div className={`main hero hero1 show${index}`}>
            <div className="wrapper">
            <h1 className="hero-title transformed-down">
                Royal <span className="d-block">Garden</span>{" "}
                <span className="yellow">Milenković</span>
            </h1>
            </div>
        </div>
        <div className={`main hero hero2 show${index}`}>
            <div className="wrapper">
            <h1 className="hero-title transformed-down">
                Royal <span className="d-block">Garden</span>{" "}
                <span className="yellow">Milenković</span>
            </h1>
            </div>
        </div>
        <div className={`main hero hero3 show${index}`}>
            <div className="wrapper">
            <h1 className="hero-title transformed-down">
                Royal <span className="d-block">Garden</span>{" "}
                <span className="yellow">Milenković</span>
            </h1>
            </div>
        </div>
        <div className={`main hero hero4 show${index}`}>
            <div className="wrapper">
            <h1 className="hero-title transformed-down">
                Royal <span className="d-block">Garden</span>{" "}
                <span className="yellow">Milenković</span>
            </h1>
            </div>
        </div>
    </main>
  )
}

export default Hero;