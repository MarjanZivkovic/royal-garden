import React, {useState, useEffect} from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

let activeIndex = 0;

function Testimonials({data}) {
  const [testimoial, setTestimonial] = useState(data[activeIndex]);  

  useEffect(() =>{
      function changeTestimonial(){
        activeIndex++;
        if ( activeIndex > data.length - 1){
            activeIndex = 0;
        }
        setTestimonial(data[activeIndex]);
    }
    setInterval( changeTestimonial, 8000 )
  }, [data])  

  return (
    <section className="testimonials">
      <div className="wrapper">
        <h2 className="title transformed-up">
          <span className="black">Reč</span> <br />
          <span className="cursive">Naših Kupaca</span>
        </h2>
        <div className="line"></div>
        <div className="testimoials-text">
          <FaQuoteLeft className="quote-left"/>
          <FaQuoteRight className="quote-right"/>
          <p className="testimonials-p">{testimoial.text}</p>
          <p className="testimonials-name">{testimoial.person}</p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
