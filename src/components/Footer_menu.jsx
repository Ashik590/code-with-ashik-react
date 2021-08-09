import React from "react";
import logo2 from "../img/logo-2.svg";
import instaFooter from "../img/insta-footer.svg";
import youtubeFooter from "../img/youtube-footer.svg";
import messengerFooter from "../img/messenger-footer.svg";
import fbFooter from "../img/fb-footer.svg";
import linkedinFooter from "../img/linkedin-footer.svg";
import twitterFooter from "../img/twitter-footer.svg";
import playStore from "../img/play-store.jpg";
import paperPlane from "../img/send.svg";

const Footer_menu = () => {
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
    <section id="footer_menu">
      <div className="containers">
        <div className="footer_menu_item">
          <img src={logo2} alt="logo" className="logo-2 mb-4" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolor
            id quos facilis quod dolores corrupti aliquid illum sunt
            dignissimos?
          </p>
          <div className="btns">
            <a href="#" className="tap me-2" onClick={bubleAni}>
              Be member
            </a>
            <a href="#" className="tap" onClick={bubleAni}>
              Be Writter
            </a>
          </div>
        </div>
        <div className="footer_menu_item">
          <div className="media">
            <div>
              <a href="#" className="d-grid">
                <img src={instaFooter} alt="Instagram" />
              </a>
            </div>
            <div>
              <a href="#" className="d-grid">
                <img src={youtubeFooter} alt="Instagram" />
              </a>
            </div>
            <div>
              <a href="#" className="d-grid">
                <img src={messengerFooter} alt="Instagram" />
              </a>
            </div>
            <div>
              <a href="#" className="d-grid">
                <img src={fbFooter} alt="Instagram" />
              </a>
            </div>
            <div>
              <a href="#" className="d-grid">
                <img src={linkedinFooter} alt="Instagram" />
              </a>
            </div>
            <div>
              <a href="#" className="d-grid">
                <img src={twitterFooter} alt="Instagram" />
              </a>
            </div>
          </div>
          <div className="app mt-4">
            <h5>Get our Android app on Google Play Store</h5>
            <a href="#">
              <img src={playStore} alt="Play Store" />
            </a>
          </div>
        </div>
        <div className="footer_send">
          <h5>Get on gmail in every blog we'll post</h5>
          <form className="d-flex mt-3">
            <input
              className="px-2"
              type="text"
              placeholder="Enter your email"
            />
            <button className="tap">
              <img src={paperPlane} alt="icon" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Footer_menu;
