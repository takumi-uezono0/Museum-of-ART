import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <>
      <Header />
      <div className="Home1">
        <p>時間の表示</p>
        <li>
          <ul>Shopping cart</ul>
          <ul>Production</ul>
          <ul>Contact</ul>
        </li>
        <li>
          <ul>Contemporay Museum of Art</ul>
        </li>
        <p>画像の配置</p>
        <p>現代アートをもっと身近に</p>
        <p>
            日本人はアートと縁がない、裕福な家庭の娯楽という<br />
            認識を払拭したい。<br />
            そんな気持ちで当サイトを作成しました。<br />
            今回は【若者】をターゲットに<br />
            お洒落で親しみやすい作品をピックアップ！<br />
            ぜひバーチャルポップアップ美術館をお楽しみください。<br />
        </p>
        
    </div>
      <Footer />
    </>
  );
};
