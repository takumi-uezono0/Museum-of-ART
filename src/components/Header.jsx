import React from "react";

export const Header = () => {
  return (
    <header>
      <a className="logo" href="/products">
        作品一覧へ
      </a>
      <a className="logo" href="/">
        MAPへ
      </a>
      <a className="logo" href="/Cart">
        ShoppngCartへ
      </a>
    </header>
  );
};
