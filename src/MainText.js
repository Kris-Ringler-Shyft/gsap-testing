import React, { useRef, useEffect, useState } from 'react';
import { TweenMax, Power3, Bounce, yoyoEase, Elastic, ScrollTrigger } from 'gsap'


const MainText = ({ text }) => {
  let textBox = useRef(null)
  useEffect(() => {
    TweenMax.fromTo(textBox, 5, {
      y: "-200%",

    }, {
      y: 0,
      delay: 7,
      opacity: 1,
      yoyo: true,
      ease: Power3.easeOut,
      immediateRender: false
    })
  })

  return (
    <>
      <div className="container" ref={element => textBox = element}>
        <p>{text}</p>
      </div>
    </>
  )
}

export default MainText
