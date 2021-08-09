import React from "react";

const Hero = () => {
  const bubleAni = (e) => {
    let x = e.nativeEvent.offsetX;
    let y = e.nativeEvent.offsetY;

    const buble = document.createElement("span");
    buble.style.left = `${x}px`;
    buble.style.top = `${y}px`;
    e.target.appendChild(buble);
    buble.addEventListener("animationend", () => {
      buble.remove();
    });
  };
  return (
    <section id="hero">
      <div className="cap">
        <h1>
          Walking on water and developing software from a specification are easy
          if both are frozen
        </h1>
        <div className="btns">
          <a className="tap" href="#" onClick={bubleAni}>
            Read more
          </a>
          <a className="tap" href="#" onClick={bubleAni}>
            Be Member
          </a>
          <a className="tap" href="#" onClick={bubleAni}>
            Be Writter
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
