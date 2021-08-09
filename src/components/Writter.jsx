import React from "react";

const Writter = () => {
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
    <section id="writter">
      <div className="containers">
        <div>
          <h1 className="mb-3">Become our honorable writter and blogger</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
            asperiores alias tempora laborum a explicabo error. Eum, quis fugit
            eos aut doloribus repellat eveniet dolorem ea non facere fuga
            quibusdam.
          </p>
          <a href="#" className="tap" onClick={bubleAni}>
            JOIN NOW
          </a>
        </div>
      </div>
    </section>
  );
};

export default Writter;
