import React from "react";

const Member = () => {
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
    <section id="member">
      <div>
        <h1 className="mb-3">Get a free membership for a great experience</h1>
        <a className="tap" href="#" onClick={bubleAni}>
          JOIN NOW
        </a>
      </div>
    </section>
  );
};

export default Member;
