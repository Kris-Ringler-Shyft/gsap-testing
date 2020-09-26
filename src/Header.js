import React, { useRef, useEffect, useState } from 'react';
import { TweenMax, Power3, Bounce, yoyoEase, Elastic } from 'gsap'

const Header = () => {

  let bigText = useRef(null);
  let smallText = useRef(null);

  useEffect(() => {
    TweenMax.fromTo(bigText, 3, { y: 500, opacity: 0 }, { y: 0, opacity: 1, delay: 1 });
    TweenMax.fromTo(smallText, 1.5, { y: 500, opacity: 0 }, { y: 0, opacity: 1, delay: 3.6, ease: Elastic.easeOut.config(1, 1), yoyoEase: true });
  })

  return (
    <>
      <div className="header-container-1">
        <div className="header-big-text" ref={element => bigText = element}> WELCOME TO </div>
      </div>
      <div className="header-container-2">
        <div className="header-small-text" ref={element => smallText = element}> my test page </div>
      </div>

    </>
  )
}

export default Header
