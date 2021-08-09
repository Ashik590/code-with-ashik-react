import React from "react";
import aboutPic from "../img/about.jpg";

const About = () => {
  return (
    <section id="about">
      <div className="containers">
        <h1>About Us</h1>
        <div>
          <img src={aboutPic} alt="Photo" className="d-block w-100" />
          <div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perspiciatis accusantium quam quia quod quis qui? Illo officiis
              amet velit non
            </p>
            <p className="mb-0">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perspiciatis accusantium quam quia quod quis qui? Illo officiis
              amet velit non.Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Id asperiores alias tempora laborum a explicabo error. Eum,
              quis fugit eos aut doloribus repellat eveniet dolorem ea non
              facere fuga quibusdam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
