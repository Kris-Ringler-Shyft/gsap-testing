import React, { useRef, useEffect, useState } from 'react';
import { TweenMax, Power3, Bounce, yoyoEase, Elastic, ScrollTrigger } from 'gsap'

const TextRight = ({ text }) => {
  let textBox = useRef(null)
  useEffect(() => {
    TweenMax.fromTo(textBox, 3, {
      x: 0,
      rotation: 360,

    }, {
      x: "185%",
      rotation: -20,
      delay: 10,
      opacity: 1,
      yoyo: true,
      immediateRender: false
    })
  })
  return (
    <>
      <div className="containerTextRight" ref={element => textBox = element} >
        <p>{text}</p>
      </div>
    </>
  )
}

export default TextRight
