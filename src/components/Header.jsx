import React from "react";

export const Header = () => {
  return (
    <header>
      <a className="logo" href="/production">
        作品一覧へ
      </a>
      <a className="logo" href="/">
        MAPへ
      </a>
      <a className="logo" href="/cart">
        ShoppngCartへ
      </a>
      <a className="logo" href="/contact">
        お問い合わせへ
      </a>
    </header>
  );
};
