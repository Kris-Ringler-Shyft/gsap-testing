import React, { useRef, useEffect, useState } from 'react';
import { TweenMax, Power3, Bounce, yoyoEase, Elastic, ScrollTrigger } from 'gsap'

const TextLeft = ({ text }) => {
  let textBox = useRef(null)
  useEffect(() => {
    TweenMax.fromTo(textBox, 3, {
      x: "185%",
      rotation: 360,

    }, {
      x: 0,
      rotation: 20,
      delay: 8,
      opacity: 1,
      yoyo: true,
      immediateRender: false
    })
  })

  return (
    <>
      <div className="containerTextLeft" ref={element => textBox = element}>
        <p>{text}</p>
      </div>
    </>
  )
}

export default TextLeft
