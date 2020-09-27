import React, { useRef, useEffect } from 'react';
import { TweenMax, Power3 } from 'gsap'
import './App.css';
import Modal from './modal';
import Header from './Header';
import MainText from "./MainText";
import TextLeft from "./TextLeft";
import TextRight from "./TextRight";


function App() {
  const video = {
    url: "http://www.youtube.com/embed/xDMP3i36naA"
  }

  const text1 = {
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate officia ex nisi aperiam minima vitae itaque, repellat beatae tempore commodi, expedita iure magni odio explicabo voluptatem accusantium exercitationem fuga nulla. Dicta in perferendis, saepe vel beatae, eum nam, eveniet harum fuga incidunt temporibus deleniti vero nostrum? Odio voluptatem consequatur fugit minima totam quae quo ullam enim ea, quaerat dolores quis. Fugiat cum, nesciunt quas vel officiis recusandae sunt perspiciatis! "
  }

  const text2 = {
    text: "Qui omnis earum, asperiores ad, blanditiis minus culpa quo enim alias quis nam dolor, quas eum vitae aliquid eius veniam nobis. Expedita rerum illo consectetur, aliquam sapiente totam quod laudantium eius autem minus perspiciatis est sunt, porro eum omnis enim reiciendis vel placeat atque? Exercitationem, quis voluptatum animi necessitatibus rerum ipsum. Iure assumenda quasi rem molestias ipsum. Error officia a aspernatur quos sint voluptatum ratione sed! Facere corrupti dolorem aliquid voluptas error nobis delectus quam aperiam voluptate dolores praesentium, sunt tempore?"
  }

  const text3 = {
    text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate officia ex nisi aperiam minima vitae itaque, repellat beatae tempore commodi, expedita iure magni odio explicabo voluptatem accusantium exercitationem fuga nulla.
        Dicta in perferendis, saepe vel beatae, eum nam, eveniet harum fuga incidunt temporibus deleniti vero nostrum? Odio voluptatem consequatur fugit minima totam quae quo ullam enim ea, quaerat dolores quis.
        Fugiat cum, nesciunt quas vel officiis recusandae sunt perspiciatis! Qui omnis earum, asperiores ad, blanditiis minus culpa quo enim alias quis nam dolor, quas eum vitae aliquid eius veniam nobis.
        Expedita rerum illo consectetur, aliquam sapiente totam quod laudantium eius autem minus perspiciatis est sunt, porro eum omnis enim reiciendis vel placeat atque? Exercitationem, quis voluptatum animi necessitatibus rerum ipsum.
        Iure assumenda quasi rem molestias ipsum.Error officia a aspernatur quos sint voluptatum ratione sed! Facere corrupti dolorem aliquid voluptas error nobis delectus quam aperiam voluptate dolores praesentium, sunt tempore?`
  }

  return (
    <div className="App">
      <Header />
      <Modal videoSrc={video.url} />
      <MainText text={text3.text} />
      <TextLeft text={text1.text} />
      <TextRight text={text2.text} />

    </div>
  );
}

export default App;
