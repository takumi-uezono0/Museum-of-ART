import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import img1 from "./images/red 1mainMap.png";
import Clock from "./Clock";
import "./Home.css";

export const Home = () => {
  return (
    <>
      <Header />
      <div className="Home1">
        <p id="clock1">
          <Clock />
        </p>
      </div>
      <div id="Home2">
        <div id="tab1">
          <a href="/cart">Shopping cart 　/ 　</a>
          <a href="/production">Production 　/　</a>
          <a href="/contact">
            Contact
            <br />
          </a>
          <a href="/">
            <span id="Museum1">C</span>ontemporay <span id="Museum1">M</span>
            useum
            <br />
            of <span id="Museum1">A</span>rt.
          </a>
        </div>
        <div className="content">
          <img src={img1} />
        </div>
        <p id="title1">現代アートをもっと身近に</p>
        <p id="text1">
          日本人はアートと縁がない、裕福な家庭の娯楽という
          <br />
          認識を払拭したい。
          <br />
          そんな気持ちで当サイトを作成しました。
          <br />
          今回は【若者】をターゲットに
          <br />
          お洒落で親しみやすい作品をピックアップ！
          <br />
          ぜひバーチャルポップアップ美術館をお楽しみください。
          <br />
        </p>
      </div>
      <Footer />
    </>
  );
};
