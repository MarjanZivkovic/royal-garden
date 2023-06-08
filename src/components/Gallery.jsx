import React, {useState, useEffect} from 'react';
// import {FaArrowRight, FaArrowLeft} from 'react-icons/fa';
// import video from '../img/cvece.mp4'

function Gallery({images, width}) {
  const [ slide, setSlide ] = useState(0);
  const [ autoSlide, setAutoSlide ] = useState(true);
  
  // function prevSlide(){
  //   setSlide((prevState) => ( prevState === 0 ? images.length - 1 : prevState - 1 ))
  // }

  function nextSlide(){
    setSlide((prevState) => ( prevState === images.length - 1 ? 0 : prevState + 1  ))
  }

  useEffect(() =>{
    if(!autoSlide) return;
    const slideInterval = setInterval( nextSlide, 5000 );
    return () => clearInterval(slideInterval);
    // eslint-disable-next-line 
  }, [autoSlide]);

  return (
    <div className="gallery-showroom">
        <div className="gallery-imgs d-flex">
            {images.map((img, i) => (
                <img key={i} src={img} alt={img} className='gallery-img' style={{transform: `translateX(-${slide * width}px)`}} onMouseEnter={() => setAutoSlide(false)} onMouseLeave={() => setAutoSlide(true)}/>
            ))}
            {/* {[ images.map(img => (
                <img src={img} alt={img} className='gallery-img' style={{transform: `translateX(-${slide * 390}px)`}} onMouseEnter={() => setAutoSlide(false)} onMouseLeave={() => setAutoSlide(true)}/>
            )), <video src={video} autoPlay loop muted/> ]} */}
            <div className="dots d-flex">
              {images.map((_, i) =>(
                <div key={i} className={`dot ${ i ===  slide ? 'active-slide' : '' }`} onClick={() => setSlide(i)}>
                </div>
              ))}
            </div>
        </div>
        {/* <div className="gallery-btns d-flex">
            <div onClick={prevSlide}><FaArrowLeft /></div>
            <div onClick={nextSlide}><FaArrowRight /></div>
        </div> */}
    </div>
  )
}

export default Gallery;