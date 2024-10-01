Production.jsx

import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "./Production.css";
import img1 from "./images/Balloon Dog.png";
import img2 from "./images/andy 1marilyn monroe.png";
import img3 from "./images/mother&children 1Mother and Child.png";
import img4 from "./images/izumi 1Fountain.png";
import img5 from "./images/2023-01-23 1 1untitled.png";
import img6 from "./images/スクリーンショット 2023-02-01 0.27 1Number28.png";
import img7 from "./images/1673480428 1composition.png";

export const Production = () => {
  return (
    <>
      <Header />

      <p id="production1">
        <span id="production2">P</span>roduction
      </p>
      <p id="production1"><span id="production2">P</span>roduction</p>
      <div id="production3">
        <div id="production4">
          <img id="image1" src={img1} />
          <div id="sample1">
            <p id="text1">
              Jeff Lynn Koons
              <br />
              『Balloon Dog (Blue)』
            </p>
            <p id="text1">Jeff Lynn Koons<br />
            『Balloon Dog (Blue)』</p>
            <p>￥6,300,000,000-</p>
            <input id="value1" type="submit" value="カートに入れる" name=" " />
          </div>
        </div>
        <div id="production5">
          <img id="image2" src={img2} />
          <div id="sample2">
            <p id="text2">
              Andy Warhol
              <br />
              『marilyn monroe』
            </p>
            <p id="text2">Andy Warhol<br />
            『marilyn monroe』</p>

            <p>￥25,000,000,000-</p>
            <input id="value2" type="submit" value="カートに入れる" name=" " />
          </div>
        </div>
        <div id="production6">
          <img id="image3" src={img3} />
          <div id="sample3">
            <p id="text3">
              Damien Hirst
              <br />
              『Mother and Child, Divided』
            </p>
            <p id="text3">Damien Hirst<br />
            『Mother and Child, Divided』</p>
            <p>￥21,100,000,000-</p>
            <input id="value3" type="submit" value="カートに入れる" name=" " />
          </div>
        </div>
        <div id="production7">
          <img id="image4" src={img4} />
          <div id="sample4">
            <p id="text4">
              Marcel Duchamp
              <br />
              『Fountain』
            </p>
            <p id="text4">Marcel Duchamp<br />
            『Fountain』</p>
            <p>￥200,000,000-</p>
            <input id="value4" type="submit" value="カートに入れる" name=" " />
          </div>
        </div>
        <div id="production8">
          <img id="image5" src={img5} />
          <div id="sample5">
            <p id="text5">
              Jean-Michel Basquiat
              <br />
              『untitled』
            </p>
            <p id="text5">Jean-Michel Basquiat<br />
            『untitled』</p>
            <p>￥110,500,000-</p>
            <input id="value5" type="submit" value="カートに入れる" name=" " />
          </div>
        </div>
        <div id="production9">
          <img id="image6" src={img6} />
          <div id="sample6">
            <p id="text6">
              Jackson Pollock
              <br />
              『Number28』
            </p>
            <p id="text6">Jackson Pollock<br />
            『Number28』</p>
            <p>￥500,000,000-</p>
            <input id="value6" type="submit" value="カートに入れる" name=" " />
          </div>
        </div>
        <div id="production10">
          <img id="image7" src={img7} />
          <div id="sample7">
            <p id="text7">
              Piet Mondrian
              <br />
              『Composition：No. II, with Yellow, Red and Blue』
            </p>
            <p>￥2,700,000,000-</p>
            <input id="value7" type="submit" value="カートに入れる" name=" " />

            <p id="text7">Piet Mondrian<br />
            『Composition：No. II, with Yellow, Red and Blue』</p>
            <p>￥2,700,000,000-</p>
            <input id="value7" type="submit" value="カートに入れる" name=" " />   
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

